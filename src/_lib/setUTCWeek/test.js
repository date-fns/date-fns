// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setUTCWeek from '.'

describe('setUTCWeek', function () {
  it('sets the local week', function () {
    var result = setUTCWeek(new Date(Date.UTC(2005, 0 /* Jan */, 2)), 1)
    assert.deepEqual(result, new Date(Date.UTC(2004, 11 /* Dec */, 26)))
  })

  it('accepts a string', function () {
    var result = setUTCWeek(new Date(Date.UTC(2009, 11 /* Dec */, 2)).toISOString(), 1)
    assert.deepEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 31)))
  })

  it('accepts a timestamp', function () {
    var result = setUTCWeek(Date.UTC(2009, 11 /* Dec */, 2), 1)
    assert.deepEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 31)))
  })

  it('implicitly converts number arguments', function () {
    var result = setUTCWeek(new Date(Date.UTC(2004, 7 /* Aug */, 7)), '53')
    assert.deepEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    setUTCWeek(date, 52)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(4, 0 /* Jan */, 4)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(4, 11 /* Dec */, 19)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = setUTCWeek(initialDate, 52)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setUTCWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setUTCWeek(new Date(2004, 7 /* Aug */, 7), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(Date.UTC(2005, 0 /* Jan */, 2))
    var result = setUTCWeek(
      date,
      1,
      {
        locale: {
          options: {weekStartsOn: 1, firstWeekContainsDate: 4}
        }
      }
    )
    assert.deepEqual(result, new Date(Date.UTC(2004, 0 /* Jan */, 4)))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(Date.UTC(2005, 0 /* Jan */, 2))
    var result = setUTCWeek(
      date,
      1,
      {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
        locale: {
          options: {weekStartsOn: 0, firstWeekContainsDate: 1}
        }
      }
    )
    assert.deepEqual(result, new Date(Date.UTC(2004, 0 /* Jan */, 4)))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    var block = setUTCWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    var block = setUTCWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {firstWeekContainsDate: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var block = setUTCWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setUTCWeek.bind(null), TypeError)
    assert.throws(setUTCWeek.bind(null, 1), TypeError)
  })
})
