/* eslint-env mocha */

import assert from 'assert'
import setMinutes from './index'

describe('setMinutes', () => {
  it('sets the minutes', () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('accepts a timestamp', () => {
    const result = setMinutes(
      new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(),
      5
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 5))
  })

  it('converts a fractional number to an integer', () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45.54)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('implicitly converts number arguments', () => {
    const result = setMinutes(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40),
      // @ts-expect-error
      '45'
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30)
    setMinutes(date, 15)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setMinutes(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setMinutes.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setMinutes.bind(null, 1), TypeError)
  })
})
