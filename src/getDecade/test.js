// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDecade from '.'

describe('getDecade', function () {
  it('returns the decade for a the given date', function () {
    var result = getDecade(new Date(1971, 10 /* Nov */, 8))
    assert(result === 1970)
  })

  it('accepts a string', function () {
    var result = getDecade(new Date(1983, 4 /* May */, 16).toISOString())
    assert(result === 1980)
  })

  it('accepts a timestamp', function () {
    var result = getDecade(new Date(1969, 6 /* Jul */, 20).getTime())
    assert(result === 1960)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getDecade(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var date = new Date(1998, 6 /* Jul */, 12, 0, 0, 0)
    // $ExpectedMistake
    var block = getDecade.bind(null, date, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getDecade.bind(null), TypeError)
  })
})
