var setISOWeek = require('../set_iso_week')

describe('setISOWeek', function() {
  it('sets ISO week to given date', function() {
    var result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('allows to pass string', function() {
    var result = setISOWeek(new Date(2009, 11 /* Dec */, 2).toISOString(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('allows to pass timestamp', function() {
    var result = setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    setISOWeek(date, 52)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })
})

