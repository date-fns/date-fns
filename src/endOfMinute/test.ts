// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMinute from '.'

describe('endOfMinute', function() {
  it('returns the date with the time set to the last millisecond before a minute ends', function() {
    const date = new Date(2014, 11, 1, 22, 15)
    const result = endOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('accepts a timestamp', function() {
    const result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 11, 1, 22, 15)
    endOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = endOfMinute(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfMinute.bind(null), TypeError)
  })
})
