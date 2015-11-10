var assert = require('power-assert')
var getISOWeeksInYear = require('./')

describe('getISOWeeksInYear', function() {
  it('returns number of days in month of given date', function() {
    var result = getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))
    assert(result === 53)
  })

  it('accepts string', function() {
    var date = new Date(2014, 1 /* Feb */, 11).toISOString()
    var result = getISOWeeksInYear(date)
    assert(result === 52)
  })

  it('accepts timestamp', function() {
    var date = new Date(2003, 11 /* Dec */, 30).getTime()
    var result = getISOWeeksInYear(date)
    assert(result === 53)
  })
})

