// @flow
/* eslint-env mocha */
import assert from 'assert'

import lastDayOfDecade from '.'


describe('lastDayOfDecade', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a decade', function() {
    var date = new Date(1985, 9 /* Oct */, 20)
    var result = lastDayOfDecade(date)
    assert.deepEqual(result, new Date(1989, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function() {
    var date = new Date(1975, 0 /* Jan */, 19).getTime()
    var result = lastDayOfDecade(date)
    assert.deepEqual(result, new Date(1979, 11 /* Dec */, 31))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2013, 3 /* Apr */, 23)
    lastDayOfDecade(date)
    assert.deepEqual(date, new Date(2013, 3 /* Apr */, 23))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfDecade(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfDecade.bind(null), TypeError)
  })
})
