// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subMilliseconds from '.'

describe('subMilliseconds', function() {
  it('subtracts the given number of milliseconds', function() {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('accepts a timestamp', function() {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('converts a fractional number to an integer', function() {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750.75
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('implicitly converts number arguments', function() {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      // $ExpectedMistake
      // @ts-expect-error
      '750'
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    subMilliseconds(date, 250)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = subMilliseconds(new Date(NaN), 750)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      NaN
    )
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subMilliseconds.bind(null), TypeError)
    assert.throws(subMilliseconds.bind(null, 1), TypeError)
  })
})
