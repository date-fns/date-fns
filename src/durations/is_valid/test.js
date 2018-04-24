/* eslint-env mocha */

var assert = require('power-assert')
var isValid = require('./')

var VALID_ISO_DURATIONS = [
  'P1y',
  'P1Y',
  'P1.5Y',
  'P11Y',
  'P11Y1W',
  'P1M',
  'P1.5M',
  'P11M',
  'P1W',
  'P1.5W',
  'P1D',
  'P1.5D',
  'P11D',
  'P1Y11D',
  'PT1H',
  'PT1M',
  'P3Y6M1W4DT12H30M17.5S',
  'PT-1S',
  'PT+1S'
]

var INVALID_ISO_DURATIONS = [
  'P1H',
  'P1S',
  'P1Y11D1M',
  'P11D1Y',
  '',
  'Invalid Data',
  '2xxx',
  '2000-123',
  '2000-12-124'
]

describe('isValid', function () {
  describe('true for', function () {
    VALID_ISO_DURATIONS.forEach(function (isoDuration) {
      it(isoDuration, function () {
        var result = isValid(isoDuration)
        assert(result)
      })
    })
  })

  describe('false for', function () {
    INVALID_ISO_DURATIONS.forEach(function (isoDuration) {
      it(isoDuration, function () {
        var result = isValid(isoDuration)
        assert(!result)
      })
    })
  })
})
