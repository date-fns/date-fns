var startOfSecond = require('../start_of_second')

describe('startOfSecond', function() {
  it('returns date with time setted to first millisecond of second', function() {
    var date = new Date(2014, 11, 1, 22, 15, 45, 400)
    var result = startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 45))
  })

  it('supports string as a date', function() {
    var result = startOfSecond('2014-12-01T13:20:30.456Z')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 20, 30)))
  })

  it('supports timestamp as a date', function() {
    var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 45))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15, 45, 400)
    startOfSecond(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15, 45, 400))
  })
})

