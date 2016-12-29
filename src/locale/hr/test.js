// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var hrLocale = require('./')

describe('hr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof hrLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof hrLocale.format === 'object')
  })
})
