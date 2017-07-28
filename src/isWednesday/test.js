// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWednesday from '.'

describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if the given date is not Wednesday', function () {
    var result = isWednesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWednesday(new Date(2014, 6 /* Jul */, 9).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isWednesday(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isWednesday.bind(null, new Date(2014, 8 /* Sep */, 24), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isWednesday.bind(null), TypeError)
  })
})
