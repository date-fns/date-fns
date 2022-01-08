/* eslint-env mocha */

import assert from 'assert'
import getDaysInYear from '.'

describe('getDaysInYear', () => {
  it('returns the number of days in the year of the given date', () => {
    const result = getDaysInYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 365)
  })

  it('works for a leap year', () => {
    const result = getDaysInYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === 366)
  })

  it('works for the years divisible by 100 but not by 400', () => {
    const result = getDaysInYear(new Date(2100, 6 /* Jul */, 2))
    assert(result === 365)
  })

  it('works for the years divisible by 400', () => {
    const result = getDaysInYear(new Date(2000, 6 /* Jul */, 2))
    assert(result === 366)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2012, 6 /* Jul */, 2).getTime()
    const result = getDaysInYear(date)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getDaysInYear(new Date(NaN))
    assert(isNaN(result))
  })
})
