import path from 'path';
import merge from 'lodash/merge';

import logger from 'logger';
import bootSettings from 'settings';

export default (context = {}) => {
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

  return Promise.resolve({
    ...context,
    settings
  });
};
