// @flow
/* eslint-env mocha */
import assert from 'assert'

import endOfHour from '.'


describe('endOfHour', function() {
  it('returns the date with the time set to the last millisecond before an hour ends', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('accepts a timestamp', function() {
    var result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    endOfHour(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = endOfHour(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfHour.bind(null), TypeError)
  })
})
