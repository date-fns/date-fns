var assert = require('power-assert')
var lookupTranslation = require('./');

describe('Translation lookup', function () {
  var dictionary = {
    MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    A: ['AM', 'PM']
  };

  it('returns a list of translation given a dictionary and format', function () {
    assert.deepEqual(
      lookupTranslation(dictionary)('MMMM'),
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    );
  });

  it('returns a translations given a dictionary, format and index', function () {
    assert(lookupTranslation(dictionary)('A', 0) === 'AM');
  });
});
