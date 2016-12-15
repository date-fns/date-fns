// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var translations = require('./')

describe('da translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      MMMM: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
      dd: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
      ddd: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
      dddd: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations)
  })
})
