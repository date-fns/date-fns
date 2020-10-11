// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfMonth from '.'

describe('startOfMonth', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a month', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = startOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfMonth(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = startOfMonth(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfMonth.bind(null), TypeError)
  })
})
