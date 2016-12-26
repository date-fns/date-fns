// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var isLocale = require('./')

describe('is locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof isLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof isLocale.format === 'object')
  })
})
