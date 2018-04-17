// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setWeek from '.'

describe('setWeek', function () {
  it('sets the local week', function () {
    var result = setWeek(new Date(2005, 0 /* Jan */, 2), 1)
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26))
  })

  it('accepts a string', function () {
    var result = setWeek(new Date(2009, 11 /* Dec */, 2).toISOString(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function () {
    var result = setWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setWeek(new Date(2004, 7 /* Aug */, 7), '53')
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    setWeek(date, 52)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(4, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(4, 11 /* Dec */, 19)
    expectedResult.setHours(0, 0, 0, 0)
    var result = setWeek(initialDate, 52)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setWeek(new Date(2004, 7 /* Aug */, 7), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(2005, 0 /* Jan */, 2)
    var result = setWeek(
      date,
      1,
      {
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 1, firstWeekContainsDate: 4}
        }
      }
    )
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 4))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2005, 0 /* Jan */, 2)
    var result = setWeek(
      date,
      1,
      {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 0, firstWeekContainsDate: 1}
        }
      }
    )
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 4))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // $ExpectedMistake
    var block = setWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    // $ExpectedMistake
    var block = setWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {firstWeekContainsDate: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setWeek.bind(null), TypeError)
    assert.throws(setWeek.bind(null, 1), TypeError)
  })
})
