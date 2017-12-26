// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMonth from '.'

describe('getMonth', function () {
  it('returns the month of the given date', function () {
    var result = getMonth(new Date(2012, 1 /* Feb */, 29))
    assert(result === 1)
  })

  it('accepts a string', function () {
    var result = getMonth(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 6)
  })

  it('accepts a timestamp', function () {
    var result = getMonth(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 3)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getMonth.bind(null, new Date(2012, 1 /* Feb */, 29), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getMonth.bind(null), TypeError)
  })
})
