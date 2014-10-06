 var config = function(config) {
  config.set({
    frameworks: [
      'mocha',
      'chai-sinon'
    ],
    files: [],
    browsers: ['PhantomJS']
  });
};

module.exports = config;

