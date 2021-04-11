// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFirstDayOfMonth from '.'

describe('isFirstDayOfMonth', function() {
  it('returns true if the given date is in the last day of month', function() {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', function() {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const date = new Date(2014, 9 /* Oct */, 1).getTime()
    const result = isFirstDayOfMonth(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isFirstDayOfMonth(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isFirstDayOfMonth.bind(null), TypeError)
  })
})
