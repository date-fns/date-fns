var isLastDayOfMonth = require('../is_last_day_of_month')

describe('isLastDayOfMonth', function() {
  it('returns true if passed is last day of month', function() {
    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('returns false if passed is not last day of month', function() {
    var result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30))
    assert(result === false)
  })

  it('allows to pass string', function() {
    var date = new Date(2014, 9 /* Oct */, 31).toISOString()
    var result = isLastDayOfMonth(date)
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var date = new Date(2014, 9 /* Oct */, 31).getTime()
    var result = isLastDayOfMonth(date)
    assert(result === true)
  })
})

