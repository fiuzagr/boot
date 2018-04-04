const _path = require('path');

module.exports = settings => {
  const { webpackFiles, path, env } = settings;
  const web = require(webpackFiles.web.common)(settings);

  const processPath = path.process.root;
  const distPath = _path.join(processPath, 'dist', 'release');

  return {
    ...web,
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
