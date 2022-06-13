/* eslint-env mocha */

import assert from 'assert'
import setSeconds from './index'

describe('setSeconds', () => {
  it('sets the seconds', () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      45
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500)
    )
  })

  it('accepts a timestamp', () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(),
      45
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('converts a fractional number to an integer', () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      45.54
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500)
    )
  })

  it('implicitly converts number arguments', () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      // @ts-expect-error
      '45'
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500)
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setSeconds(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setSeconds.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setSeconds.bind(null, 1), TypeError)
  })
})
