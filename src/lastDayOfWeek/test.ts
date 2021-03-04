// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfWeek from '.'

describe('lastDayOfWeek', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a week', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 6))
  })

  it('allows to specify which day is the first day of the week', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfWeek(date, { weekStartsOn: 1 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfWeek(date, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1 },
      },
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfWeek(date, {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0 },
      },
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('implicitly converts options', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // @ts-expect-error
    const result = lastDayOfWeek(date, { weekStartsOn: '1' })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('accepts a timestamp', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = lastDayOfWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 6))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function () {
    describe('when the given day is before the start of a week', function () {
      it('it returns the last day of a week', function () {
        const date = new Date(2014, 9 /* Oct */, 6)
        const result = lastDayOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 7))
      })
    })

    describe('when the given day is the start of a week', function () {
      it('it returns the last day of a week', function () {
        const date = new Date(2014, 9 /* Oct */, 8)
        const result = lastDayOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14))
      })
    })

    describe('when the given day is after the start of a week', function () {
      it('it returns the last day of a week', function () {
        const date = new Date(2014, 9 /* Oct */, 10)
        const result = lastDayOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14))
      })
    })

    it('handles the week at the end of a year', function () {
      const date = new Date(2014, 11 /* Dec */, 29)
      const result = lastDayOfWeek(date, { weekStartsOn: 5 })
      assert.deepEqual(result, new Date(2015, 0 /* Jan */, 1))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = lastDayOfWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    const block = lastDayOfWeek.bind(
      null,
      new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(lastDayOfWeek.bind(null), TypeError)
  })
})
