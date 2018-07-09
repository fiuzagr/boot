import reduce from 'lodash/reduce';
import pickBy from 'lodash/pickBy';

import logger from '@local/logger';

export default (settings = {}) =>
  new Promise(resolve => {
    logger.info('Parsing environment variables...');

    const bootEnv = reduce(
      pickBy(process.env, (_, key) => key.indexOf('BOOT_') >= 0),
      (reduced, value, key) => {
        return {
          ...reduced,
          [key.replace('BOOT_', '')]: value
        };
      },
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
        DEBUG: !process.env.DEBUG === false
      }
    );

    if (!process.env.NODE_ENV) {
      logger.warn(`NODE_ENV is not defined! Assuming "${bootEnv.NODE_ENV}"...`);
      process.env.NODE_ENV = bootEnv.NODE_ENV;
    }

    logger.debug(bootEnv);

    resolve({
      ...settings,
      env: bootEnv
    });
  });
