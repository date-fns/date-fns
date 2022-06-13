/* eslint-env mocha */

import assert from 'assert'
import getUnixTime from './index'

describe('getUnixTime', () => {
  it('returns the timestamp of the given date', () => {
    const timestamp = 1483228800000
    const result = getUnixTime(new Date(timestamp))
    assert(result === Math.floor(timestamp / 1000))
  })

  it('accepts a timestamp (and returns it unchanged)', () => {
    const timestamp = 804643200000
    const result = getUnixTime(timestamp)
    assert(result === Math.floor(timestamp / 1000))
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getUnixTime(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getUnixTime.bind(null), TypeError)
  })
})
