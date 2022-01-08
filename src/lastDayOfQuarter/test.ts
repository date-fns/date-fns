/* eslint-env mocha */

import assert from 'assert'
import lastDayOfQuarter from '.'

describe('lastDayOfQuarter', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a quarter', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfQuarter(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = lastDayOfQuarter(date)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfQuarter(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = lastDayOfQuarter(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
