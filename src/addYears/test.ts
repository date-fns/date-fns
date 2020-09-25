// @flow
/* eslint-env mocha */

import assert from 'assert'
import addYears from '.'

describe('addYears', function() {
  it('adds the given number of years', function() {
    const result = addYears(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepStrictEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function() {
    const result = addYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepStrictEqual(result, new Date(2026, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = addYears(new Date(2014, 8 /* Sep */, 1), 5.555)
    assert.deepStrictEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addYears(new Date(2014, 8 /* Sep */, 1), '5')
    assert.deepStrictEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    addYears(date, 12)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles the leap years properly', function() {
    const result = addYears(new Date(2016, 1 /* Feb */, 29), 1)
    assert.deepStrictEqual(result, new Date(2017, 1 /* Feb */, 28))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 1 /* Feb */, 29)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    const result = addYears(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addYears(new Date(NaN), 5)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addYears(new Date(2014, 8 /* Sep */, 1), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addYears.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addYears.bind(null, 1), TypeError)
  })
})
