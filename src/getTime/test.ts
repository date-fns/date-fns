// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getTime from '.'

describe('getTime', function() {
  it('returns the timestamp of the given date', function() {
    const timestamp = 1483228800000
    const result = getTime(new Date(timestamp))
    assert(result === timestamp)
  })

  it('accepts a timestamp (and returns it unchanged)', function() {
    const timestamp = 804643200000
    const result = getTime(timestamp)
    assert(result === timestamp)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getTime(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getTime.bind(null), TypeError)
  })
})
