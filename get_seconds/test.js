var assert = require('power-assert')
var getSeconds = require('./')

describe('getSeconds', function() {
  it('returns seconds of given date', function() {
    var result = getSeconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123))
    assert(result === 5)
  })

  it('accepts string', function() {
    var result = getSeconds(new Date(2014, 6 /* Jul */, 2, 5, 15).toISOString())
    assert(result === 0)
  })

  it('accepts timestamp', function() {
    var result = getSeconds(new Date(2014, 3 /* Apr */, 2, 23, 30, 42).getTime())
    assert(result === 42)
  })
})

