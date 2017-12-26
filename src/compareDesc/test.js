// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import compareDesc from '.'

describe('compareDesc', function () {
  it('returns 0 if the given dates are equal', function () {
    var result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 0)
  })

  it('returns 1 if the first date is before the second one', function () {
    var result = compareDesc(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 1)
  })

  it('returns -1 if the first date is after the second one', function () {
    var result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === -1)
  })

  it('sorts the dates array in the reverse chronological order when function is passed as the argument to Array.prototype.sort()', function () {
    var unsortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    ]

    var sortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ]

    var result = unsortedArray.sort(compareDesc)

    assert.deepEqual(result, sortedArray)
  })

  it('accepts strings', function () {
    var result = compareDesc(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    assert(result === 1)
  })

  it('accepts timestamps', function () {
    var result = compareDesc(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === 1)
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    var result = compareDesc(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    var result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    var result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = compareDesc.bind(
      null,
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(compareDesc.bind(null), TypeError)
    assert.throws(compareDesc.bind(null, 1), TypeError)
  })
})
