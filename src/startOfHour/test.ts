// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfHour from '.'

describe('startOfHour', function() {
  it('returns the date with the time set to the first millisecond of an hour', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    const result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    startOfHour(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime()
    const result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = startOfHour(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfHour.bind(null), TypeError)
  })
})
