var assert = require('power-assert')
var getYear = require('./')

describe('getYear', function() {
  it('returns year of given date', function() {
    var result = getYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 2014)
  })

  it('accepts string', function() {
    var result = getYear(new Date(700, 6 /* Jul */, 2).toISOString())
    assert(result === 700)
  })

  it('accepts timestamp', function() {
    var result = getYear(new Date(20000, 3 /* Apr */, 2).getTime())
    assert(result === 20000)
  })
})

