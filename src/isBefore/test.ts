/* eslint-env mocha */

import assert from 'assert'
import isBefore from './index'

describe('isBefore', () => {
  it('returns true if the first date is before the second one', () => {
    const result = isBefore(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === true)
  })

  it('returns false if the first date is after the second one', () => {
    const result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === false)
  })

  it('returns false if the first date is equal to the second one', () => {
    const result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isBefore(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isBefore(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isBefore(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isBefore(new Date(NaN), new Date(NaN))
    assert(result === false)
  })
})
