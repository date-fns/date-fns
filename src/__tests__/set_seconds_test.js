var setSeconds = require('../set_seconds')

describe('setSeconds', function() {
  it('sets amount of seconds', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts string', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 0, 18))
  })

  it('accepts timestamp', function() {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })
})

