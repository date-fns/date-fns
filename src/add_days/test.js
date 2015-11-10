var assert = require('power-assert')
var addDays = require('./')

describe('addDays', function() {
  it('adds given number of days', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts string', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts timestamp', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

