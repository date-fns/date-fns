// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isMonday from '.'

describe('isMonday', function () {
  it('returns true if the given date is Monday', function () {
    var result = isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('returns false if the given date is not Monday', function () {
    var result = isMonday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isMonday(new Date(2014, 6 /* Jul */, 7).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isMonday(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isMonday.bind(null, new Date(2014, 8 /* Sep */, 22), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isMonday.bind(null), TypeError)
  })
})
