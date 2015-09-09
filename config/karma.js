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

var config = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon', 'es5-shim'],
    files: [
      '../node_modules/power-assert/build/power-assert.js',
      '../test.js'
    ],
    preprocessors: {'../test.js': ['webpack', 'espower']},
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
    reporters: process.env.TEST_SAUCE ? ['dots', 'saucelabs'] : ['mocha']
  })
}

module.exports = config

