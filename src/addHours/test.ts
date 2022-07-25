/* eslint-env mocha */

import assert from 'assert'
import addHours from './index'

describe('addHours', () => {
  it('adds the given numbers of hours', () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('accepts a timestamp', () => {
    const result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(),
      26
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 12, 1, 0))
  })

  it('converts a fractional number to an integer', () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2.5)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('implicitly converts number arguments', () => {
    const result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0),
      // @ts-expect-error
      '2'
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    addHours(date, 10)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addHours(new Date(NaN), 2)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(addHours.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addHours.bind(null, 1), TypeError)
  })
})
