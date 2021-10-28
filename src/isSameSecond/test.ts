/* eslint-env mocha */

import assert from 'power-assert'
import isSameSecond from '.'

describe('isSameSecond', () => {
  it('returns true if the given dates have the same second', () => {
    const result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )
    assert(result)
  })

  it('returns false if the given dates have different seconds', () => {
    const result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59)
    )
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime()
    )
    assert(result)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameSecond(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(!result)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameSecond(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(!result)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameSecond(new Date(NaN), new Date(NaN))
    assert(!result)
  })
})
