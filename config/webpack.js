const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  entry: getEntryConfig(),
  output: getOutputConfig(),
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.(js|ts)$/, exclude: /node_modules/, use: 'babel-loader' },
    ].concat(
      process.env.COVERAGE_REPORT
        ? [
            {
              test: /\.(js|ts)$/,
              use: {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true },
              },
              enforce: 'post',
              exclude: /node_modules|test.js|src\/locale$/,
            },
          ]
        : []
    ),
  },
}

module.exports = config

function getEntryConfig() {
  if (process.env.BUILD_TESTS) {
    return {
      tests: './test.js',
    }
  } else if (process.env.NODE_ENV === 'test') {
    return undefined
  } else {
    return {
      date_fns: './tmp/umd/index.js',
    }
  }
}

function getOutputConfig() {
  if (process.env.BUILD_TESTS) {
    return {
      path: path.join(process.cwd(), 'tmp'),
      filename: '[name].js',
    }
  } else if (process.env.NODE_ENV === 'test') {
    return undefined
  } else {
    return {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].js',
      library: 'dateFns',
      libraryTarget: 'umd',
    }
  }
}
