// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInISOWeekYears from '.'

describe('differenceInISOWeekYears', function () {
  it('returns the number of full ISO week-numbering years between the given dates', function () {
    var result = differenceInISOWeekYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = differenceInISOWeekYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -1)
  })

  it('accepts strings', function () {
    var result = differenceInISOWeekYears(
      new Date(2014, 0 /* Jan */, 1).toISOString(),
      new Date(2000, 0 /* Jan */, 1).toISOString()
    )
    assert(result === 14)
  })

  it('accepts timestamps', function () {
    var result = differenceInISOWeekYears(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 4)
  })

  it('handles dates before 100 AD', function () {
    var firstDate = new Date(0)
    firstDate.setFullYear(14, 0 /* Jan */, 1)
    firstDate.setHours(0, 0, 0, 0)
    var secondDate = new Date(0)
    secondDate.setFullYear(0, 0 /* Jan */, 1)
    secondDate.setHours(0, 0, 0, 0)
    var result = differenceInISOWeekYears(firstDate, secondDate)
    assert(result === 14)
  })

  describe('edge cases', function () {
    it('the difference is less than an ISO year, but the given dates are in different calendar years', function () {
      var result = differenceInISOWeekYears(
        new Date(2012, 0 /* Jan */, 2),
        new Date(2012, 0 /* Jan */, 1)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInISOWeekYears(
        new Date(2012, 0 /* Jan */, 1),
        new Date(2012, 0 /* Jan */, 2)
      )
      assert(result === 0)
    })

    it('the ISO weeks and weekdays of the given dates are the same', function () {
      var result = differenceInISOWeekYears(
        new Date(2013, 11 /* Dec */, 30),
        new Date(2012, 0 /* Jan */, 2)
      )
      assert(result === 2)
    })

    it('the given dates are the same', function () {
      var result = differenceInISOWeekYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero (x) {
        return x === 0 && (1 / x < 0)
      }

      var result = differenceInISOWeekYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = differenceInISOWeekYears(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = differenceInISOWeekYears(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = differenceInISOWeekYears(
      new Date(NaN),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = differenceInISOWeekYears.bind(
      this,
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(differenceInISOWeekYears.bind(null), TypeError)
    assert.throws(differenceInISOWeekYears.bind(null, 1), TypeError)
  })
})
