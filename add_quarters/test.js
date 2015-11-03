var assert = require('power-assert')
var addQuarters = require('./')

describe('addQuarters', function() {
  it('adds given number of quarters', function() {
    var result = addQuarters(new Date(2014, 8 /* Sep */, 1), 1)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts string', function() {
    var result = addQuarters(new Date(2014, 8 /* Sep */, 1).toISOString(), 4)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = addQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addQuarters(date, 4)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if desired month have less days and provided date is in the last day of month', function() {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = addQuarters(date, 3)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 30))
  })
})

