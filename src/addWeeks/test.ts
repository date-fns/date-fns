/* eslint-env mocha */

import assert from 'assert'
import addWeeks from './index'

describe('addWeeks', () => {
  it('adds the given number of weeks', () => {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('accepts a timestamp', () => {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('converts a fractional number to an integer', () => {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4.95)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('implicitly converts number arguments', () => {
    const result = addWeeks(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '4'
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    addWeeks(date, 2)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addWeeks(new Date(NaN), 4)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(addWeeks.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addWeeks.bind(null, 1), TypeError)
  })
})
