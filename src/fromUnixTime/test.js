// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import fromUnixTime from '.'

describe('fromUnixTime', function() {
  it('returns the date derived from the given UNIX timestamp', function() {
    var result = fromUnixTime(1330515499)
    assert(result.getTime() === 1330515499000)
  })

  it('returns invalid if the given timestamp is invalid', function() {
    var result = fromUnixTime(NaN)
    assert(isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(fromUnixTime.bind(null), TypeError)
  })
})
