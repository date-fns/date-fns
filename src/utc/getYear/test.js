// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getYear from '.'

describe('utc/getYear', function () {
  it('returns the year of the given date', function () {
    var result = getYear(new Date(Date.UTC(2014, 6 /* Jul */, 2)))
    assert(result === 2014)
  })

  it('accepts a string', function () {
    var result = getYear(new Date(Date.UTC(700, 6 /* Jul */, 2)).toISOString())
    assert(result === 700)
  })

  it('accepts a timestamp', function () {
    var result = getYear(Date.UTC(20000, 3 /* Apr */, 2))
    assert(result === 20000)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getYear.bind(null, new Date(Date.UTC(2014, 6 /* Jul */, 2)), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getYear.bind(null), TypeError)
  })
})
