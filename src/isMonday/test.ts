/* eslint-env mocha */

import assert from 'assert'
import isMonday from './index'

describe('isMonday', () => {
  it('returns true if the given date is Monday', () => {
    const result = isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('returns false if the given date is not Monday', () => {
    const result = isMonday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isMonday(new Date(NaN))
    assert(result === false)
  })
})
