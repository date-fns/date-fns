// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var roLocale = require('./')

describe('ro locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof roLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof roLocale.format === 'object')
  })
})
