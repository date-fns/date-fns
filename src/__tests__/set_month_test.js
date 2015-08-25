var setMonth = require('../set_month')

describe('setMonth', function() {
  it('set index of month', function() {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1), 1)
    expect(result).to.be.eql(new Date(2014, 1 /* Feb */, 1))
  })

  it('sets last day of month if original date was last day of longer month', function() {
    var result = setMonth(new Date(2014, 11 /* Dec */, 31), 1)
    expect(result).to.be.eql(new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts string', function() {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1).toISOString(), 11)
    expect(result).to.be.eql(new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts timestamp', function() {
    var result = setMonth(new Date(2014, 8 /* Sep */, 1).getTime(), 11)
    expect(result).to.be.eql(new Date(2014, 11 /* Dec */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    setMonth(date, 5)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1))
  })
})

