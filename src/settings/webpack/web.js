import path from 'path';
import OfflinePlugin from 'offline-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import camelCase from 'lodash/camelCase';
import ip from 'ip';

import getSettings from '@local/utils/get-settings';

export default context => {
  const { settings, paths, env, packagesJson, args, banner } = context;

  const debugMode = env.DEBUG;
  const common = getSettings(context)(settings, 'webpack.common');
  const publicPath = args.publicPath || env.PUBLIC_PATH || '/';
  const host = args.h || args.host || env.HOST || '0.0.0.0';
  const port = args.p || args.port || env.PORT || '3000';
  const publicIp = (ip.address() || '0.0.0.0') + ':' + port;

  const bootModulesPath = paths.boot.modules;
  const processPath = paths.process.root;
  const processSrcPath = paths.process.src;

  let output;

  if (debugMode) {
    output = {
      path: path.join(processPath, 'dist', 'debug'),
      filename: 'static/script/[name].js',
      sourceMapFilename: 'static/script/[name].map',
      chunkFilename: 'static/script/[name].js'
    };
  } else {
    output = {
      path: path.join(processPath, 'dist', 'release'),
      filename: 'static/script/[name].[hash].js',
      sourceMapFilename: 'static/script/[name].[hash].map',
      chunkFilename: 'static/script/[name].[hash].js'
    };
  }

  return {
    ...common,
    target: 'web',

    output: {
      ...common.output,
      ...output
    },

    resolve: {
      ...common.resolve,

      alias: {
        ...common.resolve.alias,
        '@offline-plugin': path.join(bootModulesPath, 'offline-plugin')
      }
    },

    module: {
      ...common.module,
      rules: [
        ...common.module.rules,
        {
          type: 'javascript/auto',
          test: /(\.webmanifest|manifest\.json|browserconfig\.xml)$/,
          include: [processSrcPath],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            },
            {
              loader: 'app-manifest-loader'
            }
          ]
        }
      ]
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
          optional: []
        },
        excludes: ['**/.*', '**/*.map'],
        externals: [],
        rewrites: asset =>
          asset.indexOf('index.html') >= 0 ? publicPath : asset,
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
      contentBase: output.path,
      historyApiFallback: {
        index: publicPath
      }
    },

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };
};
