var assert = require('power-assert')
var isFriday = require('./')

describe('isFriday', function() {
  it('returns true if given date is Friday', function() {
    var result = isFriday(new Date(2014, 8 /* Sep */, 26))
    assert(result === true)
  })

  it('returns false if given date is not Friday', function() {
    var result = isFriday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isFriday(new Date(2014, 6 /* Jul */, 11).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isFriday(new Date(2014, 1 /* Feb */, 14).getTime())
    assert(result === true)
  })
})

