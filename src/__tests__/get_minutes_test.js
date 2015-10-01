var assert = require('power-assert')
var getMinutes = require('../get_minutes')

describe('getMinutes', function() {
  it('returns amount of minutes of given date', function() {
    var result = getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5))
    assert(result === 45)
  })

  it('accepts string', function() {
    var result = getMinutes(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    assert(result === 0)
  })

  it('accepts timestamp', function() {
    var result = getMinutes(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 30)
  })
})

