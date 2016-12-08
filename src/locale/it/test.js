// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var itLocale = require('./')

describe('it locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof itLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof itLocale.format === 'object')
  })
})
