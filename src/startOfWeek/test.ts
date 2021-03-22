// @flow
/* eslint-env mocha */

import assert from 'assert'
import startOfWeek from '.'

describe('startOfWeek', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('allows to specify which day is the first day of the week', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfWeek(date, { weekStartsOn: 1 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfWeek(date, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1 },
      },
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfWeek(date, {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0 },
      },
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('implicitly converts options', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // @ts-expect-error
    const result = startOfWeek(date, { weekStartsOn: '1' })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfWeek(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function () {
    describe('when the given day is before the start of a week', function () {
      it('it returns the start of a week', function () {
        const date = new Date(2014, 9 /* Oct */, 6)
        const result = startOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
      })
    })

    describe('when the given day is the start of a week', function () {
      it('it returns the start of a week', function () {
        const date = new Date(2014, 9 /* Oct */, 8)
        const result = startOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 8))
      })
    })

    describe('when the given day is after the start of a week', function () {
      it('it returns the start of a week', function () {
        const date = new Date(2014, 9 /* Oct */, 10)
        const result = startOfWeek(date, { weekStartsOn: 3 })
        assert.deepEqual(result, new Date(2014, 9 /* Oct */, 8))
      })
    })

    it('handles the week at the start of a year', function () {
      const date = new Date(2014, 0 /* Jan */, 1)
      const result = startOfWeek(date)
      assert.deepEqual(result, new Date(2013, 11 /* Dec */, 29))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = startOfWeek(new Date(NaN))
    assert(result instanceof Date && isNaN(Number(result)))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    const block = () =>
      startOfWeek(
        new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
        // @ts-expect-error
        { weekStartsOn: NaN }
      )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    // @ts-expect-error
    assert.throws(startOfWeek.bind(null), TypeError)
  })
})
