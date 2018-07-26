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
      // eslint-disable-next-line
      processBootTasks = __non_webpack_require__(`${processBootTasksPath}`);
    } catch (e) {
      logger.error(e);
      processBootTasks = {};
    }

    const tasks = merge({}, bootTasks, processBootTasks);

    logger.debug(tasks);

    resolve({
      ...context,
      bootTasks,
      tasks
    });
  });
