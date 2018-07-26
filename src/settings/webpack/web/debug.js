import path from 'path';

export default context => {
  const { settings, paths } = context;
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
      ...common.output,
      path: distPath,
      filename: 'static/script/[name].js',
      sourceMapFilename: 'static/script/[name].map',
      chunkFilename: 'static/script/[name].js'
    },

    devServer: {
      ...common.devServer,
      contentBase: distPath
    }
  };
};
