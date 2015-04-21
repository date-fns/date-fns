var path = require('path');

var config = {
  cache: true,
  entry: {
    'date_fns': './src/date_fns.js'
  },
  output: process.env.NODE_ENV == 'test' ? { path: '/' } : {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    library: 'dateFns',
    libraryTarget: 'umd'
  }
};

module.exports = config;

