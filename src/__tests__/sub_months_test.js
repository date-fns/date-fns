var assert = require('power-assert')
var subMonths = require('../sub_months')

describe('subMonths', function() {
  it('subtracts given number of months', function() {
    var result = subMonths(new Date(2015, 1 /* Feb */, 1), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts string', function() {
    var result = subMonths(new Date(2015, 8 /* Sep */, 1).toISOString(), 12)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts timestamp', function() {
    var result = subMonths(new Date(2015, 8 /* Sep */, 1).getTime(), 12)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subMonths(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

