import path from 'path';
import webpack from 'webpack';
import map from 'lodash/map';
import keys from 'lodash/keys';

export default ({ paths, args, env, packagesJson }) => {
  const bootModulesPath = paths.boot.modules;

  const watch = args.w || args.watch || env.WATCH || process.env.WATCH;
  const processPath = paths.process.root;
  const processSrcPath = paths.process.src;
  const processModulesPath = paths.process.modules;

  const distPath = path.join(processPath, 'dist');

  const debugMode = env.DEBUG;
  const mode = debugMode ? 'development' : 'production';
  const publicPath = env.PUBLIC_PATH || '/';

  return {
    mode,
    devtool: debugMode ? 'eval-source-map' : 'source-map',
    bail: !debugMode,
    profile: debugMode,
    cache: !debugMode,
    stats: debugMode ? 'normal' : 'minimal',

    entry: {
      index: [path.join(processSrcPath, 'index.js')]
    },

    output: {
      publicPath,
      path: distPath,
      filename: '[name].js'
    },

    resolve: {
      symlinks: true,
      extensions: ['.js', '.jsx'],
      modules: [processSrcPath, processModulesPath, bootModulesPath],
      alias: {
        '@local': processSrcPath
      }
    },

    resolveLoader: {
      symlinks: true,
      modules: [processModulesPath, bootModulesPath]
    },

    externals: map(
      keys(packagesJson.process.peerDependencies || {}),
      dependency => new RegExp(`${dependency}(/.+)?`)
    ),

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [processSrcPath],
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        ...keys(env, k => ({ [`process.env.${k}`]: JSON.stringify(env[k]) })),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],

    watch,

    watchOptions: {
      aggregateTimeout: 1000,
      poll: 1000,
      ignored: /node_modules|.git/
    }
  };
};
