import path from 'path';
import merge from 'lodash/merge';

import logger from 'logger';
import bootTasks from 'tasks';

export default (context = {}) => {
  logger.info('Merging tasks...');

  const processBootTasksPath = path.resolve(
    context.paths.process.root,
    '.boot',
    'tasks'
  );
  let processBootTasks = {};

  try {
    processBootTasks = require(`${processBootTasksPath}`);
  } catch (e) {
    processBootTasks = {};
  }

  const tasks = merge({}, bootTasks, processBootTasks);

  logger.debug(tasks);

  return Promise.resolve({
    ...context,
    tasks
  });
};
