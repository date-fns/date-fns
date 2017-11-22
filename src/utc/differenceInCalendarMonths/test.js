// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarMonths from '.'

describe('utc/differenceInCalendarMonths', function () {
  it('returns the number of calendar months between the given dates', function () {
    var result = differenceInCalendarMonths(
      new Date(Date.UTC(2012, 6 /* Jul */, 2, 18, 0)),
      new Date(Date.UTC(2011, 6 /* Jul */, 2, 6, 0))
    )
    assert(result === 12)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = differenceInCalendarMonths(
      new Date(Date.UTC(2011, 6 /* Jul */, 2, 6, 0)),
      new Date(Date.UTC(2012, 6 /* Jul */, 2, 18, 0))
    )
    assert(result === -12)
  })

  it('accepts strings', function () {
    var result = differenceInCalendarMonths(
      new Date(Date.UTC(2000, 3 /* Apr */, 2)).toISOString(),
      new Date(Date.UTC(2000, 0 /* Jan */, 1)).toISOString()
    )
    assert(result === 3)
  })

  it('accepts timestamps', function () {
    var result = differenceInCalendarMonths(
      Date.UTC(2014, 7 /* Aug */, 2),
      Date.UTC(2010, 6 /* Jul */, 2)
    )
    assert(result === 49)
  })

  describe('edge cases', function () {
    it('the difference is less than a month, but the given dates are in different calendar months', function () {
      var result = differenceInCalendarMonths(
        new Date(Date.UTC(2014, 8 /* Sep */, 1)),
        new Date(Date.UTC(2014, 7 /* Aug */, 31))
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInCalendarMonths(
        new Date(Date.UTC(2014, 7 /* Aug */, 31)),
        new Date(Date.UTC(2014, 8 /* Sep */, 1))
      )
      assert(result === -1)
    })

    it('the days of months of the given dates are the same', function () {
      var result = differenceInCalendarMonths(
        new Date(Date.UTC(2014, 8 /* Sep */, 6)),
        new Date(Date.UTC(2014, 7 /* Aug */, 6))
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      var result = differenceInCalendarMonths(
        new Date(Date.UTC(2014, 8 /* Sep */, 5, 0, 0)),
        new Date(Date.UTC(2014, 8 /* Sep */, 5, 0, 0))
      )
      assert(result === 0)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = differenceInCalendarMonths(
      new Date(NaN),
      new Date(Date.UTC(2017, 0 /* Jan */, 1))
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = differenceInCalendarMonths(
      new Date(Date.UTC(2017, 0 /* Jan */, 1)),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = differenceInCalendarMonths(
      new Date(NaN),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = differenceInCalendarMonths.bind(
      null,
      new Date(Date.UTC(2011, 6 /* Jul */, 2, 6, 0)),
      new Date(Date.UTC(2012, 6 /* Jul */, 2, 18, 0)),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(differenceInCalendarMonths.bind(null), TypeError)
    assert.throws(differenceInCalendarMonths.bind(null, 1), TypeError)
  })
})
