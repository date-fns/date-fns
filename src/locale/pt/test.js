// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var ptLocale = require('./')

describe('pt locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof ptLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof ptLocale.format === 'object')
  })
})
