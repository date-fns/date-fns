// @flow
/* eslint-env mocha */

import assert from 'assert'
import addSeconds from '.'

describe('addSeconds', function() {
  it('adds the given number of seconds', function() {
    const result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('accepts a timestamp', function() {
    const result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20))
  })

  it('converts a fractional number to an integer', function() {
    const result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0),
      30.777
    )
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 5), '30')
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 35))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    addSeconds(date, 15)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addSeconds(new Date(NaN), 30)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addSeconds.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addSeconds.bind(null, 1), TypeError)
  })
})
