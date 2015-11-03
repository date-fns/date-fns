var assert = require('power-assert')
var isSameISOWeek = require('./')

describe('isSameISOWeek', function() {
  it('returns true if given dates have same ISO week', function() {
    var result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 7)
    )
    assert(result === true)
  })

  it('returns true if given dates have different ISO weeks', function() {
    var result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 14)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).toISOString(),
      new Date(2014, 6 /* Jul */, 2).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    assert(result === true)
  })
})

