var assert = require('power-assert')
var addMonths = require('../add_months')

describe('addMonths', function() {
  it('adds given number of months', function() {
    var result = addMonths(new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 1))
  })

  it('accepts string', function() {
    var result = addMonths(new Date(2014, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = addMonths(new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addMonths(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if desired month have less days and provided date is in the last day of month', function() {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = addMonths(date, 2)
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 28))
  })
})

