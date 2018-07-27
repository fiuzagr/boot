import map from 'lodash/map';
import compact from 'lodash/compact';

import logger from '@local/logger';
import getSettings from '@local/utils/get-settings';

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

    const parsedSettings = map(args, arg =>
      getSettings(context)(context.settings, arg)
    );

    logger.debug({ parsedSettings });

    resolve({
      ...context,
      parsedSettings
    });
  });
