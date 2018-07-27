import map from 'lodash/map';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import compact from 'lodash/compact';

import logger from '@local/logger';

export default (context = {}) =>
  new Promise(resolve => {
    logger.info('Parsing settings...');

    const subtasks = context.args.task
      .split('.')
      .slice(1)
      .join('.');

    logger.debug({ subtasks });

    const args = map(context.args._, arg =>
      compact([subtasks, arg !== 'default' && arg.replace(/[:/]/g, '.')]).join(
        '.'
      )
    );

    logger.debug({ args });

    const parsedSettings = map(args, arg => {
      const sett = get(context.settings, arg);
      return typeof sett === 'function' ? sett(cloneDeep(context)) : sett;
    });

    logger.debug({ parsedSettings });

    resolve({
      ...context,
      parsedSettings
    });
  });
