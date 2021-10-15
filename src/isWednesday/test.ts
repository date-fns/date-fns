/* eslint-env mocha */

import assert from 'assert'
import isWednesday from '.'

describe('isWednesday', () => {
  it('returns true if the given date is Wednesday', () => {
    const result = isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result)
  })

  it('returns false if the given date is not Wednesday', () => {
    const result = isWednesday(new Date(2014, 8 /* Sep */, 25))
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isWednesday(new Date(2014, 1 /* Feb */, 12).getTime())
    assert(result)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isWednesday(new Date(NaN))
    assert(!result)
  })
})
