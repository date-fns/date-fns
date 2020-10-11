// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfISOWeekYear from '.'

describe('startOfISOWeekYear', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of an ISO year', function() {
    const result = startOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('accepts a timestamp', function() {
    const result = startOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime()
    )
    assert.deepEqual(result, new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    startOfISOWeekYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(9, 0 /* Jan */, 1)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(8, 11 /* Dec */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = startOfISOWeekYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })

  it('correctly handles years in which 4 January is Sunday', function() {
    const result = startOfISOWeekYear(new Date(2009, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = startOfISOWeekYear(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfISOWeekYear.bind(null), TypeError)
  })
})
