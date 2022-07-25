/* eslint-env mocha */

import assert from 'assert'
import setDate from './index'

describe('setDate', () => {
  it('sets the day of the month', () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), 30)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a timestamp', () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 25))
  })

  it('converts a fractional number to an integer', () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), 30.3)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('implicitly converts number arguments', () => {
    const result = setDate(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '30'
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setDate(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setDate.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setDate.bind(null, 1), TypeError)
  })
})
