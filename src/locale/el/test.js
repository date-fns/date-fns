// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var elLocale = require('./')

describe('el locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof elLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof elLocale.format === 'object')
  })
})
