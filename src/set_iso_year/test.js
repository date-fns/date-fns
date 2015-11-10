var assert = require('power-assert')
var setISOYear = require('./')

describe('setISOYear', function() {
  it('sets ISO year of given date, saving ISO week and day of week', function() {
    var result = setISOYear(new Date(2008, 11 /* Dec */, 29), 2007)
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('accepts string', function() {
    var result = setISOYear(new Date(2010, 0 /* Jan */, 2).toISOString(), 2004)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('accepts timestamp', function() {
    var result = setISOYear(new Date(2010, 0 /* Jan */, 2).getTime(), 2004)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2008, 11 /* Dec */, 29)
    setISOYear(date, 2000)
    assert.deepEqual(date, new Date(2008, 11 /* Dec */, 29))
  })
})

