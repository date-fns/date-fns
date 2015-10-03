var assert = require('power-assert')
var endOfISOYear = require('../end_of_iso_year')

describe('endOfISOYear', function() {
  it('returns date with time setted to 23:59:59.999 and date setted to last day of ISO year', function() {
    var result = endOfISOYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999))
  })

  it('accepts string', function() {
    var result = endOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).toISOString())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('accepts timestamp', function() {
    var result = endOfISOYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    endOfISOYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })
})

