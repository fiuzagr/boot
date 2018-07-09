const camelCase = require('lodash/camelCase');

module.exports = context => {
  const { settings, packageJson } = context;
  let common = settings.webpack.common;

  if (typeof common === 'function') {
    common = common(context);
  }

  return {
    ...common,

    output: {
      ...common.output,
      library: {
        root: camelCase(packageJson.process.name),
        amd: camelCase(packageJson.process.name),
        commonjs: packageJson.process.name
      },
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  };
};
