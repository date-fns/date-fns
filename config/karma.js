process.env.PHANTOMJS_BIN = 'node_modules/.bin/phantomjs'
process.env.NODE_ENV = 'test'

const webpackConfig = require('./webpack')
const countReporter = require('./_lib/countReporter')
const benchmarkJSONReporter = require('./_lib/benchmarkJSONReporter')

const sauceLabsLaunchers = {
  // TODO: See if Safari became more reliable
  safari: {
    base: 'SauceLabs',
    platform: 'OS X 10.11',
    browserName: 'safari',
    version: '9.0',
  },

  chrome: {
    base: 'SauceLabs',
    platform: 'Windows 8.1',
    browserName: 'chrome',
    version: '46.0',
  },

  firefox: {
    base: 'SauceLabs',
    platform: 'Windows 8.1',
    browserName: 'firefox',
    version: '41.0',
  },

  ie8: {
    base: 'SauceLabs',
    platform: 'Windows 7',
    browserName: 'internet explorer',
    version: '8.0',
  },

  ie9: {
    base: 'SauceLabs',
    platform: 'Windows 7',
    browserName: 'internet explorer',
    version: '9.0',
  },

  ie10: {
    base: 'SauceLabs',
    platform: 'Windows 7',
    browserName: 'internet explorer',
    version: '10.0',
  },

  ie11: {
    base: 'SauceLabs',
    platform: 'Windows 8.1',
    browserName: 'internet explorer',
    version: '11.0',
  },

  edge: {
    base: 'SauceLabs',
    platform: 'Windows 10',
    browserName: 'microsoftedge',
    version: '20.10240',
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
    deviceOrientation: 'portrait',
  },
}

const localLaunchers = {
  LocalChrome: {
    base: 'Chrome',
  },
}

const ciLaunchers = {
  CIChrome: {
    base: 'ChromeHeadless',
  },
}

function config(config) {
  config.set({
    frameworks: getFrameworksConfig(),
    files: getFilesConfig(),
    preprocessors: getPreprocessorsConfig(),
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        assets: false,
        chunks: false,
        hash: false,
        timings: false,
        version: false,
      },
    },

    // We are limited in the number of parallel VMs in SauceLabs (5)
    // and Karma don't know how to limit parallel browser instances
    // so waiting time must be insanely high.
    browserNoActivityTimeout: process.env.TEST_CROSS_BROWSER
      ? 60 * 60 * 1000 /* 1 hour */
      : 10 * 1000 /* 10 sec */,
    captureTimeout: process.env.TEST_CROSS_BROWSER
      ? 120 * 1000 /* 2 min */
      : 60 * 1000 /* 1 min */,

    sauceLabs: {
      startConnect: false,
      tunnelIdentifier: process.env.GITHUB_RUN_ID,
      recordScreenshots: false,
      public: 'public',
    },

    coveageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
    },

    mochaReporter: {
      output: 'minimal',
    },

    plugins: (process.env.COVERAGE_REPORT
      ? ['karma-coverage', 'karma-coverage-istanbul-reporter']
      : []
    ).concat([
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      // TODO: Make it work
      // 'karma-sauce-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-benchmark',
      'karma-benchmark-reporter',
      { 'reporter:count': ['type', countReporter] },
      { 'reporter:benchmark-json': ['type', benchmarkJSONReporter] },
    ]),

    customLaunchers: process.env.TEST_CROSS_BROWSER
      ? sauceLabsLaunchers
      : process.env.CI
      ? ciLaunchers
      : localLaunchers,
    browsers: getBrowsersConfig(),
    reporters: getReportersConfig(),
  })
}

function getFrameworksConfig() {
  if (process.env.TEST_BENCHMARK) {
    return ['benchmark']
  } else {
    return ['mocha']
  }
}

function getFilesConfig() {
  if (process.env.USE_STATIC_TESTS) {
    return ['../tmp/tests.js']
  } else if (process.env.TEST_BENCHMARK) {
    return ['../node_modules/moment/moment.js', '../benchmark.js']
  } else {
    return ['../test.js']
  }
}

function getPreprocessorsConfig() {
  if (process.env.USE_STATIC_TESTS) {
    return { '../tmp/tests.js': ['sourcemap'] }
  } else if (process.env.TEST_BENCHMARK) {
    return { '../benchmark.js': ['webpack', 'sourcemap'] }
  } else {
    return { '../test.js': ['webpack', 'sourcemap'] }
  }
}

function getBrowsersConfig() {
  if (process.env.TEST_CROSS_BROWSER) {
    return Object.keys(sauceLabsLaunchers)
  } else if (process.env.TEST_BENCHMARK) {
    return ['PhantomJS']
  } else if (process.env.CI) {
    return Object.keys(ciLaunchers)
  } else {
    return Object.keys(localLaunchers)
  }
}

function getReportersConfig() {
  if (process.env.TEST_CROSS_BROWSER) {
    return ['dots', 'saucelabs', 'count']
  } else if (process.env.TEST_BENCHMARK) {
    return ['benchmark', 'benchmark-json']
  } else if (process.env.COVERAGE_REPORT) {
    return ['coverage-istanbul']
  } else {
    return ['mocha', 'count']
  }
}

module.exports = config
