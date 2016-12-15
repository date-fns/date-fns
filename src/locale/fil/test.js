// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var filLocale = require('./')

describe('fil locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof filLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof filLocale.format === 'object')
  })
})
