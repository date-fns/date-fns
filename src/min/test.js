// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import min from '.'

describe('min', function () {
  it('returns the earliest date', function () {
    var result = min(
      [
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ]
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('allows to pass more than 2 arguments', function () {
    var result = min(
      [
        new Date(1987, 1 /* Feb */, 11),
        new Date(1989, 6 /* Jul */, 10),
        new Date(1985, 6 /* Jul */, 2),
        new Date(1990, 0 /* Jan */, 1)
      ]
    )
    assert.deepEqual(result, new Date(1985, 6 /* Jul */, 2))
  })

  it('accepts strings', function () {
    var result = min(
      [
        new Date(1987, 1 /* Feb */, 11).toISOString(),
        new Date(1989, 6 /* Jul */, 10).toISOString()
      ]
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('accepts timestamps', function () {
    var result = min(
      [
        new Date(1989, 6 /* Jul */, 10).getTime(),
        new Date(1987, 1 /* Feb */, 11).getTime()
      ]
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('returns `Invalid Date` if any given date is invalid', function () {
    var result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any given value is undefined', function () {
    var result = min([
      new Date(1989, 6 /* Jul */, 10),
      // $ExpectedMistake
      undefined,
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns undefined for empty array', function () {
    var result = min([])
    assert(result === undefined)
  })

  it('converts Array-like objects into Array', function () {
    // $ExpectedMistake
    var result = min({
      '0': new Date(1989, 6 /* Jul */, 10),
      '1': new Date(1987, 1 /* Feb */, 11),
      length: 2
    })
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('converts undefined into empty array', function () {
    // $ExpectedMistake
    var result = min(undefined)
    assert(result === undefined)
  })

  it('converts null into empty array', function () {
    // $ExpectedMistake
    var result = min(null)
    assert(result === undefined)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var block = min.bind(
      null,
      [
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ],
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(min.bind(null), TypeError)
  })
})
