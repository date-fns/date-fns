/* eslint-env mocha */

import assert from 'assert'
import getDayOfYear from '.'

describe('getDayOfYear', () => {
  it('returns the day of the year of the given date', () => {
    const result = getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('accepts a timestamp', () => {
    const result = getDayOfYear(new Date(2014, 0 /* Jan */, 2).getTime())
    assert(result === 2)
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const result = getDayOfYear(initialDate)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getDayOfYear(new Date(NaN))
    assert(isNaN(result))
  })
})
