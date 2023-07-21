/* eslint-env mocha */

import assert from 'assert'
import isSameYear from './index'

describe('isSameYear', () => {
  it('returns true if the given dates have the same year', () => {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different years', () => {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameYear(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameYear(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameYear(new Date(NaN), new Date(NaN))
    assert(result === false)
  })
})
