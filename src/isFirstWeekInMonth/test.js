// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFirstWeekOfMonth from '.'

describe('isFirstWeekOfMonth', function () {
  it('returns true if the given date is in the first week of month - 1', function () {
    var result = isFirstWeekOfMonth(new Date(2017, 10 /* Nov */, 1))
    assert(result === true)
  })

  it('returns true if the given date is in the first week of month - 2', function () {
    var result = isFirstWeekOfMonth(new Date(2017, 9 /* Oct */, 30))
    assert(result === true)
  })

  it('returns false if the given date is not in the first week of month', function () {
    var result = isFirstWeekOfMonth(new Date(2017, 10 /* Nov */, 6))
    assert(result === false)
  })

  it('accepts a string', function () {
    var date = new Date(2017, 9 /* Oct */, 30).toISOString()
    var result = isFirstWeekOfMonth(date)
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2017, 9 /* Oct */, 30).getTime()
    var result = isFirstWeekOfMonth(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isFirstWeekOfMonth(new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = isFirstWeekOfMonth.bind(null, new Date(2017, 9 /* Oct */, 30), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isFirstWeekOfMonth.bind(null), TypeError)
  })
})
