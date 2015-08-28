var lastDayOfQuarter = require('../last_day_of_quarter')

describe('lastDayOfQuarter', function() {
  it('returns date with time setted to 00:00:00 and date setted to last day of quarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfQuarter(date)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts string', function() {
    var date = new Date(2014, 0 /* Jan */, 1, 11, 55, 0).toISOString()
    var result = lastDayOfQuarter(date)
    expect(result).to.be.eql(new Date(2014, 2 /* Mar */, 31))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = lastDayOfQuarter(date)
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 30))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfQuarter(date)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

