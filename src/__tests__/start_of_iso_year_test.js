var assert = require('power-assert')
var startOfISOYear = require('../start_of_iso_year')

describe('startOfISOYear', function() {
  it('returns date with first day of ISO year', function() {
    var result = startOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('accepts string', function() {
    var result = startOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString())
    assert.deepEqual(result, new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('accepts timestamp', function() {
    var result = startOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    startOfISOYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })
})

