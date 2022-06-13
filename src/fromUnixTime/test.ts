/* eslint-env mocha */

import assert from 'assert'
import fromUnixTime from './index'

describe('fromUnixTime', () => {
  it('returns the date derived from the given UNIX timestamp', () => {
    const result = fromUnixTime(1330515499)
    assert(result.getTime() === 1330515499000)
  })

  it('returns invalid if the given timestamp is invalid', () => {
    const result = fromUnixTime(NaN)
    assert(isNaN(result.getTime()))
  })

  it('discards decimal values', () => {
    const result = fromUnixTime(1330515499.75)
    assert(result.getTime() === 1330515499000)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(fromUnixTime.bind(null), TypeError)
  })
})
