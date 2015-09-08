var getTimeSinceMidnight = require('../get_time_since_midnight')

describe('getTimeSinceMidnight', function() {
  it('returns milliseconds since midnight', function() {
    var result = getTimeSinceMidnight(new Date(2010, 2 /* Mar */, 28, 14))
    expect(result).to.be.equal(50400000)
  })

  it('accepts string', function() {
    var result = getTimeSinceMidnight(new Date(2014, 6 /* Jul */, 2, 0, 0, 0, 123).toISOString())
    expect(result).to.be.equal(123)
  })

  it('accepts timestamp', function() {
    var result = getTimeSinceMidnight(new Date(2014, 1 /* Feb */, 11, 1, 2, 3, 4).getTime())
    expect(result).to.be.equal(3723004)
  })
})

