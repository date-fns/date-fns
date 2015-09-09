var getISOWeek = require('../get_iso_week')

describe('getISOWeek', function() {
  it('returns ISO week of given date', function() {
    var result = getISOWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 53)
  })

  it('allows to pass string', function() {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).toISOString())
    assert(result === 1)
  })

  it('allows to pass timestamp', function() {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })
})

