// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUnixTime from '.'

describe('getUnixTime', function () {
  it('returns the timestamp of the given date', function () {
    var timestamp = 1483228800000
    var result = getUnixTime(new Date(timestamp))
    assert(result === Math.floor(timestamp / 1000))
  })

  it('accepts a string', function () {
    var timestamp = 1484503736150
    var result = getUnixTime(new Date(timestamp).toISOString())
    assert(result === Math.floor(timestamp / 1000))
  })

  it('accepts a timestamp (and returns it unchanged)', function () {
    var timestamp = 804643200000
    var result = getUnixTime(timestamp)
    assert(result === Math.floor(timestamp / 1000))
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getUnixTime(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var timestamp = 1483228800000
    // $ExpectedMistake
    var block = getUnixTime.bind(null, new Date(timestamp), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getUnixTime.bind(null), TypeError)
  })
})
