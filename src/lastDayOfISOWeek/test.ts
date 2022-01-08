/* eslint-env mocha */

import assert from 'assert'
import lastDayOfISOWeek from '.'

describe('lastDayOfISOWeek', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of an ISO week', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfISOWeek(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    const result = lastDayOfISOWeek(date)
    assert.deepStrictEqual(result, new Date(2014, 1 /* Feb */, 16))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfISOWeek(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = lastDayOfISOWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
