var assert = require('power-assert')
var startOfYear = require('./')

describe('startOfYear', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day of year', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 00)
    var result = startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 00).toISOString()
    var result = startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 00).getTime()
    var result = startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Dec */, 1, 0, 0, 0, 0))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 00)
    startOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 00))
  })
})

