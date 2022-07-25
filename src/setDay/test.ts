/* eslint-env mocha */

import assert from 'assert'
import setDay from './index'

describe('setDay', () => {
  it('sets the day of the week', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('allows to specify which day is the first day of the week', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: 1,
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('allows to specify which day is the first day of the week in locale', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1 },
      },
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0 },
      },
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('converts a fractional number to an integer', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0.5)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('implicitly converts options', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {
      // @ts-expect-error
      weekStartsOn: '1',
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('specifies Monday as the first day of the week', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 6), 1, {
      weekStartsOn: 1,
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('specifies Tuesday as the first day of the week', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 6), 1, {
      weekStartsOn: 2,
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  describe('the day index is more than 6', () => {
    it('sets the day of the next week', () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), 8)
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 8))
    })

    it('allows to specify which day is the first day of the week', () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), 7, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 8))
    })

    it('sets the day of another week in the future', () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), 14, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 15))
    })
  })

  describe('the day index is less than 0', () => {
    it('sets the day of the last week', () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), -6)
      assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 25))
    })

    it('allows to specify which day is the first day of the week', () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), -7, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 25))
    })

    it('set the day of another week in the past', () => {
      const result = setDay(new Date(2014, 8 /* Sep */, 1), -14, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
    })
  })

  it('accepts a timestamp', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1).getTime(), 3)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('implicitly converts number arguments', () => {
    const result = setDay(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '5'
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 5))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    setDay(date, 3)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setDay(new Date(NaN), 0)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setDay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      setDay(new Date(2014, 8 /* Sep */, 1), 0, {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setDay.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setDay.bind(null, 1), TypeError)
  })
})
