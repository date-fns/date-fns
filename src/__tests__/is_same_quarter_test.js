var assert = require('power-assert')
var isSameQuarter = require('../is_same_quarter')

describe('isSameQuarter', function() {
  it('returns true if given dates have same quarter (and year)', function() {
    var result = isSameQuarter(
      new Date(2014, 0 /* Jan */, 1),
      new Date(2014, 2 /* Mar */, 8)
    )
    assert(result === true)
  })

  it('returns false if given dates have different quarters', function() {
    var result = isSameQuarter(
      new Date(2014, 0 /* Jan */, 1),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isSameQuarter(
      new Date(2014, 6 /* Jul */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isSameQuarter(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })
})

