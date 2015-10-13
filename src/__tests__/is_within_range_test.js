var assert = require('power-assert')
var isWithinRange = require('../is_within_range')

describe('isWithinRange', function() {
  it('returns true if given date in within given range', function() {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns true if given date has same time as left boundary', function() {
    var result = isWithinRange(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns true if given date has same time as right boundary', function() {
    var result = isWithinRange(
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns false if given date in outside of range', function() {
    var result = isWithinRange(
      new Date(2014, 1 /* Feb */, 11),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 1).toISOString(),
      new Date(2014, 11 /* Dec */, 31).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 1).getTime(),
      new Date(2014, 11 /* Dec */, 31).getTime()
    )
    assert(result === true)
  })

  it('throws exception if start date is after end date', function() {
    var block = isWithinRange.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 8 /* Sep */, 1)
    )
    assert.throws(block)
  })
})

