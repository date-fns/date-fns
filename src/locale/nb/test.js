// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var nbLocale = require('./')

describe('nb locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof nbLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof nbLocale.format === 'object')
  })
})
