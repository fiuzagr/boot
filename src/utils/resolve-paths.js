import path from 'path';
import logger from '@local/logger';

export default (context = {}) =>
  new Promise(resolve => {
    logger.info('Resolving paths...');

    const bootPath = process.env.BOOT_ROOT_PATH;
    const processPath = path.resolve(process.cwd());

    const paths = {
      boot: {
        root: bootPath,
        modules: path.join(bootPath, 'node_modules')
      },
      process: {
        root: processPath,
        modules: path.join(processPath, 'node_modules'),
        src: path.join(processPath, 'src')
      }
    };

    logger.debug(paths);

    resolve({
      ...context,
      paths
    });
  });
