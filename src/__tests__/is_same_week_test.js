var assert = require('power-assert')
var isSameWeek = require('../is_same_week')

describe('isSameWeek', function() {
  it('returns true if passed dates belongs to the same week', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if passed dates do not belongs to the same week', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === false)
  })

  it('allow to specify when week starts', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      1
    )
    assert(result === false)
  })

  it('allows to pass string', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 4).toISOString()
    )
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result === true)
  })
})

