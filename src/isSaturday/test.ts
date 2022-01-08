/* eslint-env mocha */

import assert from 'assert'
import isSaturday from '.'

describe('isSaturday', () => {
  it('returns true if the given date is Saturday', () => {
    const result = isSaturday(new Date(2014, 8 /* Sep */, 27))
    assert(result === true)
  })

  it('returns false if the given date is not Saturday', () => {
    const result = isSaturday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isSaturday(new Date(2014, 1 /* Feb */, 15).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isSaturday(new Date(NaN))
    assert(result === false)
  })
})
