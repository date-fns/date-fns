var assert = require('power-assert')
var isWednesday = require('../is_wednesday')

describe('isWednesday', function() {
  it('returns true if given date is Wednesday', function() {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if given date is not Wednesday', function() {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isWednesday(new Date(2014, 6 /* Jul */, 9).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime())
    assert(result === true)
  })
})

