// Vendor
import fs from 'fs';
import path from 'path';
import property from 'lodash/property';
import cloneDeep from 'lodash/cloneDeep';
import clone from 'lodash/clone';
import reduce from 'lodash/reduce';
import filter from 'lodash/filter';
import remove from 'lodash/remove';
import slice from 'lodash/slice';

// local
import logger from './logger';

export const getPaths = (settings = {}) => {
  logger.info('Getting paths...');

  const bootPath = path.resolve(__dirname, '..');
  const bootModules = path.join(bootPath, 'node_modules');
  const processPath = path.resolve(process.cwd());

  const paths = {
    boot: {
      root: bootPath,
      modules: bootModules,
      src: path.join(bootPath, 'src'),
      webpack: path.join(bootPath, 'webpack')
    },
    process: {
      root: processPath,
      modules: path.join(processPath, 'node_modules'),
      src: path.join(processPath, 'src'),
      boot: path.join(processPath, '.boot'),
      webpack: path.join(processPath, '.boot', 'webpack')
    }
  };

  logger.debug(paths);

  return Promise.resolve({
    ...settings,
    path: paths
  });
};

export const getBootEnv = (settings = {}) => {
  logger.info('Getting boot environment variables...');

  const bootEnv = reduce(
    filter(process.env, (value, key) => key.indexOf('BOOT_') >= 0),
    (env, value, key) => {
      env[key.replace('BOOT_', '')] = value;
      return env;
    },
    {}
  );

  if (!process.env.NODE_ENV) {
    logger.warn('NODE_ENV is not defined! Assuming "production"...');
  }

  bootEnv.NODE_ENV = process.env.NODE_ENV || 'production';
  bootEnv.DEBUG =
    !process.env.DEBUG === false || bootEnv.NODE_ENV !== 'production';
  bootEnv.PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

  logger.debug(bootEnv);

  return Promise.resolve({
    ...settings,
    env: bootEnv
  });
};

export const getArguments = (settings = {}) => {
  logger.info('Getting boot arguments...');

  const argv = slice(clone(process.argv), 2);
  const dashedArgs = reduce(
    remove(argv, value => value.indexOf('-') === 0),
    (args, value) => {
      const parseArg = /--?([^=]+)=?(.*)/;
      const parsed = value.match(parseArg);
      args[parsed[1]] = parsed[2] || true;
      return args;
    },
    {}
  );

  const args = {
    command: argv[0],
    type: argv[1],
    ...dashedArgs
  };

  logger.debug(args);

  return Promise.resolve({
    ...settings,
    args
  });
};

export const getCommandRunner = settings => {
  logger.info('Getting command runner...');

  const srcPath = settings.path.boot.src;
  const commandFile = path.join(srcPath, `${settings.args.command}.js`);
  const commandRunner = require(`${commandFile}`).default;

  logger.debug(commandFile, commandRunner);

  return Promise.resolve({
    ...settings,
    commandRunner
  });
};

export const getPackageJson = (settings = {}) => {
  logger.info('Getting packages json...');

  const { boot, process } = settings.path;
  const bootPackageJsonFile = path.join(boot.root, 'package.json');
  const bootPackageJson = require(`${bootPackageJsonFile}`);
  const processPackageJsonFile = path.join(process.root, 'package.json');
  const processPackageJson = require(`${processPackageJsonFile}`);
  const packageJson = {
    boot: bootPackageJson,
    process: processPackageJson
  };

  logger.debug(packageJson);

  return Promise.resolve({
    ...settings,
    packageJson
  });
};

export const getDefaultWebpackFileNames = (settings = {}) => {
  logger.info('Getting default webpack file names...');

  const { boot: { webpack } } = settings.path;

  const webpackFiles = {
    common: path.join(webpack, 'common.js'),
    node: path.join(webpack, 'node.js'),
    umd: path.join(webpack, 'umd.js'),
    web: {
      common: path.join(webpack, 'web', 'common.js'),
      debug: path.join(webpack, 'web', 'debug.js'),
      release: path.join(webpack, 'web', 'release.js')
    }
  };

  logger.debug(webpackFiles);

  return Promise.resolve({
    ...settings,
    webpackFiles
  });
};

const fileExists = file => {
  return new Promise((resolve, reject) => {
    fs.access(file, fs.constants.R_OK, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(file);
    });
  });
};

export const getWebpackFileName = (settings = {}) => {
  logger.info(`Getting webpack file name by type "${settings.args.type}"...`);

  const { path: { process }, webpackFiles, args: { type } } = settings;

  return new Promise((resolve, reject) => {
    // try absolute path
    fileExists(type)
      // retry with process relative path
      .catch(() => fileExists(path.resolve(process.root, type)))
      // retry with .boot webpack files
      .catch(() =>
        fileExists(path.resolve(process.boot, 'webpack', `${type}.js`))
      )
      // retry with default webpack files
      .catch(() => property(type)(webpackFiles))
      // Found!
      .then(webpackFile => {
        logger.debug(webpackFile);

        resolve({
          ...settings,
          webpackFile
        });
      })
      // Not found! Invalid type
      .catch(() => reject(new Error(`Invalid type "${type}"`)));
  });
};

export const getWebpackConfig = (settings = {}) => {
  logger.info(`Getting webpack config from file "${settings.webpackFile}"...`);

  let webpackConfig = require(`${settings.webpackFile}`);

  if (typeof webpackConfig === 'function') {
    webpackConfig = webpackConfig(cloneDeep(settings));
  }

  logger.debug(webpackConfig);

  return Promise.resolve({
    ...settings,
    webpackConfig
  });
};
