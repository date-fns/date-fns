// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getHours from '.'

describe('getHours', function () {
  it('returns the hours of the given date', function () {
    var result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    assert(result === 11)
  })

  it('accepts a string', function () {
    var result = getHours(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    assert(result === 5)
  })

  it('accepts a timestamp', function () {
    var result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 23)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getHours(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getHours.bind(null, new Date(2012, 1 /* Feb */, 29, 11, 45), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getHours.bind(null), TypeError)
  })
})
