/* eslint-env mocha */

import assert from 'assert'
import startOfMonth from './index'

describe('startOfMonth', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a month', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfMonth(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = startOfMonth(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfMonth(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfMonth(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(startOfMonth.bind(null), TypeError)
  })
})
