import get from 'lodash/get';

import logger from '@local/logger';
import parseArguments from '@local/utils/parse-arguments';
import parseEnvironment from '@local/utils/parse-environment';
import resolvePaths from '@local/utils/resolve-paths';
import getPackagesJson from '@local/utils/get-packages-json';
import mergeSettings from '@local/utils/merge-settings';
import mergeTasks from '@local/utils/merge-tasks';
import parseSettings from '@local/utils/parse-settings';
import loadContext from '@local/utils/load-context';

const getTaskRunner = context => {
  logger.info('Getting task runner...');

  const task = context.args.task;
  const taskRunner = get(context.tasks, task);

  logger.debug(task, taskRunner);

  return Promise.resolve({
    ...context,
    taskRunner
  });
};

export default (context = {}) =>
  parseArguments(context)
    .then(parseEnvironment)
    .then(resolvePaths)
    .then(getPackagesJson)
    .then(mergeSettings)
    .then(mergeTasks)
    .then(loadContext)
    .then(parseSettings)
    .then(getTaskRunner)
    .then(({ taskRunner, ...rest }) => taskRunner(rest))
    .then(close => {
      ['SIGINT', 'SIGTERM'].forEach(sig => {
        process.on(sig, () => {
          typeof close === 'function'
            ? close(() => process.exit(0))
            : process.exit(0);
        });
      });
    })
    .catch(e => {
      logger.error(e);
      process.exit(1);
    });
