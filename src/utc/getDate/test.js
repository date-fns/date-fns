// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDate from '.'

describe('utc/getDate', function () {
  it('returns the day of the month of the given date', function () {
    var result = getDate(new Date(Date.UTC(2012, 1 /* Feb */, 29)))
    assert(result === 29)
  })

  it('accepts a string', function () {
    var result = getDate(new Date(Date.UTC(2014, 6 /* Jul */, 2)).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getDate(Date.UTC(2014, 11 /* Dec */, 31))
    assert(result === 31)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getDate(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getDate.bind(null, new Date(Date.UTC(2012, 1 /* Feb */, 29)), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getDate.bind(null), TypeError)
  })
})
