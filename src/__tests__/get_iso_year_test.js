var assert = require('power-assert')
var getISOYear = require('../get_iso_year')

describe('getISOYear', function() {
  it('returns ISO week-numbering year of given date', function() {
    var result = getISOYear(new Date(2007, 11 /* Dec */, 31))
    assert(result === 2008)
  })

  it('accepts string', function() {
    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).toISOString())
    assert(result === 2004)
  })

  it('accepts timestamp', function() {
    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).getTime())
    assert(result === 2004)
  })
})

