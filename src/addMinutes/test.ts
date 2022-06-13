/* eslint-env mocha */

import assert from 'assert'
import addMinutes from './index'

describe('addMinutes', () => {
  it('adds the given number of minutes', () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('accepts a timestamp', () => {
    const result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20))
  })

  it('converts a fractional number to an integer', () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30.99)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('implicitly converts number arguments', () => {
    const result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 5),
      // @ts-expect-error
      '30'
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 35))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    addMinutes(date, 25)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addMinutes(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(addMinutes.bind(null), TypeError)

    // @ts-expect-error
    assert.throws(addMinutes.bind(null, 1), TypeError)
  })
})
