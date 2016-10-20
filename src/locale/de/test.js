// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var enLocale = require('./')

describe('de locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof enLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof enLocale.format === 'object')
  })
})
