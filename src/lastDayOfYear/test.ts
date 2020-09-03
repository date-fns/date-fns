// @flow
/* eslint-env mocha */
import assert from 'assert'

import lastDayOfYear from '.'


describe('lastDayOfYear', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a year', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = lastDayOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfYear(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfYear.bind(null), TypeError)
  })
})
