/* eslint-env mocha */

import assert from 'power-assert'
import getWeek from '.'

describe('getWeek', function () {
  it('returns the local week of year of the given date', function () {
    const result = getWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    const result = getWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })

  it('handles dates before 100 AD', function () {
    const initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const result = getWeek(initialDate)
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', function () {
    const result = getWeek(new Date(NaN))
    assert(isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    const date = new Date(2005, 0 /* Jan */, 2)
    // @ts-expect-error
    const result = getWeek(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 }
      }
    })
    assert(result === 53)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const date = new Date(2005, 0 /* Jan */, 2)
    const result = getWeek(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
      }
    })
    assert(result === 53)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // @ts-expect-error
    const block = getWeek.bind(null, new Date(2007, 11 /* Dec */, 31), {
      weekStartsOn: NaN
    })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    // @ts-expect-error
    const block = getWeek.bind(null, new Date(2007, 11 /* Dec */, 31), {
      firstWeekContainsDate: NaN
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getWeek.bind(null), TypeError)
  })
})
