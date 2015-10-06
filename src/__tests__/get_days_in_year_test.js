var assert = require('power-assert')
var getDaysInYear = require('../get_days_in_year')

describe('getDaysInYear', function() {
  it('returns number of days in year of given date', function() {
    var result = getDaysInYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 365)
  })

  it('works for leap year', function() {
    var result = getDaysInYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === 366)
  })

  it('works for years divisible by 100 but not by 400', function() {
    var result = getDaysInYear(new Date(2100, 6 /* Jul */, 2))
    assert(result === 365)
  })

  it('works for years divisible by 400', function() {
    var result = getDaysInYear(new Date(2000, 6 /* Jul */, 2))
    assert(result === 366)
  })

  it('allows to pass string', function() {
    var date = new Date(2012, 6 /* Jul */, 2).toISOString()
    var result = getDaysInYear(date)
    assert(result === 366)
  })

  it('allows to pass timestamp', function() {
    var date = new Date(2012, 6 /* Jul */, 2).getTime()
    var result = getDaysInYear(date)
    assert(result === 366)
  })
})

