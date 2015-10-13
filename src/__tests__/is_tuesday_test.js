var assert = require('power-assert')
var isTuesday = require('../is_tuesday')

describe('isTuesday', function() {
  it('returns true if given date is Tuesday', function() {
    var result = isTuesday(new Date(2014, 8 /* Sep */, 23))
    assert(result === true)
  })

  it('returns false if given date is not Tuesday', function() {
    var result = isTuesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isTuesday(new Date(2014, 6 /* Jul */, 8).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isTuesday(new Date(2014, 1 /* Feb */, 11).getTime())
    assert(result === true)
  })
})

