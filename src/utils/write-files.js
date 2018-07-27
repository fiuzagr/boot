import fs from 'fs';
import map from 'lodash/map';
import logger from '@local/logger';

export default files =>
  Promise.all(
    map(
      files,
      ({ file, data }) =>
        new Promise((resolve, reject) => {
          fs.writeFile(file, data, { encoding: 'utf8' }, err => {
            if (err) {
              reject(err);
              return;
            }

            logger.debug('Saved file:', file);

            resolve(file);
          });
        })
    )
  );
