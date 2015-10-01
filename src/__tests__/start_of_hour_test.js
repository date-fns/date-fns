var assert = require('power-assert')
var startOfHour = require('../start_of_hour')

describe('startOfHour', function() {
  it('returns date with minutes setted to 00:00:00', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    var result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    startOfHour(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55))
  })

  it('accepts timestamp as a date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime()
    var result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('accepts string as a date', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 12, 45).toISOString()
    var result = startOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 12, 0))
  })
})

