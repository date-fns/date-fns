// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameHour from '.'

describe('utc/isSameHour', function () {
  it('returns true if the given dates have the same hour', function () {
    var result = isSameHour(
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 6, 0)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 6, 30))
    )
    assert(result === true)
  })

  it('returns false if the given dates have different hours', function () {
    var result = isSameHour(
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 6, 0)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 5, 0))
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameHour(
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 18, 0)).toISOString(),
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 18, 45)).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameHour(
      Date.UTC(2014, 8 /* Sep */, 4, 18, 0),
      Date.UTC(2014, 8 /* Sep */, 4, 18, 45)
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameHour(
      new Date(NaN),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameHour(
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function () {
    var result = isSameHour(
      new Date(NaN),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = isSameHour.bind(
      null,
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 6, 0)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4, 6, 30)),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(isSameHour.bind(null), TypeError)
    assert.throws(isSameHour.bind(null, 1), TypeError)
  })
})
