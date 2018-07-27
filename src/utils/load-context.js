import path from 'path';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

import logger from '@local/logger';

export default (context = {}) =>
  new Promise(resolve => {
    logger.info('Loading .boot context...');

    const processBootContextPath = path.resolve(
      context.paths.process.root,
      '.boot',
      'context'
    );

    let processBootContext;

    try {
      // eslint-disable-next-line
      processBootContext = __non_webpack_require__(`${processBootContextPath}`)
        .default;

      if (typeof processBootContext === 'function') {
        processBootContext = processBootContext(cloneDeep(context));
      }
    } catch (e) {
      logger.error(e);
      processBootContext = {};
    }

    const loadedContext = merge({}, context, processBootContext);

    logger.debug(loadedContext);

    resolve(loadedContext);
  });
