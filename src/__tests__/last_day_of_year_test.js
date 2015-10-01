var assert = require('power-assert')
var lastDayOfYear = require('../last_day_of_year')

describe('lastDayOfYear', function() {
  it('returns date with time setted to 00:00:00.000 and date setted to last day of year', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = lastDayOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = lastDayOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

