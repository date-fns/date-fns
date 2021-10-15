/* eslint-env mocha */

import assert from 'assert'
import isTuesday from '.'

describe('isTuesday', () => {
  it('returns true if the given date is Tuesday', () => {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 23))
    assert(result)
  })

  it('returns false if the given date is not Tuesday', () => {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 25))
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isTuesday(new Date(2014, 1 /* Feb */, 11).getTime())
    assert(result)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isTuesday(new Date(NaN))
    assert(!result)
  })
})
