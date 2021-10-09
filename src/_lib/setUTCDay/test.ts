// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import { Locale } from 'src/locale/types'
import setUTCDay from '.'

describe('setUTCDay', function () {
  it('sets the day of the week', function () {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0)
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('allows to specify which day is the first day of the week', function () {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      weekStartsOn: 1,
    })
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      locale: {
        options: { weekStartsOn: 1 },
      } as Locale,
    })
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      } as Locale,
    })
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  describe('the day index is more than 6', function () {
    it('sets the day of the next week', function () {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 8)
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 8)))
    })

    it('allows to specify which day is the first day of the week', function () {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 7, {
        weekStartsOn: 1,
      })
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 14)))
    })

    it('sets the day of another week in the future', function () {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 14, {
        weekStartsOn: 1,
      })
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 21)))
    })
  })

  describe('the day index is less than 0', function () {
    it('sets the day of the last week', function () {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -6)
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 25)))
    })

    it('allows to specify which day is the first day of the week', function () {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -7, {
        weekStartsOn: 1,
      })
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
    })

    it('set the day of another week in the past', function () {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -14, {
        weekStartsOn: 1,
      })
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 24)))
    })
  })

  it('accepts a timestamp', function () {
    const result = setUTCDay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)).getTime(),
      3
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('converts a fractional number to an integer', function () {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0.9)
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('implicitly converts number arguments', function () {
    const result = setUTCDay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      // @ts-expect-error
      '0'
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('implicitly converts options', function () {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      // @ts-expect-error
      weekStartsOn: '1',
    })
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('does not mutate the original date', function () {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    setUTCDay(date, 3)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = setUTCDay(new Date(NaN), 0)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = setUTCDay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    const block = setUTCDay.bind(null, new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: NaN as Day,
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(setUTCDay.bind(null, 1), TypeError)
  })
})
