// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDaysInMonth from '.'

describe('getDaysInMonth', function () {
  it('returns the number of days in the month of the given date', function () {
    var result = getDaysInMonth(new Date(2100, 1 /* Feb */, 11))
    assert(result === 28)
  })

  it('works for the February of a leap year', function () {
    var result = getDaysInMonth(new Date(2000, 1 /* Feb */, 11))
    assert(result === 29)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = getDaysInMonth(date)
    assert(result === 31)
  })

  it('handles dates before 100 AD', function () {
    var date = new Date(0)
    date.setFullYear(0, 1 /* Feb */, 15)
    date.setHours(0, 0, 0, 0)
    var result = getDaysInMonth(date)
    assert(result === 29)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getDaysInMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getDaysInMonth.bind(null, new Date(2100, 1 /* Feb */, 11), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getDaysInMonth.bind(null), TypeError)
  })
})
