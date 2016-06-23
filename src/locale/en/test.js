/* eslint-env mocha */

var assert = require('power-assert')
var enLocale = require('./')

describe('en locale', function () {
  it('exports distanceInWords function', function () {
    assert(typeof enLocale.distanceInWords === 'function')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })
})
