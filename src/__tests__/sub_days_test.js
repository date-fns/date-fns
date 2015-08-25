var subDays = require('../sub_days')

describe('subDays', function() {
  it('subs number of passed days', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1), 10)
    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts string', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts timestamp', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    expect(result).to.be.eql(new Date(2014, 7 /* Aug */, 22))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subDays(date, 11)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1))
  })
})

