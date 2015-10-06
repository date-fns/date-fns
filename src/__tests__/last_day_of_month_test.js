var assert = require('power-assert')
var lastDayOfMonth = require('../last_day_of_month')

describe('lastDayOfMonth', function() {
  it('returns date with time setted to 00:00:00 and date setted to last day of month', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 30)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 11 /* Dec */, 2, 11, 55, 0).toISOString()
    var result = lastDayOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 7 /* Aug */, 2, 11, 55, 0).getTime()
    var result = lastDayOfMonth(date)
    assert.deepEqual(result,
      new Date(2014, 7 /* Aug */, 31)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfMonth(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function() {
    it('works for February of leap year', function() {
      var date = new Date(2012, 1 /* Feb */, 11, 11, 55, 0)
      var result = lastDayOfMonth(date)
      assert.deepEqual(result,
        new Date(2012, 1 /* Feb */, 29)
      )
    })

    it('works for February of non-leap year', function() {
      var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0)
      var result = lastDayOfMonth(date)
      assert.deepEqual(result,
        new Date(2014, 1 /* Feb */, 28)
      )
    })
  })
})

