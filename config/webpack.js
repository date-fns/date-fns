var path = require('path');

var config = {
  cache: true,
  entry: {},
  output: {
    path: path.join(process.cwd(), 'build', 'dev'),
    filename: 'js/[name].js'
  }
};

module.exports = config;

