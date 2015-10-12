var assert = require('power-assert')
var isSameISOYear = require('../is_same_iso_year')

describe('isSameISOYear', function() {
  it('returns true if given dates have same ISO year', function() {
    var result = isSameISOYear(
      new Date(2003, 11 /* Dec */, 29),
      new Date(2005, 0 /* Jan */, 2)
    )
    assert(result === true)
  })

  it('returns false if given dates have different ISO years', function() {
    var result = isSameISOYear(
      new Date(2014, 11 /* Dec */, 28),
      new Date(2014, 11 /* Dec */, 29)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isSameISOYear(
      new Date(2003, 11 /* Dec */, 29).toISOString(),
      new Date(2005, 0 /* Jan */, 2).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isSameISOYear(
      new Date(2003, 11 /* Dec */, 29).getTime(),
      new Date(2005, 0 /* Jan */, 2).getTime()
    )
    assert(result === true)
  })
})

