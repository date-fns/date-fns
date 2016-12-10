// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var svLocale = require('./')

describe('sv locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof svLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof svLocale.format === 'object')
  })
})
