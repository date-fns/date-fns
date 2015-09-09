var getMilliseconds = require('../get_milliseconds')

describe('getMilliseconds', function() {
  it('returns amount of milliseconds of given date', function() {
    var result = getMilliseconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123))
    assert(result === 123)
  })

  it('accepts string', function() {
    var result = getMilliseconds(new Date(2014, 6 /* Jul */, 2, 5, 15).toISOString())
    assert(result === 0)
  })

  it('accepts timestamp', function() {
    var result = getMilliseconds(new Date(2014, 3 /* Apr */, 2, 23, 30, 42, 500).getTime())
    assert(result === 500)
  })
})

