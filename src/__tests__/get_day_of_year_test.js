var assert = require('power-assert')
var getDayOfYear = require('../get_day_of_year')

describe('getDayOfYear', function() {
  it('returns day of year of given date', function() {
    var result = getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('accepts string', function() {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts timestamp', function() {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    assert(result === 2)
  })
})

