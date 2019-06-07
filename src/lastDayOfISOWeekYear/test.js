// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfISOWeekYear from '.'

describe('lastDayOfISOWeekYear', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of an ISO year', function() {
    var result = lastDayOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3))
  })

  it('accepts a timestamp', function() {
    var result = lastDayOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime()
    )
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    lastDayOfISOWeekYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(5, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(6, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    var result = lastDayOfISOWeekYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfISOWeekYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfISOWeekYear.bind(null), TypeError)
  })
})
