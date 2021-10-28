/* eslint-env mocha */

import assert from 'assert'
import isSameMonth from '.'

describe('isSameMonth', () => {
  it('returns true if the given dates have the same month (and year)', () => {
    const result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    assert(result)
  })

  it('returns false if the given dates have different months', () => {
    const result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameMonth(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(!result)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameMonth(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(!result)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameMonth(new Date(NaN), new Date(NaN))
    assert(!result)
  })
})
