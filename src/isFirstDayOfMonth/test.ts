/* eslint-env mocha */

import assert from 'assert'
import isFirstDayOfMonth from './index'

describe('isFirstDayOfMonth', () => {
  it('returns true if the given date is in the last day of month', () => {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', () => {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 9 /* Oct */, 1).getTime()
    const result = isFirstDayOfMonth(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isFirstDayOfMonth(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(isFirstDayOfMonth.bind(null), TypeError)
  })
})
