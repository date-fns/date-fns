var assert = require('power-assert')
var isLeapYear = require('../is_leap_year')

describe('isLeapYear', function() {
  it('returns true if passed date is in the leap year', function() {
    var result = isLeapYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if passed date is not in the leap year', function() {
    var result = isLeapYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for years divisible by 100 but not by 400', function() {
    var result = isLeapYear(new Date(2100, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for years divisible by 400', function() {
    var result = isLeapYear(new Date(2000, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('allows to pass string', function() {
    var date = new Date(2012, 6 /* Jul */, 2).toISOString()
    var result = isLeapYear(date)
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var date = new Date(2012, 6 /* Jul */, 2).getTime()
    var result = isLeapYear(date)
    assert(result === true)
  })
})

