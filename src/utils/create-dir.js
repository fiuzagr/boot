import fs from 'fs';
import logger from '@local/logger';

export default dir =>
  new Promise((resolve, reject) => {
    fs.mkdir(dir, {}, err => {
      if (err) {
        reject(err);
        return;
      }

      logger.debug('Created dir:', dir);

      resolve(dir);
    });
  });
