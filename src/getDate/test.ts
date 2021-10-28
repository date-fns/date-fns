/* eslint-env mocha */

import assert from 'assert'
import getDate from '.'

describe('getDate', () => {
  it('returns the day of the month of the given date', () => {
    const result = getDate(new Date(2012, 1 /* Feb */, 29))
    assert(result === 29)
  })

  it('accepts a timestamp', () => {
    const result = getDate(new Date(2014, 11 /* Dec */, 31).getTime())
    assert(result === 31)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getDate(new Date(NaN))
    assert(isNaN(result))
  })
})
