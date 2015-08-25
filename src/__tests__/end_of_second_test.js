var endOfSecond = require('../end_of_second')

describe('endOfSecond', function() {
  it('returns date with time setted to last millisecond before the second ends', function() {
    var date = new Date(2014, 11, 1, 22, 15, 30)
    var result = endOfSecond(date)
    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('supports string as a date', function() {
    var result = endOfSecond('2014-12-01T13:00:00.000Z')
    expect(result).to.be.eql(new Date(Date.UTC(2014, 11, 1, 13, 00, 0, 999)))
  })

  it('supports timestamp as a date', function() {
    var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45).getTime())
    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 15, 45, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15, 15, 300)
    endOfSecond(date)
    expect(date).to.be.eql(new Date(2014, 11, 1, 22, 15, 15, 300))
  })
})

