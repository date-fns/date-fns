/* eslint-env mocha */

var assert = require('power-assert')
var endOfMonth = require('./')

describe('endOfMonth', function () {
  it('returns date with time setted to 23:59:59.999 and date setted to last day of month', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('accepts string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = endOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('accepts timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('does not mutate original date', function () {
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

