var assert = require('power-assert')
var subDays = require('./')

describe('subDays', function() {
  it('subtracts given number of days', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts string', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts timestamp', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

