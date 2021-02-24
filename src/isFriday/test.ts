// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isFriday from '.'

describe('isFriday', function() {
  it('returns true if the given date is Friday', function() {
    const result = isFriday(new Date(2014, 8 /* Sep */, 26))
    assert(result === true)
  })

  it('returns false if the given date is not Friday', function() {
    const result = isFriday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isFriday(new Date(2014, 1 /* Feb */, 14).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isFriday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isFriday.bind(null), TypeError)
  })
})
