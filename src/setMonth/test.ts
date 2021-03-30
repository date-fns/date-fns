// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setMonth from '.'

describe('setMonth', function() {
  it('sets the month', function() {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function() {
    const result = setMonth(new Date(2014, 11 /* Dec */, 31), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts a timestamp', function() {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1).getTime(), 11)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), 1.5)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), '1')
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    setMonth(date, 5)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setMonth(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setMonth(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setMonth.bind(null), TypeError)
    assert.throws(setMonth.bind(null, 1), TypeError)
  })
})
