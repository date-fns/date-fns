/* eslint-env mocha */

import assert from 'assert'
import getMilliseconds from '.'

describe('getMilliseconds', () => {
  it('returns the milliseconds of the given date', () => {
    const result = getMilliseconds(
      new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123)
    )
    assert(result === 123)
  })

  it('accepts a timestamp', () => {
    const result = getMilliseconds(
      new Date(2014, 3 /* Apr */, 2, 23, 30, 42, 500).getTime()
    )
    assert(result === 500)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getMilliseconds(new Date(NaN))
    assert(isNaN(result))
  })
})
