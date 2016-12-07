// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isBefore from '.'

describe('isBefore', function () {
  it('returns true if the first date is before the second one', function () {
    var result = isBefore(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === true)
  })

  it('returns false if the first date is after the second one', function () {
    var result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === false)
  })

  it('returns false if the first date is equal to the second one', function () {
    var result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isBefore(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isBefore(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === true)
  })
})
