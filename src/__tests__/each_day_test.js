var assert = require('power-assert')
var eachDay = require('../each_day')

describe('eachDay', function() {
  it('returns array of dates within specefied range', function() {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 12)
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('accepts strings', function() {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6).toISOString(),
      new Date(2014, 9 /* Oct */, 12).toISOString()
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('accepts timestamp', function() {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6).getTime(),
      new Date(2014, 9 /* Oct */, 12).getTime()
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('throws exception if start date is after end date', function() {
    var block = eachDay.bind(
      null,
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 6)
    )
    assert.throws(block)
  })
})

