/* eslint-env mocha */

var assert = require('power-assert')
var differenceInCalendarISOWeeks = require('./')

describe('differenceInCalendarISOWeeks', function () {
  it('returns number of calendar weeks between dates', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )
    assert(result === 2)
  })

  it('returns negative number if time value of first date is smaller', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      new Date(2014, 6 /* Jul */, 8, 18, 0)
    )
    assert(result === -2)
  })

  it('allows to pass strings', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 7 /* Aug */, 8).toISOString(),
      new Date(2014, 6 /* Jul */, 2).toISOString()
    )
    assert(result === 5)
  })

  it('allows to pass timestamps', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 12).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    assert(result === 1)
  })

  describe('edge cases', function () {
    it('difference is less than week, but dates are in different calendar ISO weeks', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 7),
        new Date(2014, 6 /* Jul */, 6)
      )
      assert(result === 1)
    })

    it('the same for swapped dates', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 6),
        new Date(2014, 6 /* Jul */, 7)
      )
      assert(result === -1)
    })

    it('days of weeks of dates are the same', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 9),
        new Date(2014, 6 /* Jul */, 2)
      )
      assert(result === 1)
    })

    it('dates are the same', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})

