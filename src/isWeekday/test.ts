/* eslint-env mocha */

import assert from 'assert'
import isWeekday from './index'

describe('isWeekday', () => {
  it('returns true if the given date is in a weekday', () => {
    const result = isWeekday(new Date(2014, 9 /* Oct */, 6))
    assert(result === true)
  })

  it('returns false if the given date is not in a weekday', () => {
    const result = isWeekday(new Date(2014, 9 /* Oct */, 5))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isWeekday(new Date(2014, 9 /* Oct */, 6).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isWeekday(new Date(NaN))
    assert(result === false)
  })
})
