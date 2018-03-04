// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCWeek from '.'

describe('getUTCWeek', function () {
  it('returns the local week of year of the given date', function () {
    var result = getUTCWeek(new Date(Date.UTC(2005, 0 /* Jan */, 2)))
    assert(result === 2)
  })

  it('accepts a string', function () {
    var result = getUTCWeek(new Date(Date.UTC(2008, 11 /* Dec */, 29)).toISOString())
    assert(result === 1)
  })

  it('accepts a timestamp', function () {
    var result = getUTCWeek(Date.UTC(2008, 11 /* Dec */, 29))
    assert(result === 1)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(7, 11 /* Dec */, 30)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCWeek(initialDate)
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getUTCWeek(new Date(NaN))
    assert(isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    var date = new Date(Date.UTC(2005, 0 /* Jan */, 2))
    var result = getUTCWeek(
      date,
      {
        locale: {
          options: {weekStartsOn: 1, firstWeekContainsDate: 4}
        }
      }
    )
    assert(result === 53)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var date = new Date(Date.UTC(2005, 0 /* Jan */, 2))
    var result = getUTCWeek(
      date,
      {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
        locale: {
          options: {weekStartsOn: 0, firstWeekContainsDate: 1}
        }
      }
    )
    assert(result === 53)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    var block = getUTCWeek.bind(null, new Date(2007, 11 /* Dec */, 31), {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    var block = getUTCWeek.bind(null, new Date(2007, 11 /* Dec */, 31), {firstWeekContainsDate: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = getUTCWeek.bind(null, new Date(2005, 0 /* Jan */, 2), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getUTCWeek.bind(null), TypeError)
  })
})
