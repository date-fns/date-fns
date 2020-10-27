// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getSeconds from '.'

describe('getSeconds', function() {
  it('returns the seconds of the given date', function() {
    const result = getSeconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123))
    assert(result === 5)
  })

  it('accepts a timestamp', function() {
    const result = getSeconds(
      new Date(2014, 3 /* Apr */, 2, 23, 30, 42).getTime()
    )
    assert(result === 42)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getSeconds(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getSeconds.bind(null), TypeError)
  })
})
