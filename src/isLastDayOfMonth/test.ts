/* eslint-env mocha */

import assert from 'assert'
import isLastDayOfMonth from '.'

describe('isLastDayOfMonth', () => {
  it('returns true if the given date is in the last day of month', () => {
    const result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', () => {
    const result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 9 /* Oct */, 31).getTime()
    const result = isLastDayOfMonth(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isLastDayOfMonth(new Date(NaN))
    assert(result === false)
  })
})
