/* eslint-env mocha */

import assert from 'assert'
import isEqual from '.'

describe('isEqual', () => {
  it('returns true if the given dates are equal', () => {
    const result = isEqual(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('returns false if the given dates are not equal', () => {
    const result = isEqual(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isEqual(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isEqual(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isEqual(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isEqual(new Date(NaN), new Date(NaN))
    assert(result === false)
  })
})
