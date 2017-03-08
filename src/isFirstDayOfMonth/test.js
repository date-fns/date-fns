// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFirstDayOfMonth from '.'

describe('isFirstDayOfMonth', function () {
  it('returns true if the given date is in the last day of month', function () {
    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', function () {
    var result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2))
    assert(result === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 9 /* Oct */, 1).toISOString()
    var result = isFirstDayOfMonth(date)
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 9 /* Oct */, 1).getTime()
    var result = isFirstDayOfMonth(date)
    assert(result === true)
  })
})
