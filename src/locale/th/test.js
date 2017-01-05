// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var thLocale = require('./')

describe('th locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof thLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof thLocale.format === 'object')
  })
})
