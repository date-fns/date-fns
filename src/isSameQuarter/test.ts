/* eslint-env mocha */

import assert from 'power-assert'
import isSameQuarter from '.'

describe('isSameQuarter', () => {
  it('returns true if the given dates have the same quarter (and year)', () => {
    const result = isSameQuarter(
      new Date(2014, 0 /* Jan */, 1),
      new Date(2014, 2 /* Mar */, 8)
    )
    assert(result)
  })

  it('returns false if the given dates have different quarters', () => {
    const result = isSameQuarter(
      new Date(2014, 0 /* Jan */, 1),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isSameQuarter(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameQuarter(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(!result)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameQuarter(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(!result)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameQuarter(new Date(NaN), new Date(NaN))
    assert(!result)
  })
})
