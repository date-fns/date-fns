var assert = require('power-assert')
var isFirstDayOfMonth = require('../is_first_day_of_month')

describe('isFirstDayOfMonth', function() {
  it('returns true if given date is in last day of month', function() {
    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    assert(result === true)
  })

  it('returns false if given date is not in last day of month', function() {
    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2))
    assert(result === false)
  })

  it('accepts string', function() {
    var date = new Date(2014, 9 /* Oct */, 1).toISOString()
    var result = isFirstDayOfMonth(date)
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 9 /* Oct */, 1).getTime()
    var result = isFirstDayOfMonth(date)
    assert(result === true)
  })
})

