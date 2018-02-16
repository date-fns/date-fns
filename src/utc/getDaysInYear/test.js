// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDaysInYear from '.'

describe('utc/getDaysInYear', function () {
  it('returns the number of days in the year of the given date', function () {
    var result = getDaysInYear(new Date(Date.UTC(2014, 6 /* Jul */, 2)))
    assert(result === 365)
  })

  it('works for a leap year', function () {
    var result = getDaysInYear(new Date(Date.UTC(2012, 6 /* Jul */, 2)))
    assert(result === 366)
  })

  it('works for the years divisible by 100 but not by 400', function () {
    var result = getDaysInYear(new Date(Date.UTC(2100, 6 /* Jul */, 2)))
    assert(result === 365)
  })

  it('works for the years divisible by 400', function () {
    var result = getDaysInYear(new Date(Date.UTC(2000, 6 /* Jul */, 2)))
    assert(result === 366)
  })

  it('accepts a string', function () {
    var date = new Date(Date.UTC(2012, 6 /* Jul */, 2)).toISOString()
    var result = getDaysInYear(date)
    assert(result === 366)
  })

  it('accepts a timestamp', function () {
    var date = Date.UTC(2012, 6 /* Jul */, 2)
    var result = getDaysInYear(date)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getDaysInYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getDaysInYear.bind(null, new Date(Date.UTC(2014, 6 /* Jul */, 2)), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getDaysInYear.bind(null), TypeError)
  })
})
