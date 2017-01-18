// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarMonths from '.'

describe('differenceInCalendarMonths', function () {
  it('returns the number of calendar months between the given dates', function () {
    var result = differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 12)
  })

  it('returns a negative number if the time value of the second date is smaller', function () {
    var result = differenceInCalendarMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === -12)
  })

  it('accepts strings', function () {
    var result = differenceInCalendarMonths(
      new Date(2000, 0 /* Jan */, 1).toISOString(),
      new Date(2000, 3 /* Apr */, 2).toISOString()
    )
    assert(result === 3)
  })

  it('accepts timestamps', function () {
    var result = differenceInCalendarMonths(
      new Date(2010, 6 /* Jul */, 2).getTime(),
      new Date(2014, 7 /* Aug */, 2).getTime()
    )
    assert(result === 49)
  })

  describe('edge cases', function () {
    it('the difference is less than a month, but the given dates are in different calendar months', function () {
      var result = differenceInCalendarMonths(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 1)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 1),
        new Date(2014, 7 /* Aug */, 31)
      )
      assert(result === -1)
    })

    it('the days of months of the given dates are the same', function () {
      var result = differenceInCalendarMonths(
        new Date(2014, 7 /* Aug */, 6),
        new Date(2014, 8 /* Sep */, 6)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      var result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})
