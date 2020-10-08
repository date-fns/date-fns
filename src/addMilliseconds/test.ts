// @flow
/* eslint-env mocha */

import assert from 'assert'
import addMilliseconds from '.'

describe('addMilliseconds', function() {
  it('adds the given number of milliseconds', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750)
    )
  })

  it('accepts a timestamp', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500)
    )
  })

  it('converts a fractional number to an integer', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750.75
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750)
    )
  })

  it('implicitly converts number arguments', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 5),
      //@ts-expect-error
      '750'
    )
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 755)
    )
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    addMilliseconds(date, 250)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addMilliseconds(new Date(NaN), 750)
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      NaN
    )
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    //@ts-expect-error
    assert.throws(addMilliseconds.bind(null), TypeError)
    //@ts-expect-error
    assert.throws(addMilliseconds.bind(null, 1), TypeError)
  })
})
