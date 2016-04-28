process.env.NODE_ENV = 'test'

var fs = require('fs')
var webpackConfig = require('./webpack')

var sauceLabsLaunchers = {
  // TODO: See if Safari became more reliable
  safari: {
    base: 'SauceLabs',
    platform: 'OS X 10.11',
    browserName: 'safari',
    version: '9.0'
  },

  chrome: {
    base: 'SauceLabs',
    platform: 'Windows 8.1',
    browserName: 'chrome',
    version: '46.0'
  },

  firefox: {
    base: 'SauceLabs',
    platform: 'Windows 8.1',
    browserName: 'firefox',
    version: '41.0'
  },

  ie8: {
    base: 'SauceLabs',
    platform: 'Windows 7',
    browserName: 'internet explorer',
    version: '8.0'
  },

  ie9: {
    base: 'SauceLabs',
    platform: 'Windows 7',
    browserName: 'internet explorer',
    version: '9.0'
  },

  ie10: {
    base: 'SauceLabs',
    platform: 'Windows 7',
    browserName: 'internet explorer',
    version: '10.0'
  },

  ie11: {
    base: 'SauceLabs',
    platform: 'Windows 8.1',
    browserName: 'internet explorer',
    version: '11.0'
  },

  edge: {
    base: 'SauceLabs',
    platform: 'Windows 10',
    browserName: 'microsoftedge',
    version: '20.10240'
  },

  // TODO: See if iPhone became more reliable
  // ios: {
  //   base: 'SauceLabs',
  //   browserName: 'iphone',
  //   platform: 'OS X 10.10',
  //   version: '9.1',
  //   deviceName: 'iPhone 6',
  //   deviceOrientation: 'portrait'
  // },

  android: {
    base: 'SauceLabs',
    browserName: 'android',
    platform: 'Linux',
    version: '5.1',
    deviceName: 'Android Emulator',
    deviceOrientation: 'portrait'
  }
}

var countFilename = './tmp/tests_count.txt'

function countReporter () {
  this.onRunComplete = function (_, results) {
    var runCount = results.success

    fs.readFile(countFilename, {encoding: 'utf-8', flag: 'a+'}, function (err, data) {
      if (err) {
        throw err
      }

      var totalCount = (parseInt(data, 10) || 0) + runCount

      fs.writeFile(countFilename, totalCount, 'utf-8', function (err) {
        if (err) {
          throw err
        }
      })
    })
  }
}

function config (config) {
  config.set({
    frameworks: ['mocha', 'sinon', 'es5-shim'],
    files: process.env.USE_STATIC_TESTS ? ['../tmp/tests.js'] : ['../test.js'],
    preprocessors: process.env.USE_STATIC_TESTS ? {'../tmp/tests.js': ['sourcemap']} : {'../test.js': ['webpack', 'sourcemap']},
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

    // We are limited in the number of parallel VMs in SauceLabs (5)
    // and Karma don't know how to limit parallel browser instances
    // so waiting time must be insanely high.
    browserNoActivityTimeout: process.env.TEST_CROSS_BROWSER
      ? 60 * 60 * 1000 /* 1 hour */
      : 10 * 1000, /* 10 sec */
    captureTimeout: process.env.TEST_CROSS_BROWSER
      ? 120 * 1000 /* 2 min */
      : 60 * 1000, /* 1 min */

    sauceLabs: {
      startConnect: false,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      recordScreenshots: false,
      public: 'public'
    },

    mochaReporter: {
      output: process.env.TEST_TZ ? 'minimal' : 'full'
    },

    plugins: [
      'karma-es5-shim',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sauce-launcher',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-webpack',
      {'reporter:count': ['type', countReporter]}
    ],

    customLaunchers: process.env.TEST_CROSS_BROWSER ? sauceLabsLaunchers : {},
    browsers: process.env.TEST_CROSS_BROWSER ? Object.keys(sauceLabsLaunchers) : ['PhantomJS'],
    reporters: process.env.TEST_CROSS_BROWSER ? ['dots', 'saucelabs', 'count'] : ['mocha', 'count']
  })
}

module.exports = config
