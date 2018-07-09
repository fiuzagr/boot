import clone from 'lodash/clone';
import reduce from 'lodash/reduce';
import remove from 'lodash/remove';
import slice from 'lodash/slice';

import logger from '@local/logger';

export default (context = {}) =>
  new Promise(resolve => {
    logger.info('Parsing arguments...');

    const argv = slice(clone(process.argv), 2);

    const dashedArgs = reduce(
      remove(argv, value => value.indexOf('-') === 0),
      (args, value) => {
        const parseArg = /--?([^=]+)=?(.*)/;
        const parsed = value.match(parseArg);
        args[parsed[1]] = parsed[2] || true;
        return args;
      },
      {}
    );

    const args = {
      task: argv.shift(),
      _: argv,
      ...dashedArgs
    };

    logger.debug(args);

    resolve({
      ...context,
      args
    });
  });
