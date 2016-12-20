// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var lookupTranslation = require('./')

describe('Translation lookup', function () {
  var dictionary = {
    MMMM: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    'MMMM-genitive': [
      'JanuaryGen',
      'FebruaryGen',
      'MarchGen',
      'AprilGen',
      'MayGen',
      'JuneGen',
      'JulyGen',
      'AugustGen',
      'SeptemberGen',
      'OctoberGen',
      'NovemberGen',
      'DecemberGen'
    ],
    A: ['AM', 'PM']
  }

  it('returns a list of translation given a dictionary and format', function () {
    assert.deepEqual(
      lookupTranslation(dictionary)('MMMM'),
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    )
  })

  it('returns a translation given a dictionary, format and optional index', function () {
    assert(lookupTranslation(dictionary)('A', 0) === 'AM')
  })

  describe('Genitive translation', function () {
    it('returns a genitive translation given a dictionary, format and an optional \'genitive\' flag', function () {
      const result = lookupTranslation(dictionary)('MMMM', null, { casing: 'genitive' })
      assert.deepEqual(
        result,
        [
          'JanuaryGen',
          'FebruaryGen',
          'MarchGen',
          'AprilGen',
          'MayGen',
          'JuneGen',
          'JulyGen',
          'AugustGen',
          'SeptemberGen',
          'OctoberGen',
          'NovemberGen',
          'DecemberGen'
        ]
      )
    })

    it('throws an error when the related genitive translated is retrievd as part of the first argument', function () {
      assert.throws(
        function () { lookupTranslation(dictionary)('MMMM-genitive') },
        /To use non-normative translations, you should use the optional third parameter with a 'casing' key/
      )
    })

    it('throws an error when there is no related non-normative translations', function () {
      assert.throws(
        function () { lookupTranslation(dictionary)('A', null, { casing: 'genitive' }) },
        /No non-normative casing \(genitive\) translation found for A/
      )
    })
  })
})
