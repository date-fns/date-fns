/* eslint-env mocha */

import assert from 'assert'
import getDecade from '.'

describe('getDecade', () => {
  it('returns the decade for a the given date', () => {
    const result = getDecade(new Date(1971, 10 /* Nov */, 8))
    assert(result === 1970)
  })

  it('accepts a timestamp', () => {
    const result = getDecade(new Date(1969, 6 /* Jul */, 20).getTime())
    assert(result === 1960)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getDecade(new Date(NaN))
    assert(isNaN(result))
  })
})
