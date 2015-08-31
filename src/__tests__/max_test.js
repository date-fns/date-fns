var max = require('../max')

describe('max', function() {
  it('returns latest date', function() {
    var result = max(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    expect(result).to.be.eql(new Date(1989, 6 /* Jul */, 10))
  })

  it('allows to pass more than 2 arguments', function() {
    var result = max(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1995, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    )
    expect(result).to.be.eql(new Date(1995, 6 /* Jul */, 2))
  })

  it('allows to pass strings', function() {
    var result = max(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    expect(result).to.be.eql(new Date(1989, 6 /* Jul */, 10))
  })

  it('allows to pass timestamps', function() {
    var result = max(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    expect(result).to.be.eql(new Date(1989, 6 /* Jul */, 10))
  })
})

