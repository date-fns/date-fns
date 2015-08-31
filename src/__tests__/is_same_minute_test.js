var isSameMinute = require('../is_same_minute')

describe('isSameMinute', function() {
  it('returns true if passed dates has same minute', function() {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15)
    )
    expect(result).to.be.true
  })

  it('returns false if passed dates has different minutes', function() {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
      new Date(2014, 8 /* Sep */, 4, 6, 31)
    )
    expect(result).to.be.false
  })

  it('allows to pass string', function() {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString()
    )
    expect(result).to.be.true
  })

  it('allows to pass timestamp', function() {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime()
    )
    expect(result).to.be.true
  })
})

