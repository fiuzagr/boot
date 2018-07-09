import path from 'path';
import merge from 'lodash/merge';

import logger from '@local/logger';
import bootSettings from '@local/settings';

export default (context = {}) =>
  new Promise(resolve => {
    logger.info('Merging settings...');

    const processBootSettingsPath = path.resolve(
      context.paths.process.root,
      '.boot',
      'settings'
    );
    let processBootSettings = {};

    try {
      processBootSettings = require(`${processBootSettingsPath}`);
    } catch (e) {
      processBootSettings = {};
    }

    const settings = merge({}, bootSettings, processBootSettings);

    logger.debug(settings);

    resolve({
      ...context,
      settings
    });
  });
