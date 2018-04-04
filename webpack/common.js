const _path = require('path');
const webpack = require('webpack');
const keys = require('lodash/keys');

module.exports = ({ path, args, env, packageJson }) => {
  const bootModulesPath = path.boot.modules;

  const watch = args.w || args.watch || env.WATCH || process.env.WATCH;
  const processPath = path.process.root;
  const processSrcPath = path.process.src;
  const processModulesPath = path.process.modules;

  const distPath = _path.join(processPath, 'dist');

  const debugMode = env.DEBUG;
  const mode = debugMode ? 'development' : 'production';
  const publicPath = env.PUBLIC_PATH;

  return {
    mode,
    devtool: debugMode ? 'eval-source-map' : 'source-map',
    bail: !debugMode,
    profile: debugMode,
    cache: !debugMode,
    stats: debugMode ? 'normal' : 'minimal',

    entry: {
      index: [_path.join(processSrcPath, 'index.js')]
    },

    output: {
      publicPath,
      path: distPath,
      filename: '[name].js'
    },

    resolve: {
      symlinks: true,
      extensions: ['.js', '.jsx'],
      modules: [bootModulesPath, processModulesPath, processSrcPath]
    },

    resolveLoader: {
      symlinks: true,
      modules: [bootModulesPath, processModulesPath]
    },

    externals: Object.keys(packageJson.process.peerDependencies || {}).concat(
      []
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
