// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameMonth from '.'

describe('isSameMonth', function () {
  it('returns true if the given dates have the same month (and year)', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different months', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameMonth(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameMonth(
      new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function () {
    var result = isSameMonth(
      new Date(NaN),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = isSameMonth.bind(
      null,
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(isSameMonth.bind(null), TypeError)
    assert.throws(isSameMonth.bind(null, 1), TypeError)
  })
})
