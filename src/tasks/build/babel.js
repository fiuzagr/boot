import path from 'path';
import map from 'lodash/map';
import { transformFile } from '@babel/core';
import logger from '@local/logger';
import removeDir from '@local/utils/remove-dir';
import createDir from '@local/utils/create-dir';
import readDir from '@local/utils/read-dir';
import writeFiles from '@local/utils/write-files';

const transformFiles = files =>
  Promise.all(
    map(
      files,
      file =>
        new Promise((resolve, reject) => {
          transformFile(file, null, (err, result) => {
            if (err) {
              reject(err);
              return;
            }

            logger.debug('Transformed file:', file);

            resolve({ data: result.code, file: path.basename(file) });
          });
        })
    )
  );

export default ({ parsedSettings, paths }) =>
  new Promise((resolve, reject) => {
    logger.info('Building babel...');

    const settings = parsedSettings[0];
    const outDir = path.resolve(paths.process.root, settings.outDir);
    const inDir = paths.process.src;

    removeDir(outDir)
      .then(createDir)
      .then(() => readDir(inDir))
      .then(files => transformFiles(map(files, file => path.join(inDir, file))))
      .then(results =>
        writeFiles(
          map(results, result => ({
            ...result,
            file: path.join(outDir, result.file)
          }))
        )
      )
      .then(resolve)
      .catch(reject);
  });
