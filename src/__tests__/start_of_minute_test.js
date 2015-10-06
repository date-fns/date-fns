var assert = require('power-assert')
var startOfMinute = require('../start_of_minute')

describe('startOfMinute', function() {
  it('returns date with time setted to first millisecond of minute', function() {
    var date = new Date(2014, 11, 1, 22, 15, 45, 400)
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15))
  })

  it('accepts string', function() {
    var result = startOfMinute('2014-12-01T13:20:30.456Z')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 20)))
  })

  it('accepts timestamp', function() {
    var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15, 45, 400)
    startOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15, 45, 400))
  })
})

