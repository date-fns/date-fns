/* eslint-env mocha */

import assert from 'assert'
import getWeekOfMonth from '.'

describe('getWeekOfMonth', () => {
  it('returns the week of the month of the given date', () => {
    var result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 15))
    assert(result === 3)
  })

  describe('edge cases', () => {
    describe('when the given day is the first of a month', () => {
      it('returns the week of the month of the given date', () => {
        var result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 1))
        assert(result === 1)
      })
    })

    describe('when the given day is the last of a month #1', () => {
      it('returns the week of the month of the given date', () => {
        var result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 30))
        assert(result === 5)
      })
    })

    describe('when the given day is the last of a month #2', () => {
      it('returns the week of the month of the given date', () => {
        var result = getWeekOfMonth(new Date(2017, 9 /* Oct */, 31))
        assert(result === 5)
      })
    })
  })

  it('allows to specify which day is the first day of the week', () => {
    var result = getWeekOfMonth(new Date(2017, 9 /* Oct */, 1), {
      weekStartsOn: 1,
    })
    assert(result === 1)
  })

  it('allows to specify which day is the first day of the week in locale', () => {
    var result = getWeekOfMonth(new Date(2017, 9 /* Oct */, 31), {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1 },
      },
    })
    assert(result === 6)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    var result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 13), {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0 },
      },
    })
    assert(result === 3)
  })

  it('accepts a timestamp', () => {
    var result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 1).getTime())
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', () => {
    var result = getWeekOfMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('returns the week of the month of the given date, when the given date is Sunday', () => {
    var result = getWeekOfMonth(new Date(2019, 4 /* May */, 5), {
      weekStartsOn: 1,
    })
    assert(result === 1)
  })
})
