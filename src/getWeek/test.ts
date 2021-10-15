/* eslint-env mocha */

import assert from 'assert'
import getWeek from '.'

describe('getWeek', () => {
  it('returns the local week of year of the given date', () => {
    const result = getWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 2)
  })

  it('accepts a timestamp', () => {
    const result = getWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const result = getWeek(initialDate)
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getWeek(new Date(NaN))
    assert(isNaN(result))
  })
})
