// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfDecade from '.'

describe('lastDayOfDecade', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a decade', function() {
    const date = new Date(1985, 9 /* Oct */, 20)
    const result = lastDayOfDecade(date)
    assert.deepEqual(result, new Date(1989, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function() {
    const date = new Date(1975, 0 /* Jan */, 19).getTime()
    const result = lastDayOfDecade(date)
    assert.deepEqual(result, new Date(1979, 11 /* Dec */, 31))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2013, 3 /* Apr */, 23)
    lastDayOfDecade(date)
    assert.deepEqual(date, new Date(2013, 3 /* Apr */, 23))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = lastDayOfDecade(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfDecade.bind(null), TypeError)
  })
})
