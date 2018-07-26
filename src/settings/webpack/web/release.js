import path from 'path';

export default context => {
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
      ...common.output,
      path: distPath,
      filename: 'static/script/[name].[hash].js',
      sourceMapFilename: 'static/script/[name].[hash].map',
      chunkFilename: 'static/script/[name].[hash].js'
    },

    devServer: {
      contentBase: distPath,
      publicPath: env.PUBLIC_PATH || '/',
      port: env.PORT || '8000',
      host: env.HOST || '0.0.0.0'
    }
  };
};
