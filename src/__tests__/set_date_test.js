var setDate = require('../set_date')

describe('setDate', function() {
  it('sets day of month', function() {
    var result = setDate(new Date(2014, 8 /* Sep */, 1), 30)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts string', function() {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).toISOString(), 18)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 18))
  })

  it('accepts timestamp', function() {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 25))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1))
  })
})

