var endOfHour = require('../end_of_hour')

describe('endOfHour', function() {
  it('returns date with time setted to last millisecond before the hour ends', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = endOfHour(date)
    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('supports string as a date', function() {
    var result = endOfHour('2014-12-01T13:00:00.000Z')
    expect(result).to.be.eql(new Date(Date.UTC(2014, 11, 1, 13, 59, 59, 999)))
  })

  it('supports timestamp as a date', function() {
    var result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime())
    expect(result).to.be.eql(new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    endOfHour(date)
    expect(date).to.be.eql(new Date(2014, 11, 1, 22, 15))
  })
})

