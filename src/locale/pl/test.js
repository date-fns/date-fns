// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var plLocale = require('./')

describe('pl locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof plLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof plLocale.format === 'object')
  })
})
