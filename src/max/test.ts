// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import max from '.'

describe('max', function() {
  function isInvalidDate(dirtyDate: Date | number): boolean {
    return dirtyDate instanceof Date && isNaN(Number(dirtyDate))
  }

  it('returns the latest date', function() {
    const result = max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('accepts array with more than 2 entries', function() {
    const result = max([
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1995, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    ])
    assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2))
  })

  it('accepts timestamps', function() {
    const result = max([
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    ])
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('returns `Invalid Date` if any given date is invalid', function() {
    const result = max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` if any given value is undefined', function() {
    const result = max([
      new Date(1989, 6 /* Jul */, 10),
      // @ts-expect-error
      undefined,
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` for empty array', function() {
    const result = max([])
    assert(isInvalidDate(result))
  })

  it('converts Array-like objects into Array', function() {
    // @ts-expect-error
    const result = max({
      '0': new Date(1989, 6 /* Jul */, 10),
      '1': new Date(1987, 1 /* Feb */, 11),
      length: 2
    })
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('converts iterable objects into Array', function() {
    const result = max(
      // @ts-expect-error
      new Set([
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ])
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('returns `Invalid Date` if given a non-iterable value', function() {
    // @ts-expect-error
    const result = max(undefined)
    assert(isInvalidDate(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(max.bind(null), TypeError)
  })
})
