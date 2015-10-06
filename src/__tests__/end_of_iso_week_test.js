var assert = require('power-assert')
var endOfISOWeek = require('../end_of_iso_week')

describe('endOfISOWeek', function() {
  it('returns date with time setted to 23:59:59:999 and date setted to last day of ISO week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfISOWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 6 /* Jul */, 2, 11, 55, 0).toISOString()
    var result = endOfISOWeek(date)
    assert.deepEqual(result,
      new Date(2014, 6 /* Jul */, 6, 23, 59, 59, 999)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    var result = endOfISOWeek(date)
    assert.deepEqual(result,
      new Date(2014, 1 /* Feb */, 16, 23, 59, 59, 999)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfISOWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

