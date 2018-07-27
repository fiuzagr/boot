import rimraf from 'rimraf';
import logger from '@local/logger';

export default dir =>
  new Promise((resolve, reject) => {
    rimraf(dir, {}, err => {
      if (err) {
        reject(err);
        return;
      }

      logger.debug('Removed dir:', dir);

      resolve(dir);
    });
  });
