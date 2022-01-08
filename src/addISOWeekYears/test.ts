/* eslint-env mocha */

import assert from 'assert'
import addISOWeekYears from '.'

describe('addISOWeekYears', () => {
  it('adds the given number of ISO week-numbering years', () => {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), 5)
    assert.deepStrictEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('accepts a timestamp', () => {
    const result = addISOWeekYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepStrictEqual(result, new Date(2026, 7 /* Aug */, 31))
  })

  it('converts a fractional number to an integer', () => {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), 5.6)
    assert.deepStrictEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('implicitly converts number arguments', () => {
    const result = addISOWeekYears(
      new Date(2010, 6 /* Jul */, 2),
      // @ts-expect-error
      '5'
    )
    assert.deepStrictEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    addISOWeekYears(date, 12)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(10, 6 /* Jul */, 2)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(15, 5 /* Jun */, 26)
    expectedResult.setHours(0, 0, 0, 0)
    const result = addISOWeekYears(initialDate, 5)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addISOWeekYears(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
