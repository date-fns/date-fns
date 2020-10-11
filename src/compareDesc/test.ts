// @flow
/* eslint-env mocha */

import assert from 'assert'
import compareDesc from '.'

describe('compareDesc', function() {
  it('returns 0 if the given dates are equal', function() {
    const result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 0)
  })

  it('returns 1 if the first date is before the second one', function() {
    const result = compareDesc(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 1)
  })

  it('returns -1 if the first date is after the second one', function() {
    const result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === -1)
  })

  it('sorts the dates array in the reverse chronological order when function is passed as the argument to Array.prototype.sort()', function() {
    const unsortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    ]

    const sortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ]

    unsortedArray.sort(compareDesc)
    const result = unsortedArray

    assert.deepStrictEqual(result, sortedArray)
  })

  it('accepts timestamps', function() {
    const result = compareDesc(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === 1)
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    const result = compareDesc(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    const result = compareDesc(new Date(1989, 6 /* Jul */, 10), new Date(NaN))
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    const result = compareDesc(new Date(1989, 6 /* Jul */, 10), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    //@ts-expect-error
    assert.throws(compareDesc.bind(null), TypeError)
    //@ts-expect-error
    assert.throws(compareDesc.bind(null, 1), TypeError)
  })
})
