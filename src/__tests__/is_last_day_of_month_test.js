var assert = require('power-assert')
var isLastDayOfMonth = require('../is_last_day_of_month')

describe('isLastDayOfMonth', function() {
  it('returns true if given date is in last day of month', function() {
    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('returns false if given date is not in last day of month', function() {
    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30))
    assert(result === false)
  })

  it('accepts string', function() {
    var date = new Date(2014, 9 /* Oct */, 31).toISOString()
    var result = isLastDayOfMonth(date)
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 9 /* Oct */, 31).getTime()
    var result = isLastDayOfMonth(date)
    assert(result === true)
  })
})

