import {
  getPaths,
  getBootEnv,
  getPackageJson,
  getArguments,
  getDefaultWebpackFileNames,
  getWebpackFileName,
  getWebpackConfig,
  getCommandRunner
} from './helpers';

import logger from './logger';

// ensures that ctrl+c interrupts the process
process.on('SIGINT', () => {
  process.exit(0);
});

export default (settings = {}) =>
  getPaths(settings)
    .then(getArguments)
    .then(getBootEnv)
    .then(getCommandRunner)
    .then(getPackageJson)
    .then(getDefaultWebpackFileNames)
    .then(getWebpackFileName)
    .then(getWebpackConfig)
    .then(({ commandRunner, ...rest }) => commandRunner(rest))
    .catch(e => {
      logger.error(e);
      process.exit(1);
    });
