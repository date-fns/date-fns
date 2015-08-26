var webpackConfig = require('./webpack')

var config = function(config) {
  config.set({
    frameworks: ['mocha', 'chai-sinon'],
    files: ['../test.js'],
    preprocessors: {'../test.js': ['webpack']},
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

