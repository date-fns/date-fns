var webpackConfig = require('./webpack')

var sauceLabsLaunchers = {
  ie8: {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '8',
    platform: 'Windows 7'
  },

  ie9: {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '9',
    platform: 'Windows 7'
  },

  ie10: {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '10',
    platform: 'Windows 7'
  },

  ie11: {
    base: 'SauceLabs',
    browserName: 'Internet Explorer',
    version: '11',
    platform: 'Windows 8.1'
  }
}

var frameworks
var files
var reporters

if (process.env.TEST_PERF) {
  frameworks = ['benchmark', 'mocha', 'sinon', 'es5-shim']
  files = [
    '../node_modules/power-assert/build/power-assert.js',
    '../node_modules/moment/moment.js',
    '../test_perf.js'
  ]
  reporters = ['benchmark']
} else {
  frameworks = ['mocha', 'sinon', 'es5-shim'],
  files = [
    '../node_modules/power-assert/build/power-assert.js',
    '../test.js'
  ]
  reporters = process.env.TEST_SAUCE ? ['dots', 'saucelabs'] : ['mocha']
}

var config = function(config) {
  config.set({
    frameworks: frameworks,
    files: files,
    preprocessors: {
      '../test.js': ['webpack', 'espower'],
      '../test_perf.js': ['webpack', 'espower']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        assets: false,
        chunks: false,
        hash: false,
        timings: false,
        version: false
      }
    },

    sauceLabs: {testName: 'date-fns'},

    mochaReporter: {
      output: process.env.TEST_TZ ? 'minimal' : 'full'
    },

    customLaunchers: process.env.TEST_SAUCE ? sauceLabsLaunchers : {},
    browsers: process.env.TEST_SAUCE ? Object.keys(sauceLabsLaunchers) : ['PhantomJS'],
    reporters: reporters,
    browserNoActivityTimeout: process.env.TEST_PERF ? 100000 : 10000
  })
}

module.exports = config

