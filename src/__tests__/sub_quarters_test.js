var subQuarters = require('../sub_quarters')

describe('subQuarters', function() {
  it('subtracts number of passed quarters', function() {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1), 3)
    expect(result).to.be.eql(new Date(2013, 11 /* Dec */, 1))
  })

  it('accepts string', function() {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1).toISOString(), 4)
    expect(result).to.be.eql(new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    expect(result).to.be.eql(new Date(2013, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subQuarters(date, 3)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1))
  })

  it('works well when desired month have less days and provided date is on the last day of month', function() {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = subQuarters(date, 1)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 30))
  })
})

