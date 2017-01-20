// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var enLocale = require('./')

describe('en locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })

  it('exports parse object', function () {
    assert(typeof enLocale.parse === 'object')
  })
})
