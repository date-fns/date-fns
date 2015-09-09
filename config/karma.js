var webpackConfig = require('./webpack')

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
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    mochaReporter: {
      output: process.env.TEST_TZ ? 'minimal' : 'full'
    }
  })
}

module.exports = config

