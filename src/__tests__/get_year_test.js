var getYear = require('../get_year')

describe('getYear', function() {
  it('returns year of given date', function() {
    var result = getYear(new Date(2014, 6 /* Jul */, 2))
    expect(result).to.be.equal(2014)
  })

  it('accepts string', function() {
    var result = getYear(new Date(700, 6 /* Jul */, 2).toISOString())
    expect(result).to.be.equal(700)
  })

  it('accepts timestamp', function() {
    var result = getYear(new Date(50000, 3 /* Apr */, 2).getTime())
    expect(result).to.be.equal(50000)
  })
})

