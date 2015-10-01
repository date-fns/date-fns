var assert = require('power-assert')
var addYears = require('../add_years')

describe('addYears', function() {
  it('adds number of passed years', function() {
    var result = addYears(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('accepts string', function() {
    var result = addYears(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2026, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = addYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2026, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addYears(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

