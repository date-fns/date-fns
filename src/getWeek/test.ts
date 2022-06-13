/* eslint-env mocha */

import assert from 'assert'
import getWeek from './index'

describe('getWeek', () => {
  it('returns the local week of year of the given date', () => {
    const result = getWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 2)
  })

  it('accepts a timestamp', () => {
    const result = getWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const result = getWeek(initialDate)
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getWeek(new Date(NaN))
    assert(isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', () => {
    const date = new Date(2005, 0 /* Jan */, 2)
    const result = getWeek(date, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    })
    assert(result === 53)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const date = new Date(2005, 0 /* Jan */, 2)
    const result = getWeek(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    })
    assert(result === 53)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      getWeek(new Date(2007, 11 /* Dec */, 31), {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', () => {
    const block = () =>
      getWeek(new Date(2007, 11 /* Dec */, 31), {
        // @ts-expect-error
        firstWeekContainsDate: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getWeek.bind(null), TypeError)
  })
})
