/* eslint-env mocha */

import assert from 'assert'
import getMinutes from '.'

describe('getMinutes', () => {
  it('returns the minutes of the given date', () => {
    const result = getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5))
    assert(result === 45)
  })

  it('accepts a timestamp', () => {
    const result = getMinutes(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 30)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getMinutes(new Date(NaN))
    assert(isNaN(result))
  })
})
