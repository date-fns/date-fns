// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var idLocale = require('./')

describe('id locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof idLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof idLocale.format === 'object')
  })
})
