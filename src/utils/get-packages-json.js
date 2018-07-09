import path from 'path';
import logger from 'logger';

import bootPackageJson from '../../package.json';

export default (context = {}) => {
  logger.info('Getting packages json...');

  const processRoot = context.paths.process.root;
  const processPackageJsonFile = path.join(processRoot, 'package.json');
  const processPackageJson = require(`${processPackageJsonFile}`);

  const packagesJson = {
    boot: bootPackageJson,
    process: processPackageJson
  };

  logger.debug(packagesJson);

  return Promise.resolve({
    ...context,
    packagesJson
  });
};
