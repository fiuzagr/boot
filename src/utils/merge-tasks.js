import path from 'path';
import merge from 'lodash/merge';

import logger from '@local/logger';
import bootTasks from '@local/tasks';

export default (context = {}) =>
  new Promise(resolve => {
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

    resolve({
      ...context,
      tasks
    });
  });
