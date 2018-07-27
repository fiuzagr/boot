import path from 'path';
import webpack from 'webpack';
import map from 'lodash/map';
import keys from 'lodash/keys';
import compact from 'lodash/compact';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({ paths, args, env, packagesJson }) => {
  const bootModulesPath = paths.boot.modules;

  const watch = args.w || args.watch || env.WATCH || process.env.WATCH;
  const processPath = paths.process.root;
  const processSrcPath = paths.process.src;
  const processModulesPath = paths.process.modules;

  const distPath = path.join(processPath, 'dist');

  const debugMode = env.DEBUG;
  const mode = debugMode ? 'development' : 'production';
  const publicPath = args.publicPath || env.PUBLIC_PATH || '/';

  const styleLoader = debugMode
    ? 'style-loader'
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath
        }
      };

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
        },
        {
          test: /\.css$/,
          include: [processSrcPath],
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /font.*\.(svg|woff|woff2|ttf|eot)$/,
          include: [processSrcPath],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/font/[name].[hash].[ext]',
                publicPath
              }
            }
          ]
        },
        {
          test: /^(?!.*(icon_|favicon)).*\.(png|jpg|gif)$/,
          include: [processSrcPath],
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: [processSrcPath],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/image/[name].[hash].[ext]',
                publicPath
              }
            }
          ]
        }
      ]
    },

    plugins: compact([
      new webpack.DefinePlugin({
        ...keys(env, k => ({ [`process.env.${k}`]: JSON.stringify(env[k]) })),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      !debugMode &&
        new MiniCssExtractPlugin({
          filename: 'static/style/[name].[hash].css',
          chunkFilename: 'static/style/[id].[hash].css'
        })
    ]),

    watch,

    watchOptions: {
      aggregateTimeout: 1000,
      poll: 1000,
      ignored: /node_modules|.git/
    }
  };
};
