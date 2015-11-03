var assert = require('power-assert')
var isSameSecond = require('./')

describe('isSameSecond', function() {
  it('returns true if given dates have same second', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )
    assert(result === true)
  })

  it('returns false if given dates have different seconds', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime()
    )
    assert(result === true)
  })
})

