var subMilliseconds = require('../sub_milliseconds')

describe('subMilliseconds', function() {
  it('subtracts number of passed milliseconds', function() {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750)
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('accepts string', function() {
    var result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500
    )
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('accepts timestamp', function() {
    var result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500
    )
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    subMilliseconds(date, 250)
    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })
})

