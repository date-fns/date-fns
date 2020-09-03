// @flow
/* eslint-env mocha */
import assert from 'assert'

import startOfMinute from '.'


describe('startOfMinute', function() {
  it('returns the date with the time set to the first millisecond of a minute', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('accepts a timestamp', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15).getTime()
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    startOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfMinute(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfMinute.bind(null), TypeError)
  })
})
