// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfISOWeekYear from '.'

describe('endOfISOWeekYear', function() {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of an ISO year', function() {
    const result = endOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function() {
    const result = endOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime()
    )
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    endOfISOWeekYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(5, 0 /* Jan */, 4)
    initialDate.setHours(16, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(6, 0 /* Jan */, 1)
    expectedResult.setHours(23, 59, 59, 999)
    const result = endOfISOWeekYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = endOfISOWeekYear(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfISOWeekYear.bind(null), TypeError)
  })
})
