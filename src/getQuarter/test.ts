/* eslint-env mocha */

import assert from 'assert'
import getQuarter from '.'

describe('getQuarter', () => {
  it('returns the quarter of the given date', () => {
    const result = getQuarter(new Date(2014, 6 /* Jul */, 2))
    assert(result === 3)
  })

  it('accepts a timestamp', () => {
    const result = getQuarter(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 2)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getQuarter(new Date(NaN))
    assert(isNaN(result))
  })
})
