// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var eoLocale = require('./')

describe('eo locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof eoLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof eoLocale.format === 'object')
  })
})
