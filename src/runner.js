import logger from 'logger';
import parseArguments from 'utils/parse-arguments';
import parseEnvironment from 'utils/parse-environment';
import resolvePaths from 'utils/resolve-paths';
import getPackagesJson from 'utils/get-packages-json';
import mergeSettings from 'utils/merge-settings';
import mergeTasks from 'utils/merge-tasks';

const getTaskRunner = context => {
  logger.info('Getting task runner...');

  const task = context.args.task;
  const tasks = context.tasks;
  const taskRunner = tasks[task];

  logger.debug(taskRunner);

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
    .then(getTaskRunner)
    .then(({ taskRunner, ...rest }) => taskRunner(rest))
    .catch(e => {
      logger.error(e);
      process.exit(1);
    });
