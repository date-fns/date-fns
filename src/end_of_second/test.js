var assert = require('power-assert')
var endOfSecond = require('./')

describe('endOfSecond', function() {
  it('returns date with time setted to last millisecond before second ends', function() {
    var date = new Date(2014, 11, 1, 22, 15, 30)
    var result = endOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('accepts string', function() {
    var result = endOfSecond('2014-12-01T13:00:00.000Z')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 00, 0, 999)))
  })

  it('accepts timestamp', function() {
    var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 45, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15, 15, 300)
    endOfSecond(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15, 15, 300))
  })
})

