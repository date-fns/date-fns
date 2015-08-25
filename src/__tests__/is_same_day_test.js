var isSameDay = require('../is_same_day')

describe('isSameDay', function() {
  it('returns true if passed dates has same day', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0)
    )
    expect(result).to.be.true
  })

  it('returns false if passed dates has different days', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0)
    )
    expect(result).to.be.false
  })

  it('allows to pass string', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString()
    )
    expect(result).to.be.true
  })

  it('allows to pass timestamp', function() {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime()
    )
    expect(result).to.be.true
  })
})

