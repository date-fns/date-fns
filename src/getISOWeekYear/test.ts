// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getISOWeekYear from '.'

describe('getISOWeekYear', function() {
  it('returns the ISO week-numbering year of the given date', function() {
    const result = getISOWeekYear(new Date(2007, 11 /* Dec */, 31))
    assert(result === 2008)
  })

  it('accepts a timestamp', function() {
    const result = getISOWeekYear(new Date(2005, 0 /* Jan */, 1).getTime())
    assert(result === 2004)
  })

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const result = getISOWeekYear(initialDate)
    assert(result === 8)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getISOWeekYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getISOWeekYear.bind(null), TypeError)
  })
})
