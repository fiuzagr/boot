import fs from 'fs';
import logger from '@local/logger';

export default (file, encoding = 'utf8') =>
  new Promise((resolve, reject) => {
    logger.info(`Reading file "${file}"...`);

    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
