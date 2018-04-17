// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCISOWeekYear from '.'

describe('getUTCISOWeekYear', function () {
  it('returns the ISO week-numbering year of the given date', function () {
    var result = getUTCISOWeekYear(new Date(Date.UTC(2007, 11 /* Dec */, 31)))
    assert(result === 2008)
  })

  it('accepts a string', function () {
    var result = getUTCISOWeekYear(new Date(Date.UTC(2005, 0 /* Jan */, 1)).toISOString())
    assert(result === 2004)
  })

  it('accepts a timestamp', function () {
    var result = getUTCISOWeekYear(new Date(Date.UTC(2005, 0 /* Jan */, 1)).getTime())
    assert(result === 2004)
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(7, 11 /* Dec */, 31)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCISOWeekYear(initialDate)
    assert(result === 8)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getUTCISOWeekYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = getUTCISOWeekYear.bind(null, new Date(2007, 11 /* Dec */, 31), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(getUTCISOWeekYear.bind(null), TypeError)
  })
})
