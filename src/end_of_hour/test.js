var assert = require('power-assert')
var endOfHour = require('./')

describe('endOfHour', function() {
  it('returns date with time setted to last millisecond before hour ends', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('accepts string', function() {
    var date = new Date(2014, 11, 1, 13).toISOString()
    var result = endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 13, 59, 59, 999))
  })

  it('accepts timestamp', function() {
    var result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    endOfHour(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })
})

