// @flow
/* eslint-env mocha */
import assert from 'assert'

import startOfQuarter from '.'


describe('startOfQuarter', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a quarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('accepts a timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfQuarter(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfQuarter(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfQuarter.bind(null), TypeError)
  })
})
