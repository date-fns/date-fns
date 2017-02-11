// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarYears from '.'

describe('differenceInCalendarYears', function () {
  it('returns the number of calendar years between the given dates', function () {
    var result = differenceInCalendarYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the second date is smaller', function () {
    var result = differenceInCalendarYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === -1)
  })

  it('accepts strings', function () {
    var result = differenceInCalendarYears(
      new Date(2000, 0 /* Jan */, 1).toISOString(),
      new Date(2014, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 14)
  })

  it('accepts timestamps', function () {
    var result = differenceInCalendarYears(
      new Date(2010, 6 /* Jul */, 2).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    assert(result === 4)
  })

  describe('edge cases', function () {
    it('the difference is less than a year, but the given dates are in different calendar years', function () {
      var result = differenceInCalendarYears(
        new Date(2014, 11 /* Dec */, 31),
        new Date(2015, 0 /* Jan */, 1)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInCalendarYears(
        new Date(2015, 0 /* Jan */, 1),
        new Date(2014, 11 /* Dec */, 31)
      )
      assert(result === -1)
    })

    it('the days and months of the given dates are the same', function () {
      var result = differenceInCalendarYears(
        new Date(2012, 8 /* Sep */, 5),
        new Date(2014, 8 /* Sep */, 5)
      )
      assert(result === 2)
    })

    it('the given dates are the same', function () {
      var result = differenceInCalendarYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})
