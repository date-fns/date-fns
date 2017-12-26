// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getISOWeek from '.'

describe('getISOWeek', function () {
  it('returns the ISO week of the given date', function () {
    var result = getISOWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 53)
  })

  it('accepts a string', function () {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).toISOString())
    assert(result === 1)
  })

  it('accepts a timestamp', function () {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })

  describe('edge cases', function () {
    it('returns the ISO week at 1 January 2016', function () {
      var result = getISOWeek(new Date(2016, 0 /* Jan */, 1))
      assert(result === 53)
    })

    it('returns the ISO week at 1 May 2016', function () {
      var result = getISOWeek(new Date(2016, 4 /* May */, 1))
      assert(result === 17)
    })

    it('returns the ISO week at 2 May 2016', function () {
      var result = getISOWeek(new Date(2016, 4 /* May */, 2))
      assert(result === 18)
    })

    it('returns the ISO week at 31 May 2016', function () {
      var result = getISOWeek(new Date(2016, 4 /* May */, 31))
      assert(result === 22)
    })
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 30)
    initialDate.setHours(0, 0, 0, 0)
    var result = getISOWeek(initialDate)
    assert(result === 52)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getISOWeek(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getISOWeek.bind(null, new Date(2005, 0 /* Jan */, 2), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getISOWeek.bind(null), TypeError)
  })
})
