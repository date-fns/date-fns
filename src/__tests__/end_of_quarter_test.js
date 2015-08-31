var endOfQuarter = require('../end_of_quarter')

describe('endOfQuarter', function() {
  it('returns date with time setted to 23:59:59.999 and date setted to last day of quarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfQuarter(date)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('accepts string', function() {
    var date = new Date(2014, 0 /* Jan */, 1, 11, 55, 0).toISOString()
    var result = endOfQuarter(date)
    expect(result).to.be.eql(new Date(2014, 2 /* Mar */, 31, 23, 59, 59, 999))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfQuarter(date)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfQuarter(date)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

