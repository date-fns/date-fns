/* eslint-env mocha */

import assert from 'assert'
import isSunday from '.'

describe('isSunday', () => {
  it('returns true if the given date is Sunday', () => {
    const result = isSunday(new Date(2014, 8 /* Sep */, 21))
    assert(result === true)
  })

  it('returns false if the given date is not Sunday', () => {
    const result = isSunday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isSunday(new Date(2014, 1 /* Feb */, 9).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isSunday(new Date(NaN))
    assert(result === false)
  })
})
