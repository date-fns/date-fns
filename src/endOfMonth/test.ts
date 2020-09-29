// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMonth from '.'

describe('endOfMonth', function() {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a month', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = endOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = endOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfMonth(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function() {
    it('works for last month in year', function() {
      const date = new Date(2014, 11 /* Dec */, 1, 0, 0, 0)
      const result = endOfMonth(date)
      assert.deepEqual(
        result,
        new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
      )
    })

    it('works for last day of month', function() {
      const date = new Date(2014, 9 /* Oct */, 31)
      const result = endOfMonth(date)
      assert.deepEqual(result, new Date(2014, 9 /* Oct */, 31, 23, 59, 59, 999))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = endOfMonth(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfMonth.bind(null), TypeError)
  })
})
