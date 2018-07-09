module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, license, main, engines, bin, scripts, dependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"@fiuzagr/boot\",\"version\":\"1.0.0\",\"description\":\"Boot webpack projects.\",\"author\":\"fiuzagr\",\"license\":\"UNLICENSE\",\"main\":\"index.js\",\"engines\":{\"node\":\">=8.10.0 <9\",\"npm\":\">=5.6.0 <6\"},\"bin\":{\"boot\":\"./bin/boot\"},\"scripts\":{\"build\":\"./bin/boot_src build webpack/node\"},\"dependencies\":{\"@babel/cli\":\"^7.0.0-beta.52\",\"@babel/core\":\"^7.0.0-beta.52\",\"@babel/preset-env\":\"^7.0.0-beta.52\",\"@babel/register\":\"^7.0.0-beta.52\",\"@fiuzagr/logger\":\"github:fiuzagr/logger#master\",\"babel-eslint\":\"^8.2.5\",\"babel-loader\":\"^8.0.0-beta.4\",\"babel-plugin-module-resolver\":\"^3.1.1\",\"dotenv\":\"^6.0.0\",\"eslint\":\"^5.0.1\",\"eslint-config-prettier\":\"^2.9.0\",\"eslint-import-resolver-babel-module\":\"^4.0.0\",\"eslint-plugin-babel\":\"^5.1.0\",\"eslint-plugin-import\":\"^2.13.0\",\"eslint-plugin-node\":\"^6.0.1\",\"eslint-plugin-prettier\":\"^2.6.2\",\"eslint-plugin-promise\":\"^3.8.0\",\"lodash\":\"^4.17.10\",\"offline-plugin\":\"^5.0.5\",\"prettier\":\"^1.13.7\",\"rimraf\":\"^2.6.2\",\"webpack\":\"^4.15.1\",\"webpack-cli\":\"^3.0.8\",\"webpack-node-externals\":\"^1.7.2\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _runner = _interopRequireDefault(__webpack_require__(/*! ./runner */ \"./src/runner.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  runner: _runner.default\n}; // ensures that ctrl+c interrupts the process\n\nexports.default = _default;\nprocess.on('SIGINT', () => {\n  process.exit(0);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nconst logger = __webpack_require__(/*! @fiuzagr/logger */ \"@fiuzagr/logger\").default({\n  debugMode: process.env.DEBUG\n});\n\nvar _default = logger;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/logger.js?");

/***/ }),

/***/ "./src/runner.js":
/*!***********************!*\
  !*** ./src/runner.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ./logger */ \"./src/logger.js\"));\n\nvar _parseArguments = _interopRequireDefault(__webpack_require__(/*! ./utils/parse-arguments */ \"./src/utils/parse-arguments.js\"));\n\nvar _parseEnvironment = _interopRequireDefault(__webpack_require__(/*! ./utils/parse-environment */ \"./src/utils/parse-environment.js\"));\n\nvar _resolvePaths = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-paths */ \"./src/utils/resolve-paths.js\"));\n\nvar _getPackagesJson = _interopRequireDefault(__webpack_require__(/*! ./utils/get-packages-json */ \"./src/utils/get-packages-json.js\"));\n\nvar _mergeSettings = _interopRequireDefault(__webpack_require__(/*! ./utils/merge-settings */ \"./src/utils/merge-settings.js\"));\n\nvar _mergeTasks = _interopRequireDefault(__webpack_require__(/*! ./utils/merge-tasks */ \"./src/utils/merge-tasks.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst getTaskRunner = context => {\n  _logger.default.info('Getting task runner...');\n\n  const task = context.args.task;\n  const tasks = context.tasks;\n  const taskRunner = tasks[task];\n\n  _logger.default.debug(taskRunner);\n\n  return Promise.resolve({ ...context,\n    taskRunner\n  });\n};\n\nvar _default = (context = {}) => (0, _parseArguments.default)(context).then(_parseEnvironment.default).then(_resolvePaths.default).then(_getPackagesJson.default).then(_mergeSettings.default).then(_mergeTasks.default).then(getTaskRunner).then(({\n  taskRunner,\n  ...rest\n}) => taskRunner(rest)).catch(e => {\n  _logger.default.error(e);\n\n  process.exit(1);\n});\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/runner.js?");

/***/ }),

/***/ "./src/settings/index.js":
/*!*******************************!*\
  !*** ./src/settings/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _webpack = _interopRequireDefault(__webpack_require__(/*! ./webpack */ \"./src/settings/webpack/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  webpack: _webpack.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/settings/index.js?");

/***/ }),

/***/ "./src/settings/webpack/common.js":
/*!****************************************!*\
  !*** ./src/settings/webpack/common.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst keys = __webpack_require__(/*! lodash/keys */ \"lodash/keys\");\n\nmodule.exports = ({\n  paths,\n  args,\n  env,\n  packagesJson\n}) => {\n  const bootModulesPath = paths.boot.modules;\n  const watch = args.w || args.watch || env.WATCH || process.env.WATCH;\n  const processPath = paths.process.root;\n  const processSrcPath = paths.process.src;\n  const processModulesPath = paths.process.modules;\n  const distPath = path.join(processPath, 'dist');\n  const debugMode = env.DEBUG;\n  const mode = debugMode ? 'development' : 'production';\n  const publicPath = env.PUBLIC_PATH;\n  return {\n    mode,\n    devtool: debugMode ? 'eval-source-map' : 'source-map',\n    bail: !debugMode,\n    profile: debugMode,\n    cache: !debugMode,\n    stats: debugMode ? 'normal' : 'minimal',\n    entry: {\n      index: [path.join(processSrcPath, 'index.js')]\n    },\n    output: {\n      publicPath,\n      path: distPath,\n      filename: '[name].js'\n    },\n    resolve: {\n      symlinks: true,\n      extensions: ['.js', '.jsx'],\n      modules: [bootModulesPath, processModulesPath, processSrcPath]\n    },\n    resolveLoader: {\n      symlinks: true,\n      modules: [bootModulesPath, processModulesPath]\n    },\n    externals: Object.keys(packagesJson.process.peerDependencies || {}).concat([]),\n    module: {\n      rules: [{\n        test: /\\.jsx?$/,\n        include: [processSrcPath],\n        use: [{\n          loader: 'babel-loader'\n        }]\n      }]\n    },\n    plugins: [new webpack.DefinePlugin({ ...keys(env, k => ({\n        [`process.env.${k}`]: JSON.stringify(env[k])\n      })),\n      'process.env.NODE_ENV': JSON.stringify(undefined)\n    })],\n    watch,\n    watchOptions: {\n      aggregateTimeout: 1000,\n      poll: 1000,\n      ignored: /node_modules|.git/\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/settings/webpack/common.js?");

/***/ }),

/***/ "./src/settings/webpack/index.js":
/*!***************************************!*\
  !*** ./src/settings/webpack/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _common = _interopRequireDefault(__webpack_require__(/*! ./common */ \"./src/settings/webpack/common.js\"));\n\nvar _node = _interopRequireDefault(__webpack_require__(/*! ./node */ \"./src/settings/webpack/node.js\"));\n\nvar _umd = _interopRequireDefault(__webpack_require__(/*! ./umd */ \"./src/settings/webpack/umd.js\"));\n\nvar _web = _interopRequireDefault(__webpack_require__(/*! ./web */ \"./src/settings/webpack/web/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  common: _common.default,\n  node: _node.default,\n  umd: _umd.default,\n  web: _web.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/settings/webpack/index.js?");

/***/ }),

/***/ "./src/settings/webpack/node.js":
/*!**************************************!*\
  !*** ./src/settings/webpack/node.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nmodule.exports = context => {\n  let common = context.settings.webpack.common;\n\n  if (typeof common === 'function') {\n    common = common(context);\n  }\n\n  return { ...common,\n    target: 'node',\n    devtool: undefined,\n    output: { ...common.output,\n      libraryTarget: 'commonjs2'\n    },\n    externals: common.externals.concat([nodeExternals()])\n  };\n};\n\n//# sourceURL=webpack:///./src/settings/webpack/node.js?");

/***/ }),

/***/ "./src/settings/webpack/umd.js":
/*!*************************************!*\
  !*** ./src/settings/webpack/umd.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst camelCase = __webpack_require__(/*! lodash/camelCase */ \"lodash/camelCase\");\n\nmodule.exports = context => {\n  const {\n    settings,\n    packageJson\n  } = context;\n  let common = settings.webpack.common;\n\n  if (typeof common === 'function') {\n    common = common(context);\n  }\n\n  return { ...common,\n    output: { ...common.output,\n      library: {\n        root: camelCase(packageJson.process.name),\n        amd: camelCase(packageJson.process.name),\n        commonjs: packageJson.process.name\n      },\n      libraryTarget: 'umd',\n      globalObject: 'this'\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/settings/webpack/umd.js?");

/***/ }),

/***/ "./src/settings/webpack/web/common.js":
/*!********************************************!*\
  !*** ./src/settings/webpack/web/common.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst OfflinePlugin = __webpack_require__(/*! offline-plugin */ \"offline-plugin\");\n\nconst camelCase = __webpack_require__(/*! lodash/camelCase */ \"lodash/camelCase\");\n\nmodule.exports = context => {\n  const {\n    settings,\n    env,\n    packageJson\n  } = context;\n  const publicPath = env.PUBLIC_PATH;\n  let common = settings.webpack.common;\n\n  if (typeof common === 'function') {\n    common = common(context);\n  }\n\n  return { ...common,\n    target: 'web',\n    plugins: [...common.plugins, new OfflinePlugin({\n      safeToUseOptionalCaches: true,\n      autoUpdate: false,\n      // true means 1 hour\n      caches: {\n        main: [':rest:'],\n        additional: [':externals:'],\n        optional: ['**/font/**/*.*']\n      },\n      excludes: ['**/.*', '**/*.map'],\n      externals: [],\n      rewrites: asset => asset.indexOf('web-app.manifest') >= 0 ? '/web-app.manifest.json' : asset.indexOf('index.html') >= 0 ? publicPath : asset,\n      ServiceWorker: {\n        // cacheName is very dangerous: CAN NOT CHANGE\n        cacheName: `${camelCase(packageJson.process.name)}:${publicPath.replace(/\\//g, '')}`,\n        events: true,\n        output: 'sw.js',\n        navigateFallbackURL: publicPath\n      },\n      AppCache: {\n        events: true,\n        caches: ['main', 'additional', 'optional'],\n        FALLBACK: {\n          [publicPath]: publicPath\n        }\n      }\n    })]\n  };\n};\n\n//# sourceURL=webpack:///./src/settings/webpack/web/common.js?");

/***/ }),

/***/ "./src/settings/webpack/web/debug.js":
/*!*******************************************!*\
  !*** ./src/settings/webpack/web/debug.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = context => {\n  const {\n    settings,\n    paths,\n    env\n  } = context;\n  let common = settings.webpack.web.common;\n\n  if (typeof common === 'function') {\n    common = common(context);\n  }\n\n  const processPath = paths.process.root;\n  const distPath = path.join(processPath, 'dist', 'debug');\n  return { ...common,\n    mode: 'development',\n    devtool: 'eval-source-map',\n    bail: false,\n    profile: true,\n    cache: false,\n    stats: 'normal',\n    output: {\n      path: distPath,\n      filename: 'static/script/[name].js',\n      sourceMapFilename: 'static/script/[name].map',\n      chunkFilename: 'static/script/[name].js'\n    },\n    devServer: {\n      contentBase: distPath,\n      publicPath: env.PUBLIC_PATH || process.env.PUBLIC_PATH || '/',\n      port: env.PORT || process.env.PORT || '3000',\n      host: env.HOST || process.env.HOST || '0.0.0.0'\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/settings/webpack/web/debug.js?");

/***/ }),

/***/ "./src/settings/webpack/web/index.js":
/*!*******************************************!*\
  !*** ./src/settings/webpack/web/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _common = _interopRequireDefault(__webpack_require__(/*! ./common */ \"./src/settings/webpack/web/common.js\"));\n\nvar _debug = _interopRequireDefault(__webpack_require__(/*! ./debug */ \"./src/settings/webpack/web/debug.js\"));\n\nvar _release = _interopRequireDefault(__webpack_require__(/*! ./release */ \"./src/settings/webpack/web/release.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  common: _common.default,\n  debug: _debug.default,\n  release: _release.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/settings/webpack/web/index.js?");

/***/ }),

/***/ "./src/settings/webpack/web/release.js":
/*!*********************************************!*\
  !*** ./src/settings/webpack/web/release.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = context => {\n  const {\n    settings,\n    paths,\n    env\n  } = context;\n  let common = settings.webpack.web.common;\n\n  if (typeof common === 'function') {\n    common = common(context);\n  }\n\n  const processPath = paths.process.root;\n  const distPath = path.join(processPath, 'dist', 'release');\n  return { ...common,\n    mode: 'production',\n    output: {\n      path: distPath,\n      filename: 'static/script/[name].[hash].js',\n      sourceMapFilename: 'static/script/[name].[hash].map',\n      chunkFilename: 'static/script/[name].[hash].js'\n    },\n    devServer: {\n      contentBase: distPath,\n      publicPath: env.PUBLIC_PATH || process.env.PUBLIC_PATH || '/',\n      port: env.PORT || process.env.PORT || '8000',\n      host: env.HOST || process.env.HOST || '0.0.0.0'\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/settings/webpack/web/release.js?");

/***/ }),

/***/ "./src/tasks sync recursive ^.*$":
/*!*****************************!*\
  !*** ./src/tasks sync ^.*$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": \"./src/tasks/index.js\",\n\t\"./\": \"./src/tasks/index.js\",\n\t\"./build\": \"./src/tasks/build.js\",\n\t\"./build.js\": \"./src/tasks/build.js\",\n\t\"./index\": \"./src/tasks/index.js\",\n\t\"./index.js\": \"./src/tasks/index.js\",\n\t\"./serve\": \"./src/tasks/serve.js\",\n\t\"./serve.js\": \"./src/tasks/serve.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/tasks sync recursive ^.*$\";\n\n//# sourceURL=webpack:///./src/tasks_sync_^.*$?");

/***/ }),

/***/ "./src/tasks/build.js":
/*!****************************!*\
  !*** ./src/tasks/build.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _webpack = _interopRequireDefault(__webpack_require__(/*! webpack */ \"webpack\"));\n\nvar _rimraf = _interopRequireDefault(__webpack_require__(/*! rimraf */ \"rimraf\"));\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! lodash/map */ \"lodash/map\"));\n\nvar _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ \"lodash/get\"));\n\nvar _cloneDeep = _interopRequireDefault(__webpack_require__(/*! lodash/cloneDeep */ \"lodash/cloneDeep\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Vendor\n// local\nconst getBuildSettings = context => {\n  _logger.default.info('Getting build settings...');\n\n  const args = (0, _map.default)(context.args._, arg => arg.replace('/', '.'));\n  const buildSettings = (0, _map.default)(args, arg => {\n    const sett = (0, _get.default)(context.settings, arg);\n    return typeof sett === 'function' ? sett((0, _cloneDeep.default)(context)) : sett;\n  });\n\n  _logger.default.debug(buildSettings);\n\n  return Promise.resolve({ ...context,\n    buildSettings\n  });\n};\n\nvar _default = (context = {}) => getBuildSettings(context).then(({\n  buildSettings,\n  env,\n  args\n}) => new Promise((resolve, reject) => {\n  _logger.default.info('Building...');\n\n  _logger.default.debug('Removing path:', buildSettings[0].output.path);\n\n  (0, _rimraf.default)(buildSettings[0].output.path, {}, err => {\n    if (err) {\n      reject(err);\n      return;\n    }\n\n    _logger.default.debug('Building config:', buildSettings[0]);\n\n    (0, _webpack.default)(buildSettings[0], (err, stats) => {\n      if (err) {\n        reject(err);\n        return;\n      }\n\n      if (stats.hasErrors() && (args.watch || args.w)) {\n        reject(stats.toString({\n          chunks: false,\n          colors: env.DEBUG\n        }));\n        return;\n      }\n\n      _logger.default.info(stats.toString({\n        chunks: false,\n        colors: env.DEBUG\n      }));\n\n      resolve(buildSettings[0]);\n    });\n  });\n}));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/tasks/build.js?");

/***/ }),

/***/ "./src/tasks/index.js":
/*!****************************!*\
  !*** ./src/tasks/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _build = _interopRequireDefault(__webpack_require__(/*! ./build */ \"./src/tasks/build.js\"));\n\nvar _serve = _interopRequireDefault(__webpack_require__(/*! ./serve */ \"./src/tasks/serve.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  build: _build.default,\n  serve: _serve.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/tasks/index.js?");

/***/ }),

/***/ "./src/tasks/serve.js":
/*!****************************!*\
  !*** ./src/tasks/serve.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n// Vendor\n// import webpack from 'webpack';\n// import rimraf from 'rimraf';\nvar _default = ({\n  webpackFile\n}) => new Promise((resolve, reject) => {\n  let webpackConfig = __webpack_require__(\"./src/tasks sync recursive ^.*$\")(`${webpackFile}`);\n\n  console.log(webpackConfig);\n  resolve();\n});\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/tasks/serve.js?");

/***/ }),

/***/ "./src/utils sync recursive ^.*$":
/*!*****************************!*\
  !*** ./src/utils sync ^.*$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": \"./src/utils/index.js\",\n\t\"./\": \"./src/utils/index.js\",\n\t\"./get-packages-json\": \"./src/utils/get-packages-json.js\",\n\t\"./get-packages-json.js\": \"./src/utils/get-packages-json.js\",\n\t\"./index\": \"./src/utils/index.js\",\n\t\"./index.js\": \"./src/utils/index.js\",\n\t\"./merge-settings\": \"./src/utils/merge-settings.js\",\n\t\"./merge-settings.js\": \"./src/utils/merge-settings.js\",\n\t\"./merge-tasks\": \"./src/utils/merge-tasks.js\",\n\t\"./merge-tasks.js\": \"./src/utils/merge-tasks.js\",\n\t\"./parse-arguments\": \"./src/utils/parse-arguments.js\",\n\t\"./parse-arguments.js\": \"./src/utils/parse-arguments.js\",\n\t\"./parse-environment\": \"./src/utils/parse-environment.js\",\n\t\"./parse-environment.js\": \"./src/utils/parse-environment.js\",\n\t\"./resolve-paths\": \"./src/utils/resolve-paths.js\",\n\t\"./resolve-paths.js\": \"./src/utils/resolve-paths.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/utils sync recursive ^.*$\";\n\n//# sourceURL=webpack:///./src/utils_sync_^.*$?");

/***/ }),

/***/ "./src/utils/get-packages-json.js":
/*!****************************************!*\
  !*** ./src/utils/get-packages-json.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nvar _package = _interopRequireDefault(__webpack_require__(/*! ../../package.json */ \"./package.json\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = (context = {}) => {\n  _logger.default.info('Getting packages json...');\n\n  const process = context.paths.process;\n\n  const processPackageJsonFile = _path.default.join(process.root, 'package.json');\n\n  const processPackageJson = __webpack_require__(\"./src/utils sync recursive ^.*$\")(`${processPackageJsonFile}`);\n\n  const packagesJson = {\n    boot: _package.default,\n    process: processPackageJson\n  };\n\n  _logger.default.debug(packagesJson);\n\n  return Promise.resolve({ ...context,\n    packagesJson\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/utils/get-packages-json.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/merge-settings.js":
/*!*************************************!*\
  !*** ./src/utils/merge-settings.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ \"lodash/merge\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../settings */ \"./src/settings/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = (context = {}) => {\n  _logger.default.info('Merging settings...');\n\n  const processBootSettingsPath = _path.default.resolve(context.paths.process.root, '.boot', 'settings');\n\n  let processBootSettings = {};\n\n  try {\n    processBootSettings = __webpack_require__(\"./src/utils sync recursive ^.*$\")(`${processBootSettingsPath}`);\n  } catch (e) {\n    processBootSettings = {};\n  }\n\n  const settings = (0, _merge.default)({}, _settings.default, processBootSettings);\n\n  _logger.default.debug(settings);\n\n  return Promise.resolve({ ...context,\n    settings\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/utils/merge-settings.js?");

/***/ }),

/***/ "./src/utils/merge-tasks.js":
/*!**********************************!*\
  !*** ./src/utils/merge-tasks.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ \"lodash/merge\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nvar _tasks = _interopRequireDefault(__webpack_require__(/*! ../tasks */ \"./src/tasks/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = (context = {}) => {\n  _logger.default.info('Merging tasks...');\n\n  const processBootTasksPath = _path.default.resolve(context.paths.process.root, '.boot', 'tasks');\n\n  let processBootTasks = {};\n\n  try {\n    processBootTasks = __webpack_require__(\"./src/utils sync recursive ^.*$\")(`${processBootTasksPath}`);\n  } catch (e) {\n    processBootTasks = {};\n  }\n\n  const tasks = (0, _merge.default)({}, _tasks.default, processBootTasks);\n\n  _logger.default.debug(tasks);\n\n  return Promise.resolve({ ...context,\n    tasks\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/utils/merge-tasks.js?");

/***/ }),

/***/ "./src/utils/parse-arguments.js":
/*!**************************************!*\
  !*** ./src/utils/parse-arguments.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _clone = _interopRequireDefault(__webpack_require__(/*! lodash/clone */ \"lodash/clone\"));\n\nvar _reduce = _interopRequireDefault(__webpack_require__(/*! lodash/reduce */ \"lodash/reduce\"));\n\nvar _remove = _interopRequireDefault(__webpack_require__(/*! lodash/remove */ \"lodash/remove\"));\n\nvar _slice = _interopRequireDefault(__webpack_require__(/*! lodash/slice */ \"lodash/slice\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Vendor\n// local\nvar _default = (context = {}) => {\n  _logger.default.info('Parsing arguments...');\n\n  const argv = (0, _slice.default)((0, _clone.default)(process.argv), 2);\n  const dashedArgs = (0, _reduce.default)((0, _remove.default)(argv, value => value.indexOf('-') === 0), (args, value) => {\n    const parseArg = /--?([^=]+)=?(.*)/;\n    const parsed = value.match(parseArg);\n    args[parsed[1]] = parsed[2] || true;\n    return args;\n  }, {});\n  const args = {\n    task: argv.shift(),\n    _: argv,\n    ...dashedArgs\n  };\n\n  _logger.default.debug(args);\n\n  return Promise.resolve({ ...context,\n    args\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/utils/parse-arguments.js?");

/***/ }),

/***/ "./src/utils/parse-environment.js":
/*!****************************************!*\
  !*** ./src/utils/parse-environment.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _pickBy = _interopRequireDefault(__webpack_require__(/*! lodash/pickBy */ \"lodash/pickBy\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Vendor\n// local\nvar _default = (settings = {}) => {\n  _logger.default.info('Parsing environment variables...');\n\n  const bootEnv = (0, _pickBy.default)(process.env, (_, key) => key.indexOf('BOOT_') >= 0);\n\n  if (!undefined) {\n    _logger.default.warn('NODE_ENV is not defined! Assuming \"development\"...');\n  }\n\n  bootEnv.NODE_ENV = undefined || 'development';\n  bootEnv.DEBUG = !process.env.DEBUG === false || bootEnv.NODE_ENV !== 'production';\n  bootEnv.PUBLIC_PATH = process.env.PUBLIC_PATH || '/';\n\n  _logger.default.debug(bootEnv);\n\n  return Promise.resolve({ ...settings,\n    env: bootEnv\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/utils/parse-environment.js?");

/***/ }),

/***/ "./src/utils/resolve-paths.js":
/*!************************************!*\
  !*** ./src/utils/resolve-paths.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ \"./src/logger.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = (context = {}) => {\n  _logger.default.info('Resolving paths...');\n\n  const bootPath = process.env.BOOT_ROOT_PATH;\n\n  const processPath = _path.default.resolve(process.cwd());\n\n  const paths = {\n    boot: {\n      root: bootPath,\n      modules: _path.default.join(bootPath, 'node_modules')\n    },\n    process: {\n      root: processPath,\n      modules: _path.default.join(processPath, 'node_modules'),\n      src: _path.default.join(processPath, 'src')\n    }\n  };\n\n  _logger.default.debug(paths);\n\n  return Promise.resolve({ ...context,\n    paths\n  });\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/utils/resolve-paths.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /data/fiuzagr/boot/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "@fiuzagr/logger":
/*!**********************************!*\
  !*** external "@fiuzagr/logger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fiuzagr/logger\");\n\n//# sourceURL=webpack:///external_%22@fiuzagr/logger%22?");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/camelCase\");\n\n//# sourceURL=webpack:///external_%22lodash/camelCase%22?");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/clone\");\n\n//# sourceURL=webpack:///external_%22lodash/clone%22?");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/cloneDeep\");\n\n//# sourceURL=webpack:///external_%22lodash/cloneDeep%22?");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/get\");\n\n//# sourceURL=webpack:///external_%22lodash/get%22?");

/***/ }),

/***/ "lodash/keys":
/*!******************************!*\
  !*** external "lodash/keys" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/keys\");\n\n//# sourceURL=webpack:///external_%22lodash/keys%22?");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/map\");\n\n//# sourceURL=webpack:///external_%22lodash/map%22?");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/merge\");\n\n//# sourceURL=webpack:///external_%22lodash/merge%22?");

/***/ }),

/***/ "lodash/pickBy":
/*!********************************!*\
  !*** external "lodash/pickBy" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/pickBy\");\n\n//# sourceURL=webpack:///external_%22lodash/pickBy%22?");

/***/ }),

/***/ "lodash/reduce":
/*!********************************!*\
  !*** external "lodash/reduce" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/reduce\");\n\n//# sourceURL=webpack:///external_%22lodash/reduce%22?");

/***/ }),

/***/ "lodash/remove":
/*!********************************!*\
  !*** external "lodash/remove" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/remove\");\n\n//# sourceURL=webpack:///external_%22lodash/remove%22?");

/***/ }),

/***/ "lodash/slice":
/*!*******************************!*\
  !*** external "lodash/slice" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/slice\");\n\n//# sourceURL=webpack:///external_%22lodash/slice%22?");

/***/ }),

/***/ "offline-plugin":
/*!*********************************!*\
  !*** external "offline-plugin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"offline-plugin\");\n\n//# sourceURL=webpack:///external_%22offline-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rimraf\");\n\n//# sourceURL=webpack:///external_%22rimraf%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });