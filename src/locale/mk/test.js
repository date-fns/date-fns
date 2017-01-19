// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var mkLocale = require('./')

describe('mk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof mkLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof mkLocale.format === 'object')
  })
})
