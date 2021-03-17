// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setISOWeek from '.'

describe('setISOWeek', function() {
  it('sets the ISO week', function() {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function() {
    const result = setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('converts a fractional number to an integer', function() {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53.53)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), '53')
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    setISOWeek(date, 52)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(4, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(4, 11 /* Dec */, 26)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setISOWeek(initialDate, 52)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setISOWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setISOWeek.bind(null), TypeError)
    assert.throws(setISOWeek.bind(null, 1), TypeError)
  })
})
