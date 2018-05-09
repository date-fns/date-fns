// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarYears from '.'

describe('differenceInCalendarYears', function () {
  it('returns the number of calendar years between the given dates', function () {
    var result = differenceInCalendarYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = differenceInCalendarYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -1)
  })

  it('accepts strings', function () {
    var result = differenceInCalendarYears(
      new Date(2014, 0 /* Jan */, 1).toISOString(),
      new Date(2000, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 14)
  })

  it('accepts timestamps', function () {
    var result = differenceInCalendarYears(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 4)
  })

  describe('edge cases', function () {
    it('the difference is less than a year, but the given dates are in different calendar years', function () {
      var result = differenceInCalendarYears(
        new Date(2015, 0 /* Jan */, 1),
        new Date(2014, 11 /* Dec */, 31)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInCalendarYears(
        new Date(2014, 11 /* Dec */, 31),
        new Date(2015, 0 /* Jan */, 1)
      )
      assert(result === -1)
    })

    it('the days and months of the given dates are the same', function () {
      var result = differenceInCalendarYears(
        new Date(2014, 8 /* Sep */, 5),
        new Date(2012, 8 /* Sep */, 5)
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

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero (x) {
        return x === 0 && (1 / x < 0)
      }

      var result = differenceInCalendarYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = differenceInCalendarYears(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = differenceInCalendarYears(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = differenceInCalendarYears(
      new Date(NaN),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = differenceInCalendarYears.bind(
      null,
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(differenceInCalendarYears.bind(null), TypeError)
    assert.throws(differenceInCalendarYears.bind(null, 1), TypeError)
  })
})
