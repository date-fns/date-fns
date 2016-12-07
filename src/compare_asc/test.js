// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import compareAsc from '.'

describe('compareAsc', function () {
  it('returns 0 if the given dates are equal', function () {
    var result = compareAsc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 0)
  })

  it('returns -1 if the first date is before the second one', function () {
    var result = compareAsc(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === -1)
  })

  it('returns 1 if the first date is after the second one', function () {
    var result = compareAsc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === 1)
  })

  it('sorts the dates array in the chronological order when function is passed as the argument to Array.prototype.sort()', function () {
    var unsortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    ]

    var sortedArray = [
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1995, 6 /* Jul */, 2)
    ]

    var result = unsortedArray.sort(compareAsc)

    assert.deepEqual(result, sortedArray)
  })

  it('accepts strings', function () {
    var result = compareAsc(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    assert(result === -1)
  })

  it('accepts timestamps', function () {
    var result = compareAsc(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === -1)
  })
})
