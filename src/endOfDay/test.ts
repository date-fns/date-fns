// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfDay from '.'

describe('endOfDay', function() {
  it('returns the date with the time set to 23:59:59.999', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = endOfDay(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = endOfDay(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfDay(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = endOfDay(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfDay.bind(null), TypeError)
  })
})
