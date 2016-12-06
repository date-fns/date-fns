// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var zhTwLocale = require('./')

describe('zh_TW locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof zhTwLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof zhTwLocale.format === 'object')
  })
})
