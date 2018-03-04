// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setWeekYear from '.'

describe('setWeekYear', function () {
  it('sets the local week-numbering year, saving the week and the day of the week', function () {
    var result = setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004)
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 3))
  })

  it('accepts a string', function () {
    var result = setWeekYear(new Date(2008, 11 /* Dec */, 29).toISOString(), 2007)
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function () {
    var result = setWeekYear(new Date(2008, 11 /* Dec */, 29).getTime(), 2007)
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setWeekYear(new Date(2008, 11 /* Dec */, 29), '2007')
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2008, 11 /* Dec */, 29)
    setWeekYear(date, 2000)
    assert.deepEqual(date, new Date(2008, 11 /* Dec */, 29))
  })

  it('sets local week-numbering years less than 100', function () {
    var initialDate = new Date(2008, 11 /* Dec */, 29)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    var result = setWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(8, 11 /* Dec */, 29)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    var result = setWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setWeekYear(new Date(NaN), 2007)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setWeekYear(new Date(2008, 11 /* Dec */, 29), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(2010, 0 /* Jan */, 2)
    var result = setWeekYear(
      date,
      2004,
      {
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 1, firstWeekContainsDate: 4}
        }
      }
    )
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(2010, 0 /* Jan */, 2)
    var result = setWeekYear(
      date,
      2004,
      {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
        // $ExpectedMistake
        locale: {
          options: {weekStartsOn: 0, firstWeekContainsDate: 1}
        }
      }
    )
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // $ExpectedMistake
    var block = setWeekYear.bind(null, new Date(2004, 7 /* Aug */, 7), 2018, {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    // $ExpectedMistake
    var block = setWeekYear.bind(null, new Date(2004, 7 /* Aug */, 7), 2018, {firstWeekContainsDate: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setWeekYear.bind(null, new Date(2008, 11 /* Dec */, 29), 2007, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setWeekYear.bind(null), TypeError)
    assert.throws(setWeekYear.bind(null, 1), TypeError)
  })
})
