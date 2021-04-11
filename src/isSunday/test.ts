// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSunday from '.'

describe('isSunday', function() {
  it('returns true if the given date is Sunday', function() {
    const result = isSunday(new Date(2014, 8 /* Sep */, 21))
    assert(result === true)
  })

  it('returns false if the given date is not Sunday', function() {
    const result = isSunday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSunday(new Date(2014, 1 /* Feb */, 9).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isSunday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isSunday.bind(null), TypeError)
  })
})
