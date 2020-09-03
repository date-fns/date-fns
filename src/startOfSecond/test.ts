// @flow
/* eslint-env mocha */
import assert from 'assert'

import startOfSecond from '.'


describe('startOfSecond', function() {
  it('returns the date with the time set to the first millisecond of a second', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('accepts a timestamp', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400).getTime()
    var result = startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    startOfSecond(date)
    assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfSecond(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfSecond.bind(null), TypeError)
  })
})
