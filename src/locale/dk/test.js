// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var dkLocale = require('./')

describe('dk locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof dkLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof dkLocale.format === 'object')
  })
})
