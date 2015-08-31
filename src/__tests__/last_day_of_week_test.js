var lastDayOfWeek = require('../last_day_of_week')

describe('lastDayOfWeek', function() {
  it('returns date with time setted to 00:00:00 and date setted to last day of week', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfWeek(date)
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 6)
    )
  })

  it('allows to pass when a week starts', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfWeek(date, 1)
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 7)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = lastDayOfWeek(date)
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 6)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = lastDayOfWeek(date)
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 6)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfWeek(date)
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function() {
    context('when current day value is less than start of week', function() {
      it('it returns end of week', function() {
        var date = new Date(2014, 9 /* Oct */, 6)
        var result = lastDayOfWeek(date, 3)
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 7))
      })
    })

    context('when current day value is equal to start of week', function() {
      it('it returns end of week', function() {
        var date = new Date(2014, 9 /* Oct */, 8)
        var result = lastDayOfWeek(date, 3)
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 14))
      })
    })

    context('when current day value is bigger than start of week', function() {
      it('it returns end of week', function() {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = lastDayOfWeek(date, 3)
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 14))
      })
    })

    context('with end of year', function() {
      var date = new Date(2014, 11 /* Dec */, 29)
      var result = lastDayOfWeek(date, 5)
      expect(result).to.be.eql(new Date(2015, 0 /* Jan */, 1))
    })
  })
})

