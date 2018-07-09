// Vendor
// import webpack from 'webpack';
// import rimraf from 'rimraf';

export default ({ webpackFile }) =>
  new Promise((resolve, reject) => {
    let webpackConfig = require(`${webpackFile}`);

    console.log(webpackConfig);

    resolve();
  });
