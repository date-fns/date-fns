/* eslint-env mocha */

var assert = require('power-assert')
var ruLocale = require('./')

describe('ru locale', function () {
  it('exports distanceInWords function', function () {
    assert(typeof ruLocale.distanceInWords === 'function')
  })

  it('exports format object', function () {
    assert(typeof ruLocale.format === 'object')
  })
})
