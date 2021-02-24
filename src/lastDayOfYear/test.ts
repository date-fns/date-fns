// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfYear from '.'

describe('lastDayOfYear', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a year', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = lastDayOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = lastDayOfYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfYear.bind(null), TypeError)
  })
})
