// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfISOWeek from '.'

describe('startOfISOWeek', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of an ISO week', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    const result = startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 10))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfISOWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = startOfISOWeek(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfISOWeek.bind(null), TypeError)
  })
})
