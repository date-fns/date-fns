var subMinutes = require('../sub_minutes')

describe('subMinutes', function() {
  it('subtracts number of passed minutes', function() {
    var result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 11, 30))
  })

  it('accepts string', function() {
    var result = subMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20
    )
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 11, 40))
  })

  it('accepts timestamp', function() {
    var result = subMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20
    )
    expect(result).to.be.eql(new Date(2014, 6 /* Jul */, 10, 11, 40))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    subMinutes(date, 25)
    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 10, 12, 0))
  })
})

