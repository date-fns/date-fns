// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMonth from '.'

describe('endOfMonth', function () {
  it('returns the date with the time setted to 23:59:59.999 and the date setted to the last day of a month', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = endOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfMonth(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function () {
    it('works for last month in year', function () {
      var date = new Date(2014, 11 /* Dec */, 1, 0, 0, 0)
      var result = endOfMonth(date)
      assert.deepEqual(result,
        new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
      )
    })

    it('works for last day of month', function () {
      var date = new Date(2014, 9 /* Oct */, 31)
      var result = endOfMonth(date)
      assert.deepEqual(result,
        new Date(2014, 9 /* Oct */, 31, 23, 59, 59, 999)
      )
    })
  })
})
