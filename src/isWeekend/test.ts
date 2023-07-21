/* eslint-env mocha */

import assert from 'assert'
import isWeekend from './index'

describe('isWeekend', () => {
  it('returns true if the given date is in a weekend', () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('returns false if the given date is not in a weekend', () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 6))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isWeekend(new Date(NaN))
    assert(result === false)
  })
})
