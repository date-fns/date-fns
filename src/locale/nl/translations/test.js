var assert = require('power-assert')
var translations = require('./')

describe('nl translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      MMMM: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
      dd: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      ddd: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
      dddd: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
