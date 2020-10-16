// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDecade from '.'

describe('getDecade', function() {
  it('returns the decade for a the given date', function() {
    const result = getDecade(new Date(1971, 10 /* Nov */, 8))
    assert(result === 1970)
  })

  it('accepts a timestamp', function() {
    const result = getDecade(new Date(1969, 6 /* Jul */, 20).getTime())
    assert(result === 1960)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getDecade(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDecade.bind(null), TypeError)
  })
})
