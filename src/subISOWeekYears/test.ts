/* eslint-env mocha */

import assert from 'assert'
import subISOWeekYears from '.'

describe('subISOWeekYears', () => {
  it('subtracts the given number of ISO week-numbering years', () => {
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2009, 7 /* Aug */, 31))
  })

  it('accepts a timestamp', () => {
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2002, 8 /* Sep */, 2))
  })

  it('converts a fractional number to an integer', () => {
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1), 5.555)
    assert.deepEqual(result, new Date(2009, 7 /* Aug */, 31))
  })

  it('implicitly converts number arguments', () => {
    // $ExpectedMistake
    // @ts-expect-error
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1), '5')
    assert.deepEqual(result, new Date(2009, 7 /* Aug */, 31))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    subISOWeekYears(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(15, 5 /* Jun */, 26)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(10, 6 /* Jul */, 2)
    expectedResult.setHours(0, 0, 0, 0)
    const result = subISOWeekYears(initialDate, 5)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subISOWeekYears(new Date(NaN), 5)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(subISOWeekYears.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(subISOWeekYears.bind(null, 1), TypeError)
  })
})
