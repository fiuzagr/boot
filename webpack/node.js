const nodeExternals = require('webpack-node-externals');

module.exports = settings => {
  const { webpackFiles } = settings;
  const common = require(webpackFiles.common)(settings);

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
