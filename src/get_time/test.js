// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var getTime = require('./')

describe('getTime', function () {
  it('returns the timestamp of the given date', function () {
    var result = getTime(new Date(1483228800000))
    assert(result === 1483228800000)
  })

  it('accepts a string', function () {
    var result = getTime(new Date(1483228800000).toISOString())
    assert(result === 1483228800000)
  })

  it('accepts a timestamp (and returns it unchanged)', function () {
    var result = getTime(new Date(1483228800000).getTime())
    assert(result === 1483228800000)
  })
})
