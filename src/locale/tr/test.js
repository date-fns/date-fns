// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var trLocale = require('./')

describe('tr locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof trLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof trLocale.format === 'object')
  })
})
