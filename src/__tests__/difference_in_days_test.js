var differenceInDays = require('../difference_in_days')

describe('differenceInDays', function() {
  it('returns number of days between dates', function() {
    var result = differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    expect(result).to.be.equal(366)
  })

  it('allows to pass strings', function() {
    var result = differenceInDays(
      new Date(2014, 6 /* Jul */, 1, 23, 59, 59, 999).toISOString(),
      new Date(2014, 0 /* Jan */, 1).toISOString()
    )
    expect(result).to.be.equal(181)
  })

  it('allows to pass timestamps', function() {
    var result = differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime()
    )
    expect(result).to.be.equal(1)
  })
})

