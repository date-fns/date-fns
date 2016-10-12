// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var ruLocale = require('./')

describe('ru locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof ruLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof ruLocale.format === 'object')
  })
})
