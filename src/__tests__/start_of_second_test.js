var assert = require('power-assert')
var startOfSecond = require('../start_of_second')

describe('startOfSecond', function() {
  it('returns date with time setted to first millisecond of second', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('accepts string', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 13, 20, 30, 456).toISOString()
    var result = startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 13, 20, 30))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400).getTime()
    var result = startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    startOfSecond(date)
    assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400))
  })
})

