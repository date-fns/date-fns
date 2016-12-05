// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var frLocale = require('./')

describe('fr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof frLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof frLocale.format === 'object')
  })
})
