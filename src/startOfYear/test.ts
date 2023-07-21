/* eslint-env mocha */

import assert from 'assert'
import startOfYear from './index'

describe('startOfYear', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfYear(date)
    assert.deepStrictEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = startOfYear(date)
    assert.deepStrictEqual(result, new Date(2014, 0 /* Dec */, 1, 0, 0, 0, 0))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfYear(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(9, 0 /* Jan */, 5)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(9, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    const result = startOfYear(initialDate)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
