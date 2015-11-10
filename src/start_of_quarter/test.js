var assert = require('power-assert')
var startOfQuarter = require('./')

describe('startOfQuarter', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day of quarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('accepts string', function() {
    var date = new Date(2014, 2 /* Mar */, 2, 11, 55, 0).toISOString()
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfQuarter(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

