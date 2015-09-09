var getDaysInMonth = require('../get_days_in_month')

describe('getDaysInMonth', function() {
  it('returns number of days in month of passed date', function() {
    var result = getDaysInMonth(new Date(2100, 1 /* Feb */, 11))
    assert(result === 28)
  })

  it('works for February of a leap year', function() {
    var result = getDaysInMonth(new Date(2000, 1 /* Feb */, 11))
    assert(result === 29)
  })

  it('allows to pass string', function() {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })

  it('allows to pass timestamp', function() {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })
})

