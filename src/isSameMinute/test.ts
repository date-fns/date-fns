/* eslint-env mocha */

import assert from 'power-assert'
import isSameMinute from '.'

describe('isSameMinute', () => {
  it('returns true if the given dates have the same minute', () => {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15)
    )
    assert(result)
  })

  it('returns false if the given dates have different minutes', () => {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
      new Date(2014, 8 /* Sep */, 4, 6, 31)
    )
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime()
    )
    assert(result)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameMinute(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(!result)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameMinute(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(!result)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameMinute(new Date(NaN), new Date(NaN))
    assert(!result)
  })
})
