var isSameSecond = require('../is_same_second')

describe('isSameSecond', function() {
  it('returns true if passed dates has same second', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )
    assert(result === true)
  })

  it('returns false if passed dates has different seconds', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59)
    )
    assert(result === false)
  })

  it('allows to pass string', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).toISOString()
    )
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime()
    )
    assert(result === true)
  })
})

