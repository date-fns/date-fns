var isSameHour = require('../is_same_hour')

describe('isSameHour', function() {
  it('returns true if passed dates has same hour', function() {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 6, 30)
    )
    assert(result === true)
  })

  it('returns false if passed dates has different hours', function() {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 5, 0)
    )
    assert(result === false)
  })

  it('allows to pass string', function() {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString()
    )
    assert(result === true)
  })

  it('allows to pass timestamp', function() {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime()
    )
    assert(result === true)
  })
})

