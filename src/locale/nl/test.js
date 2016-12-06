// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var nlLocale = require('./')

describe('nl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof nlLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof nlLocale.format === 'object')
  })
})
