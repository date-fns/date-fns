var assert = require('power-assert')
var isBefore = require('./')

describe('isBefore', function() {
  it('returns true if first date is before second one', function() {
    var result = isBefore(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === true)
  })

  it('returns false if first date is after second one', function() {
    var result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === false)
  })

  it('returns false if first date is equal to second one', function() {
    var result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isBefore(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isBefore(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === true)
  })
})

