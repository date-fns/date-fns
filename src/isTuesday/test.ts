// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isTuesday from '.'

describe('isTuesday', function() {
  it('returns true if the given date is Tuesday', function() {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 23))
    assert(result === true)
  })

  it('returns false if the given date is not Tuesday', function() {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isTuesday(new Date(2014, 1 /* Feb */, 11).getTime())
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isTuesday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isTuesday.bind(null), TypeError)
  })
})
