// @flow
/* eslint-env mocha */

import assert from 'assert'
import addMinutes from '.'

describe('addMinutes', function() {
  it('adds the given number of minutes', function() {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('accepts a timestamp', function() {
    const result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20))
  })

  it('converts a fractional number to an integer', function() {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30.99)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 5), '30')
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 35))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    addMinutes(date, 25)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addMinutes(new Date(NaN), 30)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addMinutes.bind(null), TypeError)

    // @ts-expect-error
    assert.throws(addMinutes.bind(null, 1), TypeError)
  })
})
