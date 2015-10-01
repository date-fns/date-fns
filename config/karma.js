var webpackConfig = require('./webpack')

var browserStackLaunchers = {
  chrome: {
    'base': 'BrowserStack',
    'browser': 'chrome',
    'browser_version': '44',
    'os': 'Windows',
    'os_version': '8.1',
  },

  firefox: {
    'base': 'BrowserStack',
    'browser': 'firefox',
    'browser_version': '40',
    'os': 'Windows',
    'os_version': '8.1',
  },

  ie8: {
    'base': 'BrowserStack',
    'browser': 'ie',
    'browser_version': '8.0',
    'os': 'Windows',
    'os_version': '7'
  },

  ie9: {
    'base': 'BrowserStack',
    'browser': 'ie',
    'browser_version': '9.0',
    'os': 'Windows',
    'os_version': '7'
  },

  ie10: {
    'base': 'BrowserStack',
    'browser': 'ie',
    'browser_version': '10.0',
    'os': 'Windows',
    'os_version': '7'
  },

  ie11: {
    'base': 'BrowserStack',
    'browser': 'ie',
    'browser_version': '11.0',
    'os': 'Windows',
    'os_version': '8.1'
  },

  edge: {
    'base': 'BrowserStack',
    'browser': 'edge',
    'browser_version': '12.0',
    'os': 'Windows',
    'os_version': '10'
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

    // We are limited in the number of parallel VMs in BrowserStack (2)
    // and Karma don't know how to limit parallel browser instances
    // so waiting time must be insanely high.
    browserNoActivityTimeout: process.env.TEST_BROWSERSTACK ? 60 * 60 * 1000 : 10000,

    mochaReporter: {
      output: process.env.TEST_TZ ? 'minimal' : 'full'
    },

    customLaunchers: process.env.TEST_BROWSERSTACK ? browserStackLaunchers : {},
    browsers: process.env.TEST_BROWSERSTACK ? Object.keys(browserStackLaunchers) : ['PhantomJS'],
    reporters: process.env.TEST_BROWSERSTACK ? ['dots'] : ['mocha']
  })
}

module.exports = config

