// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var jaLocale = require('./')

describe('ja locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof jaLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof jaLocale.format === 'object')
  })
})
