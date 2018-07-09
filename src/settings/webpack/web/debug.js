const path = require('path');

module.exports = context => {
  const { settings, paths, env } = context;
  let common = settings.webpack.web.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  const processPath = paths.process.root;
  const distPath = path.join(processPath, 'dist', 'debug');

  return {
    ...common,
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
