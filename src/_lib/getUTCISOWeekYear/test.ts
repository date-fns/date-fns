/* eslint-env mocha */

import assert from 'assert'
import getUTCISOWeekYear from '.'

describe('getUTCISOWeekYear', () => {
  it('returns the ISO week-numbering year of the given date', () => {
    const result = getUTCISOWeekYear(new Date(Date.UTC(2007, 11 /* Dec */, 31)))
    assert(result === 2008)
  })

  it('accepts a timestamp', () => {
    const result = getUTCISOWeekYear(
      new Date(Date.UTC(2005, 0 /* Jan */, 1)).getTime()
    )
    assert(result === 2004)
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setUTCFullYear(7, 11 /* Dec */, 31)
    initialDate.setUTCHours(0, 0, 0, 0)
    const result = getUTCISOWeekYear(initialDate)
    assert(result === 8)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getUTCISOWeekYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getUTCISOWeekYear.bind(null), TypeError)
  })
})
