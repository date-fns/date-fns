// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var zhCnLocale = require('./')

describe('zh_CN locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof zhCnLocale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof zhCnLocale.format === 'object')
  })
})
