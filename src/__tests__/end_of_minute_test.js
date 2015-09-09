var endOfMinute = require('../end_of_minute')

describe('endOfMinute', function() {
  it('returns date with time setted to last millisecond before the minute ends', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = endOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('supports string as a date', function() {
    var result = endOfMinute('2014-12-01T13:00:00.000Z')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 00, 59, 999)))
  })

  it('supports timestamp as a date', function() {
    var result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    endOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })
})

