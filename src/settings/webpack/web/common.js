const OfflinePlugin = require('offline-plugin');
const camelCase = require('lodash/camelCase');

module.exports = context => {
  const { settings, env, packageJson } = context;
  const publicPath = env.PUBLIC_PATH;
  let common = settings.webpack.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  return {
    ...common,
    target: 'web',

    plugins: [
      ...common.plugins,

      new OfflinePlugin({
        safeToUseOptionalCaches: true,
        autoUpdate: false, // true means 1 hour
        caches: {
          main: [':rest:'],
          additional: [':externals:'],
          optional: ['**/font/**/*.*']
        },
        excludes: ['**/.*', '**/*.map'],
        externals: [],
        rewrites: asset =>
          asset.indexOf('web-app.manifest') >= 0
            ? '/web-app.manifest.json'
            : asset.indexOf('index.html') >= 0
              ? publicPath
              : asset,
        ServiceWorker: {
          // cacheName is very dangerous: CAN NOT CHANGE
          cacheName: `${camelCase(
            packageJson.process.name
          )}:${publicPath.replace(/\//g, '')}`,
          events: true,
          output: 'sw.js',
          navigateFallbackURL: publicPath
        },
        AppCache: {
          events: true,
          caches: ['main', 'additional', 'optional'],
          FALLBACK: {
            [publicPath]: publicPath
          }
        }
      })
    ]
  };
};
