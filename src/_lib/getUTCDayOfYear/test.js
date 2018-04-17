// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCDayOfYear from '.'

describe('getUTCDayOfYear', function () {
  it('returns the day of the year of the given date', function () {
    var result = getUTCDayOfYear(new Date(Date.UTC(2014, 6 /* Jul */, 2)))
    assert(result === 183)
  })

  it('accepts a string', function () {
    var result = getUTCDayOfYear(new Date(Date.UTC(2014, 0 /* Jan */, 2)).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getUTCDayOfYear(new Date(Date.UTC(2014, 0 /* Jan */, 2)).getTime())
    assert(result === 2)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(0, 11 /* Dec */, 31)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCDayOfYear(initialDate)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getUTCDayOfYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = getUTCDayOfYear.bind(null, new Date(2014, 6 /* Jul */, 2), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getUTCDayOfYear.bind(null), TypeError)
  })
})
