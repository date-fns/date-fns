// @flow
/* eslint-env mocha */

import assert from 'assert'
import min from '.'

describe('min', () => {
  const isInvalidDate = (dirtyDate: Date): boolean => {
    return dirtyDate instanceof Date && isNaN(dirtyDate.getDate())
  }

  it('returns the earliest date', () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    ])
    assert.deepStrictEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('accepts array with more than 2 entries', () => {
    const result = min([
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1),
    ])
    assert.deepStrictEqual(result, new Date(1985, 6 /* Jul */, 2))
  })

  it('accepts timestamps', () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime(),
    ])
    assert.deepStrictEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('returns `Invalid Date` if any given date is invalid', () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11),
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` if any given value is undefined', () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      // @ts-expect-error
      undefined,
      new Date(1987, 1 /* Feb */, 11),
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` for empty array', () => {
    const result = min([])
    assert(isInvalidDate(result))
  })

  it('converts Array-like objects into Array', () => {
    // @ts-expect-error
    const result = min({
      '0': new Date(1989, 6 /* Jul */, 10),
      '1': new Date(1987, 1 /* Feb */, 11),
      length: 2,
    })
    assert.deepStrictEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('converts iterable objects into Array', () => {
    const result = min(
      // @ts-expect-error
      new Set([
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11),
      ])
    )
    assert.deepStrictEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('returns `Invalid Date` if given a non-iterable value', () => {
    // @ts-expect-error
    const result = min(undefined)
    assert(isInvalidDate(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(min.bind(null), TypeError)
  })
})
