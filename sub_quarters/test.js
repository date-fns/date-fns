var assert = require('power-assert')
var subQuarters = require('./')

describe('subQuarters', function() {
  it('subtracts given number of quarters', function() {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1), 3)
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('accepts string', function() {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1).toISOString(), 4)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = subQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subQuarters(date, 3)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if desired month have less days and provided date is on the last day of month', function() {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = subQuarters(date, 1)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })
})

