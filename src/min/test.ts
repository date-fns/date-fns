// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import min from '.'

describe('min', function() {
  function isInvalidDate(dirtyDate) {
    return dirtyDate instanceof Date && isNaN(dirtyDate)
  }

  it('returns the earliest date', function() {
    var result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('accepts array with more than 2 entries', function() {
    var result = min([
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    ])
    assert.deepEqual(result, new Date(1985, 6 /* Jul */, 2))
  })

  it('accepts timestamps', function() {
    var result = min([
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    ])
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('returns `Invalid Date` if any given date is invalid', function() {
    var result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` if any given value is undefined', function() {
    var result = min([
      new Date(1989, 6 /* Jul */, 10),
      // $ExpectedMistake
      undefined,
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` for empty array', function() {
    var result = min([])
    assert(isInvalidDate(result))
  })

  it('converts Array-like objects into Array', function() {
    // $ExpectedMistake
    var result = min({
      '0': new Date(1989, 6 /* Jul */, 10),
      '1': new Date(1987, 1 /* Feb */, 11),
      length: 2
    })
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('converts iterable objects into Array', function() {
    var result = min(
      // $ExpectedMistake
      new Set([
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ])
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('returns `Invalid Date` if given a non-iterable value', function() {
    // $ExpectedMistake
    var result = min(undefined)
    assert(isInvalidDate(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(min.bind(null), TypeError)
  })
})
