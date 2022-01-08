/* eslint-env mocha */

import assert from 'assert'
import getISOWeekYear from '.'

describe('getISOWeekYear', () => {
  it('returns the ISO week-numbering year of the given date', () => {
    const result = getISOWeekYear(new Date(2007, 11 /* Dec */, 31))
    assert(result === 2008)
  })

  it('accepts a timestamp', () => {
    const result = getISOWeekYear(new Date(2005, 0 /* Jan */, 1).getTime())
    assert(result === 2004)
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const result = getISOWeekYear(initialDate)
    assert(result === 8)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getISOWeekYear(new Date(NaN))
    assert(isNaN(result))
  })
})
