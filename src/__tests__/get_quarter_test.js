var getQuarter = require('../get_quarter')

describe('getQuarter', function() {
  it('returns quarter of given date', function() {
    var result = getQuarter(new Date(2014, 6 /* Jul */, 2))
    assert(result === 3)
  })

  it('accepts string', function() {
    var result = getQuarter(new Date(2014, 3 /* Apr */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts timestamp', function() {
    var result = getQuarter(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 2)
  })
})

