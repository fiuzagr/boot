const camelCase = require('lodash/camelCase');

module.exports = settings => {
  const { webpackFiles, packageJson } = settings;
  const common = require(webpackFiles.common)(settings);

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
