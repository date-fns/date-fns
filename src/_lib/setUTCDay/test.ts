/* eslint-env mocha */

import assert from 'assert'
import setUTCDay from '.'

describe('setUTCDay', () => {
  it('sets the day of the week', () => {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('allows to specify which day is the first day of the week', () => {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      weekStartsOn: 1,
    })
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('allows to specify which day is the first day of the week in locale', () => {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1 },
      },
    })
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      weekStartsOn: 1,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0 },
      },
    })
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  describe('the day index is more than 6', () => {
    it('sets the day of the next week', () => {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 8)
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 8)))
    })

    it('allows to specify which day is the first day of the week', () => {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 7, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 14)))
    })

    it('sets the day of another week in the future', () => {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 14, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 21)))
    })
  })

  describe('the day index is less than 0', () => {
    it('sets the day of the last week', () => {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -6)
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 25)))
    })

    it('allows to specify which day is the first day of the week', () => {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -7, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
    })

    it('set the day of another week in the past', () => {
      const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -14, {
        weekStartsOn: 1,
      })
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 24)))
    })
  })

  it('accepts a timestamp', () => {
    const result = setUTCDay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)).getTime(),
      3
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('converts a fractional number to an integer', () => {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0.9)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('implicitly converts number arguments', () => {
    const result = setUTCDay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      // @ts-expect-error
      '0'
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('implicitly converts options', () => {
    const result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {
      // @ts-expect-error
      weekStartsOn: '1',
    })
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('does not mutate the original date', () => {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    setUTCDay(date, 3)
    assert.deepStrictEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setUTCDay(new Date(NaN), 0)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setUTCDay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      setUTCDay(new Date(2014, 8 /* Sep */, 1), 0, {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(setUTCDay.bind(null, 1), TypeError)
  })
})
