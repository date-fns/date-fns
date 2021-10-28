/* eslint-env mocha */

import assert from 'assert'
import getISOWeeksInYear from '.'

describe('getISOWeeksInYear', () => {
  it('returns the number of ISO weeks in the ISO week-numbering year of the given date', () => {
    const result = getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))
    assert(result === 53)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2003, 11 /* Dec */, 30).getTime()
    const result = getISOWeeksInYear(date)
    assert(result === 53)
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(4, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    const result = getISOWeeksInYear(initialDate)
    assert(result === 53)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getISOWeeksInYear(new Date(NaN))
    assert(isNaN(result))
  })
})
