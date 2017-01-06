// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var arLocale = require('./')

describe('ar locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof arLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof arLocale.format === 'object')
  })
})
