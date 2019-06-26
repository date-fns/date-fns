// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCWeekOfMonth from '.'

describe('getUTCWeekOfMonth', function() {
  it('returns the local week of month for the given date', function() {
    var result = getUTCWeekOfMonth(new Date(Date.UTC(2019, 0 /* Jan */, 2)))
    assert(result === 1)
  })

  it('accepts a timestamp', function() {
    var result = getUTCWeekOfMonth(Date.UTC(2019, 11 /* Dec */, 29))
    assert(result === 5)
  })

  it('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(7, 11 /* Dec */, 30)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCWeekOfMonth(initialDate)
    assert(result === 6)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getUTCWeekOfMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function() {
    var date = new Date(Date.UTC(2004, 11 /* Jan */, 31))
    var result = getUTCWeekOfMonth(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 }
      }
    })
    assert(result === 5)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = new Date(Date.UTC(2005, 0 /* Jan */, 2))
    var result = getUTCWeekOfMonth(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
      }
    })
    assert(result === 2)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    var block = getUTCWeekOfMonth.bind(null, new Date(2007, 11 /* Dec */, 31), {
      weekStartsOn: NaN
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getUTCWeekOfMonth.bind(null), TypeError)
  })
})
