// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFriday from '.'

describe('isFriday', function () {
  it('returns true if the given date is Friday', function () {
    var result = isFriday(new Date(2014, 8 /* Sep */, 26))
    assert(result === true)
  })

  it('returns false if the given date is not Friday', function () {
    var result = isFriday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isFriday(new Date(2014, 6 /* Jul */, 11).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isFriday(new Date(2014, 1 /* Feb */, 14).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isFriday(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isFriday.bind(null, new Date(2014, 8 /* Sep */, 26), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isFriday.bind(null), TypeError)
  })
})
