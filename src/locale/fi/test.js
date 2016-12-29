// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var fiLocale = require('./')

describe('fi locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof fiLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof fiLocale.format === 'object')
  })
})
