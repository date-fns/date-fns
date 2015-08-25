var addMilliseconds = require('../add_milliseconds')

describe('addMilliseconds', function() {
  it('adds number of passed milliseconds', function() {
    var result = addMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750)
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750))
  })

  it('accepts string', function() {
    var result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500
    )
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500))
  })

  it('accepts timestamp', function() {
    var result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500
    )
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    addMilliseconds(date, 250)
    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })
})

