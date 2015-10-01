var assert = require('power-assert')
var setHours = require('../set_hours')

describe('setHours', function() {
  it('sets amount of hours', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('accepts string', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 18))
  })

  it('accepts timestamp', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 5))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11)
    setHours(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11))
  })
})

