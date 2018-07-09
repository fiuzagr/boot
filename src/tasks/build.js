// Vendor
import webpack from 'webpack';
import rimraf from 'rimraf';
import map from 'lodash/map';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';

// local
import logger from 'logger';

const getBuildSettings = context => {
  logger.info('Getting build settings...');

  const args = map(context.args._, arg => arg.replace('/', '.'));
  const buildSettings = map(args, arg => {
    const sett = get(context.settings, arg);
    return typeof sett === 'function' ? sett(cloneDeep(context)) : sett;
  });

  logger.debug(buildSettings);

  return Promise.resolve({
    ...context,
    buildSettings
  });
};

export default (context = {}) =>
  getBuildSettings(context).then(
    ({ buildSettings, env, args }) =>
      new Promise((resolve, reject) => {
        logger.info('Building...');

        logger.debug('Removing path:', buildSettings[0].output.path);

        rimraf(buildSettings[0].output.path, {}, err => {
          if (err) {
            reject(err);
            return;
          }

          logger.debug('Building config:', buildSettings[0]);

          webpack(buildSettings[0], (err, stats) => {
            if (err) {
              reject(err);
              return;
            }

            if (stats.hasErrors() && (args.watch || args.w)) {
              reject(
                stats.toString({
                  chunks: false,
                  colors: env.DEBUG
                })
              );
              return;
            }

            logger.info(
              stats.toString({
                chunks: false,
                colors: env.DEBUG
              })
            );

            resolve(buildSettings[0]);
          });
        });
      })
  );
