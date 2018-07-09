const camelCase = require('lodash/camelCase');

module.exports = context => {
  const { settings, packagesJson } = context;
  let common = settings.webpack.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  return {
    ...common,

    output: {
      ...common.output,
      library: {
        root: camelCase(packagesJson.process.name),
        amd: camelCase(packagesJson.process.name),
        commonjs: packagesJson.process.name
      },
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  };
};
