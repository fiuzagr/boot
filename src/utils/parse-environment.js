// Vendor
import pickBy from 'lodash/pickBy';

// local
import logger from 'logger';

export default (settings = {}) => {
  logger.info('Parsing environment variables...');

  const bootEnv = pickBy(process.env, (_, key) => key.indexOf('BOOT_') >= 0);

  if (!process.env.NODE_ENV) {
    logger.warn('NODE_ENV is not defined! Assuming "development"...');
  }

  bootEnv.NODE_ENV = process.env.NODE_ENV || 'development';
  bootEnv.DEBUG =
    !process.env.DEBUG === false || bootEnv.NODE_ENV !== 'production';
  bootEnv.PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

  logger.debug(bootEnv);

  return Promise.resolve({
    ...settings,
    env: bootEnv
  });
};
