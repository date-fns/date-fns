/* eslint-env mocha */

import assert from 'assert'
import setMonth from './index'

describe('setMonth', () => {
  it('sets the month', () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), 1)
    assert.deepStrictEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('sets the last day of the month if the original date was the last day of a longer month', () => {
    const result = setMonth(new Date(2014, 11 /* Dec */, 31), 1)
    assert.deepStrictEqual(result, new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts a timestamp', () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1).getTime(), 11)
    assert.deepStrictEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('converts a fractional number to an integer', () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), 1.5)
    assert.deepStrictEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('implicitly converts number arguments', () => {
    const result = setMonth(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '1'
    )
    assert.deepStrictEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    setMonth(date, 5)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setMonth(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setMonth(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setMonth.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setMonth.bind(null, 1), TypeError)
  })
})
