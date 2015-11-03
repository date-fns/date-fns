var assert = require('power-assert')
var startOfMinute = require('./')

describe('startOfMinute', function() {
  it('returns date with time setted to first millisecond of minute', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('accepts string', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 13, 20).toISOString()
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 13, 20))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15).getTime()
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    startOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400))
  })
})

