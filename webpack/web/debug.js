const _path = require('path');

module.exports = settings => {
  const { webpackFiles, path, env } = settings;
  const web = require(webpackFiles.web.common)(settings);

  const processPath = path.process.root;
  const distPath = _path.join(processPath, 'dist', 'debug');

  return {
    ...web,
    mode: 'development',
    devtool: 'eval-source-map',
    bail: false,
    profile: true,
    cache: false,
    stats: 'normal',

    output: {
      path: distPath,
      filename: 'static/script/[name].js',
      sourceMapFilename: 'static/script/[name].map',
      chunkFilename: 'static/script/[name].js'
    },

    devServer: {
      contentBase: distPath,
      publicPath: env.PUBLIC_PATH || process.env.PUBLIC_PATH || '/',
      port: env.PORT || process.env.PORT || '3000',
      host: env.HOST || process.env.HOST || '0.0.0.0'
    }
  };
};
