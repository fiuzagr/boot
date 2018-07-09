import path from 'path';

// local
import logger from '@local/logger';
import readFile from '@local/utils/read-file';

export default (context = {}) => {
  logger.info('Getting packages json...');

  const bootRoot = context.paths.boot.root;
  const bootPackageJsonFile = path.join(bootRoot, 'package.json');

  const processRoot = context.paths.process.root;
  const processPackageJsonFile = path.join(processRoot, 'package.json');

  return readFile(bootPackageJsonFile).then(bootPackageJson =>
    readFile(processPackageJsonFile).then(processPackageJson => {
      const packagesJson = {
        boot: JSON.parse(bootPackageJson),
        process: JSON.parse(processPackageJson)
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
