var assert = require('power-assert')
var differenceInCalendarMonths = require('../difference_in_calendar_months')

describe('differenceInCalendarMonths', function() {
  it('returns number of calendar months between dates', function() {
    var result = differenceInCalendarMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 12)
  })

  it('returns negative number if time value of first date is smaller', function() {
    var result = differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -12)
  })

  it('allows to pass strings', function() {
    var result = differenceInCalendarMonths(
      new Date(2000, 3 /* Apr */, 2).toISOString(),
      new Date(2000, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 3)
  })

  it('allows to pass timestamps', function() {
    var result = differenceInCalendarMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 49)
  })

  describe('edge cases', function() {
    it('difference is less than month, but dates are in different calendar months', function() {
      var result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 1),
        new Date(2014, 7 /* Aug */, 31)
      )
      assert(result === 1)
    })

    it('the same for swapped dates', function() {
      var result = differenceInCalendarMonths(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 1)
      )
      assert(result === -1)
    })

    it('days of months of dates are the same', function() {
      var result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6)
      )
      assert(result === 1)
    })

    it('dates are the same', function() {
      var result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

