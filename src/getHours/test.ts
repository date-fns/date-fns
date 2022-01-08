/* eslint-env mocha */

import assert from 'assert'
import getHours from '.'

describe('getHours', () => {
  it('returns the hours of the given date', () => {
    const result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    assert(result === 11)
  })

  it('accepts a timestamp', () => {
    const result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 23)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getHours(new Date(NaN))
    assert(isNaN(result))
  })
})
