// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setQuarter from '.'

describe('setQuarter', function() {
  it('sets the quarter of the year', function() {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), 1)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function() {
    const result = setQuarter(new Date(2014, 10 /* Nov */, 30), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts a timestamp', function() {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), 1.951)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), '1')
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 1)
    setQuarter(date, 2)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 1))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setQuarter(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setQuarter(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setQuarter.bind(null), TypeError)
    assert.throws(setQuarter.bind(null, 1), TypeError)
  })
})
