const nodeExternals = require('webpack-node-externals');

module.exports = context => {
  let common = context.settings.webpack.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  return {
    ...common,
    target: 'node',
    devtool: undefined,

    output: {
      ...common.output,
      libraryTarget: 'commonjs2'
    },

    externals: common.externals.concat([nodeExternals()])
  };
};
