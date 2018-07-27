import fs from 'fs';
import filter from 'lodash/filter';
import logger from '@local/logger';

export default dir =>
  new Promise((resolve, reject) => {
    fs.readdir(dir, {}, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      files = filter(files, file => /\.js$/.test(file));

      logger.debug('Read dir:', dir);
      logger.debug({ files });

      resolve(files);
    });
  });
