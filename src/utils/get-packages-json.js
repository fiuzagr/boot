import fs from 'fs';
import path from 'path';
import logger from 'logger';

const readJson = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(JSON.parse(data));
    });
  });
};

export default (context = {}) => {
  logger.info('Getting packages json...');

  const bootRoot = context.paths.boot.root;
  const bootPackageJsonFile = path.join(bootRoot, 'package.json');

  const processRoot = context.paths.process.root;
  const processPackageJsonFile = path.join(processRoot, 'package.json');

  return readJson(bootPackageJsonFile).then(bootPackageJson =>
    readJson(processPackageJsonFile).then(processPackageJson => {
      const packagesJson = {
        boot: bootPackageJson,
        process: processPackageJson
      };

      logger.debug(packagesJson);

      return {
        ...context,
        packagesJson: {
          boot: bootPackageJson,
          process: processPackageJson
        }
      };
    })
  );
};
