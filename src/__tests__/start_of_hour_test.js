var startOfHour = require('../start_of_hour')

describe('startOfHour', function() {
  it('returns date with minutes setted to 00:00:00', function() {
    var date = new Date('2014-09-02T11:55:00')
    var result = startOfHour(date)
    expect(result).to.be.eql(
      new Date('2014-09-02T11:00:00')
    )
  })

  it('does not mutate original date', function() {
    var date = new Date('2014-09-02T11:55:00')
    startOfHour(date)
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'))
  })

  it('accepts timestamp as a date', function() {
    var date = new Date('2014-09-02T11:55:00').getTime()
    var result = startOfHour(date)
    expect(result).to.be.eql(new Date('2014-09-02T11:00:00'))
  })

  it('accepts string as a date', function() {
    var date = startOfHour('2014-12-01T12:35:00')
    // We use Date.UTC here, because string '2014-12-01T12:35:00' is in UTC format
    expect(date).to.be.eql(new Date(Date.UTC(2014, 11, 1, 12, 0)))
  })
})

