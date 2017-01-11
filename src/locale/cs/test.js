// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var csLocale = require('./')

describe('cs locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof csLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof csLocale.format === 'object')
  })
})
