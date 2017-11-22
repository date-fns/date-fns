// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameISOWeek from '.'

describe('utc/isSameISOWeek', function () {
  it('returns true if the given dates have the same ISO week', function () {
    var result = isSameISOWeek(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      new Date(Date.UTC(2014, 8 /* Sep */, 7))
    )
    assert(result === true)
  })

  it('returns false if the given dates have different ISO weeks', function () {
    var result = isSameISOWeek(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      new Date(Date.UTC(2014, 8 /* Sep */, 14))
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameISOWeek(
      new Date(Date.UTC(2014, 5 /* Jun */, 30)).toISOString(),
      new Date(Date.UTC(2014, 6 /* Jul */, 2)).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameISOWeek(
      Date.UTC(2014, 5 /* Jun */, 30),
      Date.UTC(2014, 6 /* Jul */, 2)
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameISOWeek(
      new Date(NaN),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameISOWeek(
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function () {
    var result = isSameISOWeek(
      new Date(NaN),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = isSameISOWeek.bind(
      null,
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      new Date(Date.UTC(2014, 8 /* Sep */, 7)),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(isSameISOWeek.bind(null), TypeError)
    assert.throws(isSameISOWeek.bind(null, 1), TypeError)
  })
})
