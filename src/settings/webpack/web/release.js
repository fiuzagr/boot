const path = require('path');

module.exports = context => {
  const { settings, paths, env } = context;
  let common = settings.webpack.web.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  const processPath = paths.process.root;
  const distPath = path.join(processPath, 'dist', 'release');

  return {
    ...common,
    mode: 'production',

    output: {
      path: distPath,
      filename: 'static/script/[name].[hash].js',
      sourceMapFilename: 'static/script/[name].[hash].map',
      chunkFilename: 'static/script/[name].[hash].js'
    },

    devServer: {
      contentBase: distPath,
      publicPath: env.PUBLIC_PATH || process.env.PUBLIC_PATH || '/',
      port: env.PORT || process.env.PORT || '8000',
      host: env.HOST || process.env.HOST || '0.0.0.0'
    }
  };
};
