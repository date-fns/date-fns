// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var esLocale = require('./')

describe('es locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof esLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof esLocale.format === 'object')
  })
})
