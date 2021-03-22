// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setISOWeekYear from '.'

describe('setISOWeekYear', function() {
  it('sets the ISO week-numbering year, saving the ISO week and the day of the week', function() {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), 2007)
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function() {
    const result = setISOWeekYear(new Date(2010, 0 /* Jan */, 2).getTime(), 2004)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), 2007.7002)
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), '2007')
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2008, 11 /* Dec */, 29)
    setISOWeekYear(date, 2000)
    assert.deepEqual(date, new Date(2008, 11 /* Dec */, 29))
  })

  it('sets ISO week-numbering years less than 100', function() {
    const initialDate = new Date(2008, 11 /* Dec */, 29)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setISOWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(8, 11 /* Dec */, 29)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setISOWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setISOWeekYear(new Date(NaN), 2007)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setISOWeekYear.bind(null), TypeError)
    assert.throws(setISOWeekYear.bind(null, 1), TypeError)
  })
})
