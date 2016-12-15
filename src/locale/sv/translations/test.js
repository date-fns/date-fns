var assert = require('power-assert')
var translations = require('./')

describe('sv translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      MMMM: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
      dd: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
      ddd: ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'],
      dddd: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
      aa: ['f.m.', 'e.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
