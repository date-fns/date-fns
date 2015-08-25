var getDayOfYear = require('../get_day_of_year')

describe('getDayOfYear', function() {
  it('returns day of year of given date', function() {
    var result = getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    expect(result).to.be.equal(183)
  })

  it('accepts string', function() {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString())
    expect(result).to.be.equal(2)
  })

  it('accepts timestamp', function() {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    expect(result).to.be.equal(2)
  })
})

