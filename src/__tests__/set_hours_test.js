var setHours = require('../set_hours')

describe('setHours', function() {
  it('sets amount of hours', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('accepts string', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 18))
  })

  it('accepts timestamp', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 5))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11)
    setHours(date, 12)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11))
  })
})

