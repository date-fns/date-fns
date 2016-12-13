// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var skLocale = require('./')

describe('sk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof skLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof skLocale.format === 'object')
  })
})
