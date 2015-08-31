var setMinutes = require('../set_minutes')

describe('setMinutes', function() {
  it('sets amount of minutes', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('accepts string', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 18))
  })

  it('accepts timestamp', function() {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 5))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30)
    setMinutes(date, 15)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30))
  })
})

