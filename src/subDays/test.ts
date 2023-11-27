/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import subDays from './index'

describe('subDays', () => {
  it('subtracts the given number of days in UTC time crossing months', () => {
    const startDate = new Date(Date.UTC(2021, 10, 5)) // .toISOString() = 2021-11-05T00:00:00.000Z
    console.log(startDate)
    const fourDaysLess = subDays(startDate, 4).toISOString() // 2021-11-01T00:00:00.000Z
    console.log(fourDaysLess)
    const fiveDaysLess = subDays(startDate, 5).toISOString() // 2021-10-30T23:00:00.000Z
    console.log(fiveDaysLess)

    const result = subDays(new Date(Date.UTC(2021, 10 /* Nov */, 5)), 5)
    assert.deepStrictEqual(result, new Date(Date.UTC(2021, 9 /* Oct */, 31)))
  })

  it('subtracts the given number of days', () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts a timestamp', () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    subDays(date, 11)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
