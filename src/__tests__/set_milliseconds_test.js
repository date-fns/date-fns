var setMilliseconds = require('../set_milliseconds')

describe('setMilliseconds', function() {
  it('sets amount of milliseconds', function() {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 300)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('accepts string', function() {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 123)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 0, 0, 123))
  })

  it('accepts timestamp', function() {
    var result = setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(), 755)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    setMilliseconds(date, 137)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500))
  })
})

