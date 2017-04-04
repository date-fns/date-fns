// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isEqual from '.'

describe('isEqual', function () {
  it('returns true if the given dates are equal', function () {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('returns false if the given dates are not equal', function () {
    var result = isEqual(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1987, 1 /* Feb */, 11).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isEqual(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isEqual(
      new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })
})
