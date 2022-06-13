/* eslint-env mocha */

import assert from 'assert'
import subWeeks from './index'

describe('subWeeks', () => {
  it('subtracts the given number of weeks', () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('accepts a timestamp', () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 25))
  })

  it('converts a fractional number to an integer', () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4.2)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('implicitly converts number arguments', () => {
    const result = subWeeks(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '4'
    )
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    subWeeks(date, 2)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subWeeks(new Date(NaN), 4)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(subWeeks.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(subWeeks.bind(null, 1), TypeError)
  })
})
