var addQuarters = require('../add_quarters')

describe('addQuarters', function() {
  it('adds number of passed quarters', function() {
    var result = addQuarters(new Date(2014, 8 /* Sep */, 1), 1)
    expect(result).to.be.eql(new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts string', function() {
    var result = addQuarters(new Date(2014, 8 /* Sep */, 1).toISOString(), 4)
    expect(result).to.be.eql(new Date(2015, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = addQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    expect(result).to.be.eql(new Date(2015, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addQuarters(date, 4)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1))
  })

  it('works well when desired month have less days and provided date is on the last day of month', function() {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = addQuarters(date, 3)
    expect(result).to.be.eql(new Date(2015, 8 /* Sep */, 30))
  })
})

