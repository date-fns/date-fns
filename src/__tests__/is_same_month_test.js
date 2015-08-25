var isSameMonth = require('../is_same_month')

describe('isSameMonth', function() {
  it('returns true if passed dates has same month (and year)', function() {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    expect(result).to.be.true
  })

  it('returns false if passed dates has different months', function() {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    expect(result).to.be.false
  })

  it('allows to pass string', function() {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    expect(result).to.be.true
  })

  it('allows to pass timestamp', function() {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    expect(result).to.be.true
  })
})

