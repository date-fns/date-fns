// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var daLocale = require('./')

describe('da locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof daLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof daLocale.format === 'object')
  })
})
