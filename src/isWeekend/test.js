// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWeekend from '.'

describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('returns false if the given date is not in a weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 6))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isWeekend(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isWeekend.bind(null, new Date(2014, 9 /* Oct */, 5), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isWeekend.bind(null), TypeError)
  })
})
