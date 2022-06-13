/* eslint-env mocha */

import assert from 'assert'
import setMilliseconds from './index'

describe('setMilliseconds', () => {
  it('sets the milliseconds', () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300)
    )
  })

  it('accepts a timestamp', () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(),
      755
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755)
    )
  })

  it('converts a fractional number to an integer', () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300.999
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300)
    )
  })

  it('implicitly converts number arguments', () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      // @ts-expect-error
      '300'
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300)
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    setMilliseconds(date, 137)
    assert.deepStrictEqual(
      date,
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setMilliseconds(new Date(NaN), 300)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setMilliseconds.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setMilliseconds.bind(null, 1), TypeError)
  })
})
