// Vendor
import webpack from 'webpack';
import rimraf from 'rimraf';

// local
import logger from './logger';

export default ({ webpackConfig, env }) =>
  new Promise((resolve, reject) => {
    logger.info('Building...');

    rimraf(webpackConfig.output.path, {}, err => {
      if (err) {
        reject(err);
        return;
      }

      webpack(webpackConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
          reject(err);
          return;
        }

        logger.info(
          stats.toString({
            colors: env.DEBUG
          })
        );

        resolve(webpackConfig);
      });
    });
  });
