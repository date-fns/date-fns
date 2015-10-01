var assert = require('power-assert')
var getHours = require('../get_hours')

describe('getHours', function() {
  it('returns amount of hours of given date', function() {
    var result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    assert(result === 11)
  })

  it('accepts string', function() {
    var result = getHours(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    assert(result === 5)
  })

  it('accepts timestamp', function() {
    var result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 23)
  })
})

