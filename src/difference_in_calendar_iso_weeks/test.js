// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarISOWeeks from '.'

describe('differenceInCalendarISOWeeks', function () {
  it('returns the number of calendar ISO weeks between the given dates', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      new Date(2014, 6 /* Jul */, 8, 18, 0)
    )
    assert(result === 2)
  })

  it('returns a negative number if the time value of the second date is smaller', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )
    assert(result === -2)
  })

  it('accepts strings', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 2).toISOString(),
      new Date(2014, 7 /* Aug */, 8).toISOString()
    )
    assert(result === 5)
  })

  it('accepts timestamps', function () {
    var result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2014, 6 /* Jul */, 12).getTime()
    )
    assert(result === 1)
  })

  describe('edge cases', function () {
    it('the difference is less than an ISO week, but the given dates are in different calendar ISO weeks', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 6),
        new Date(2014, 6 /* Jul */, 7)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 7),
        new Date(2014, 6 /* Jul */, 6)
      )
      assert(result === -1)
    })

    it('the days of weeks of the given dates are the same', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 2),
        new Date(2014, 6 /* Jul */, 9)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      var result = differenceInCalendarISOWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})
