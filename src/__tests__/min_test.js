var min = require('../min')

describe('min', function() {
  it('returns earliest date', function() {
    var result = min(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    expect(result).to.be.eql(new Date(1987, 1 /* Feb */, 11))
  })

  it('allows to pass more than 2 arguments', function() {
    var result = min(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    )
    expect(result).to.be.eql(new Date(1985, 6 /* Jul */, 2))
  })

  it('allows to pass strings', function() {
    var result = min(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    expect(result).to.be.eql(new Date(1987, 1 /* Feb */, 11))
  })

  it('allows to pass timestamps', function() {
    var result = min(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    expect(result).to.be.eql(new Date(1987, 1 /* Feb */, 11))
  })
})

