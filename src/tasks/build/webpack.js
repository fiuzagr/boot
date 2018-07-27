import webpack from 'webpack';
import logger from '@local/logger';
import removeDir from '@local/utils/remove-dir';

const webpackRunner = ({ webpackSettings, args, env }) =>
  new Promise((resolve, reject) => {
    webpack(webpackSettings, (err, stats) => {
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

      resolve();
    });
  });

export default ({ parsedSettings, env, args }) =>
  new Promise((resolve, reject) => {
    logger.info('Building webpack...');

    const settings = parsedSettings[0];

    removeDir(settings.output.path)
      .then(() => webpackRunner({ webpackSettings: settings, env, args }))
      .then(resolve)
      .catch(reject);
  });
