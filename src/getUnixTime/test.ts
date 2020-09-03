// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUnixTime from '.'

describe('getUnixTime', function() {
  it('returns the timestamp of the given date', function() {
    var timestamp = 1483228800000
    var result = getUnixTime(new Date(timestamp))
    assert(result === Math.floor(timestamp / 1000))
  })

  it('accepts a timestamp (and returns it unchanged)', function() {
    var timestamp = 804643200000
    var result = getUnixTime(timestamp)
    assert(result === Math.floor(timestamp / 1000))
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getUnixTime(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getUnixTime.bind(null), TypeError)
  })
})
