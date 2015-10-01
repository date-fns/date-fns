var assert = require('power-assert')
var isSameDay = require('../is_same_day')

describe('isSameDay', function() {
  it('returns true if passed dates has same day', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0)
    )
    assert(result === true)
  })

  it('returns false if passed dates has different days', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0)
    )
    assert(result === false)
  })

  it('allows to pass string', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString()
    )
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime()
    )
    assert(result === true)
  })
})

