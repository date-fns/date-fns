var assert = require('power-assert')
var setYear = require('../set_year')

describe('setYear', function() {
  it('set full year', function() {
    var result = setYear(new Date(2014, 8 /* Sep */, 1), 2013)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts string', function() {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    setYear(date, 2011)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

