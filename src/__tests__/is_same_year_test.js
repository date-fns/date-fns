var isSameYear = require('../is_same_year')

describe('isSameYear', function() {
  it('returns true if passed dates has same year', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    expect(result).to.be.true
  })

  it('returns false if passed dates has different years', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    expect(result).to.be.false
  })

  it('allows to pass string', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    expect(result).to.be.true
  })

  it('allows to pass timestamp', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    expect(result).to.be.true
  })
})

