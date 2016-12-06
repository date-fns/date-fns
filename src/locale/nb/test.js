// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var nbLocale = require('./')

describe('nb locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })
})
