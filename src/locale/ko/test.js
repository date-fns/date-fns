// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var koLocale = require('./')

describe('ko locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof koLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof koLocale.format === 'object')
  })
})
