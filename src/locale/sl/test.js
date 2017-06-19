// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var slLocale = require('./')

describe('sl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof slLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof slLocale.format === 'object')
  })
})
