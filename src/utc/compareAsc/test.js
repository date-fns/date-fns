// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import compareAsc from '.'

describe('utc/compareAsc', function () {
  it('returns 0 if the given dates are equal', function () {
    var result = compareAsc(
      new Date(Date.UTC(1989, 6 /* Jul */, 10)),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(result === 0)
  })

  it('returns -1 if the first date is before the second one', function () {
    var result = compareAsc(
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(result === -1)
  })

  it('returns 1 if the first date is after the second one', function () {
    var result = compareAsc(
      new Date(Date.UTC(1989, 6 /* Jul */, 10)),
      new Date(Date.UTC(1987, 1 /* Feb */, 11))
    )
    assert(result === 1)
  })

  it('sorts the dates array in the chronological order when function is passed as the argument to Array.prototype.sort()', function () {
    var unsortedArray = [
      new Date(Date.UTC(1995, 6 /* Jul */, 2)),
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    ]

    var sortedArray = [
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(Date.UTC(1989, 6 /* Jul */, 10)),
      new Date(Date.UTC(1995, 6 /* Jul */, 2))
    ]

    var result = unsortedArray.sort(compareAsc)

    assert.deepEqual(result, sortedArray)
  })

  it('accepts strings', function () {
    var result = compareAsc(
      new Date(Date.UTC(1987, 1 /* Feb */, 11)).toISOString(),
      new Date(Date.UTC(1989, 6 /* Jul */, 10)).toISOString()
    )
    assert(result === -1)
  })

  it('accepts timestamps', function () {
    var result = compareAsc(
      Date.UTC(1987, 1 /* Feb */, 11),
      Date.UTC(1989, 6 /* Jul */, 10)
    )
    assert(result === -1)
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = compareAsc(
      new Date(NaN),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = compareAsc(
      new Date(Date.UTC(1989, 6 /* Jul */, 10)),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = compareAsc(
      new Date(NaN),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = compareAsc.bind(
      null,
      new Date(Date.UTC(1989, 6 /* Jul */, 10)),
      new Date(Date.UTC(1989, 6 /* Jul */, 10)),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(compareAsc.bind(null), TypeError)
    assert.throws(compareAsc.bind(null, 1), TypeError)
  })
})
