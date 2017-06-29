// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLeapYear from '.'

describe('isLeapYear', function () {
  it('returns true if the given date is in the leap year', function () {
    var result = isLeapYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if the given date is not in the leap year', function () {
    var result = isLeapYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for the years divisible by 100 but not by 400', function () {
    var result = isLeapYear(new Date(2100, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for the years divisible by 400', function () {
    var result = isLeapYear(new Date(2000, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('accepts a string', function () {
    var date = new Date(2012, 6 /* Jul */, 2).toISOString()
    var result = isLeapYear(date)
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2012, 6 /* Jul */, 2).getTime()
    var result = isLeapYear(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isLeapYear(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isLeapYear.bind(null, new Date(2012, 6 /* Jul */, 2), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isLeapYear.bind(null), TypeError)
  })
})
