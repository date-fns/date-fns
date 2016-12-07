// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var caLocale = require('./')

describe('es locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof caLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof caLocale.format === 'object')
  })
})
