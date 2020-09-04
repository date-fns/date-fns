// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfUTCISOWeek from '.'

describe('startOfUTCISOWeek', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of an ISO week', function() {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('accepts a timestamp', function() {
    var date = new Date(Date.UTC(2014, 1 /* Feb */, 11, 11, 55, 0)).getTime()
    var result = startOfUTCISOWeek(date)
    assert.deepEqual(result, new Date(Date.UTC(2014, 1 /* Feb */, 10)))
  })

  it('does not mutate the original date', function() {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0))
    startOfUTCISOWeek(date)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 2, 11, 55, 0)))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfUTCISOWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfUTCISOWeek.bind(null), TypeError)
  })
})
