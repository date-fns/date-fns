var assert = require('power-assert')
var getDate = require('../get_date')

describe('getDate', function() {
  it('returns day of month of given date', function() {
    var result = getDate(new Date(2012, 1 /* Feb */, 29))
    assert(result === 29)
  })

  it('accepts string', function() {
    var result = getDate(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts timestamp', function() {
    var result = getDate(new Date(2014, 11 /* Dec */, 31).getTime())
    assert(result === 31)
  })
})

