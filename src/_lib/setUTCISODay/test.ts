/* eslint-env mocha */

import assert from 'assert'
import setUTCISODay from '.'

describe('setUTCISODay', () => {
  it('sets the day of the ISO week', () => {
    const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 3)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('sets the day to Sunday of this ISO week if the index is 7', () => {
    const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 7)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  describe('the day index is more than 7', () => {
    it('sets the day of the next ISO week', () => {
      const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 8)
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 8)))
    })

    it('sets the day of another ISO week in the future', () => {
      const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 21)
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 21)))
    })
  })

  describe('the day index is less than 1', () => {
    it('sets the day of the last ISO week', () => {
      const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0)
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
    })

    it('set the day of another ISO week in the past', () => {
      const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -13)
      assert.deepStrictEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 18)))
    })
  })

  it('accepts a timestamp', () => {
    const result = setUTCISODay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)).getTime(),
      3
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('converts a fractional number to an integer', () => {
    const result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 3.33)
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('implicitly converts number arguments', () => {
    const result = setUTCISODay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      // @ts-expect-error
      '3'
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('does not mutate the original date', () => {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    setUTCISODay(date, 3)
    assert.deepStrictEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setUTCISODay(new Date(NaN), 3)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setUTCISODay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(setUTCISODay.bind(null, 1), TypeError)
  })
})
