// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var isEqual = require('./')

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
})
