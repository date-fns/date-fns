// @flow
/* eslint-env mocha */

import assert from 'assert'
import addISOWeekYears from '.'

describe('addISOWeekYears', function() {
  it('adds the given number of ISO week-numbering years', function() {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), 5)
    assert.deepStrictEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('accepts a timestamp', function() {
    const result = addISOWeekYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepStrictEqual(result, new Date(2026, 7 /* Aug */, 31))
  })

  it('converts a fractional number to an integer', function() {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), 5.6)
    assert.deepStrictEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), '5')
    assert.deepStrictEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    addISOWeekYears(date, 12)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(10, 6 /* Jul */, 2)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(15, 5 /* Jun */, 26)
    expectedResult.setHours(0, 0, 0, 0)
    const result = addISOWeekYears(initialDate, 5)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addISOWeekYears(new Date(NaN), 5)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addISOWeekYears.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addISOWeekYears.bind(null, 1), TypeError)
  })
})
