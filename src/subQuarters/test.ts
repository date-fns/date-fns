// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subQuarters from '.'

describe('subQuarters', function() {
  it('subtracts the given number of quarters', function() {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1), 3)
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('accepts a timestamp', function() {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1), 3.33)
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    // @ts-expect-error
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1), '3')
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    subQuarters(date, 3)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    const date = new Date(2014, 11 /* Dec */, 31)
    const result = subQuarters(date, 1)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = subQuarters(initialDate, 3)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = subQuarters(new Date(NaN), 3)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subQuarters.bind(null), TypeError)
    assert.throws(subQuarters.bind(null, 1), TypeError)
  })
})
