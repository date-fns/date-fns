var assert = require('power-assert')
var lastDayOfISOWeek = require('../last_day_of_iso_week')

describe('lastDayOfISOWeek', function() {
  it('returns date with time setted to 00:00:00 and date setted to last day of ISO week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfISOWeek(date)
    assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 6 /* Jul */, 2, 11, 55, 0).toISOString()
    var result = lastDayOfISOWeek(date)
    assert.deepEqual(result,
      new Date(2014, 6 /* Jul */, 6)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    var result = lastDayOfISOWeek(date)
    assert.deepEqual(result,
      new Date(2014, 1 /* Feb */, 16)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfISOWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

