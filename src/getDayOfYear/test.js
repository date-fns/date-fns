// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDayOfYear from '.'

describe('getDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('accepts a string', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    assert(result === 2)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var result = getDayOfYear(initialDate)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getDayOfYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getDayOfYear.bind(null, new Date(2014, 6 /* Jul */, 2), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getDayOfYear.bind(null), TypeError)
  })
})
