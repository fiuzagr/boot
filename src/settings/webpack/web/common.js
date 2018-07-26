import path from 'path';
import OfflinePlugin from 'offline-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import camelCase from 'lodash/camelCase';
import ip from 'ip';

export default context => {
  const { settings, paths, env, packagesJson, args, banner } = context;
  const publicPath = args.publicPath || env.PUBLIC_PATH || '/';
  const host = args.h || args.host || env.HOST || '0.0.0.0';
  const port = args.p || args.port || env.PORT || '3000';
  const publicIp = (ip.address() || '0.0.0.0') + ':' + port;
  let common = settings.webpack.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  const bootModulesPath = paths.boot.modules;
  const processSrcPath = paths.process.src;

  return {
    ...common,
    target: 'web',

    resolve: {
      ...common.resolve,

      alias: {
        ...common.resolve.alias,
        '@offline-plugin': path.join(bootModulesPath, 'offline-plugin')
      }
    },

    plugins: [
      ...common.plugins,

      new HtmlWebpackPlugin({
        metadata: {
          publicPath,
          version: env.VERSION || packagesJson.process.version,
          author: packagesJson.process.author,
          banner: banner || 'Powered by boot',
          buildDate: new Date().toString()
        },
        filename: 'index.html',
        template: path.resolve(processSrcPath, 'index.html'),
        chunksSortMode: 'dependency',
        favicon: path.resolve(processSrcPath, 'assets/images/icons/favicon.ico')
      }),

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
          asset.indexOf('web-app-manifest.json') >= 0
            ? '/web-app-manifest.json'
            : asset.indexOf('index.html') >= 0
              ? publicPath
              : asset,
        ServiceWorker: {
          // cacheName is very dangerous: CAN NOT CHANGE
          cacheName: `${camelCase(packagesJson.process.name)}:${camelCase(
            publicPath === '/' ? 'index' : publicPath
          )}`,
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
    ],

    devServer: {
      stats: 'minimal',
      public: publicIp,
      publicPath,
      host,
      port,
      historyApiFallback: {
        index: publicPath
      }
    }
  };
};
