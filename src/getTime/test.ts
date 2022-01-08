/* eslint-env mocha */

import assert from 'assert'
import getTime from '.'

describe('getTime', () => {
  it('returns the timestamp of the given date', () => {
    const timestamp = 1483228800000
    const result = getTime(new Date(timestamp))
    assert(result === timestamp)
  })

  it('accepts a timestamp (and returns it unchanged)', () => {
    const timestamp = 804643200000
    const result = getTime(timestamp)
    assert(result === timestamp)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getTime(new Date(NaN))
    assert(isNaN(result))
  })
})
