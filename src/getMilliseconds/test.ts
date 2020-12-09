// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMilliseconds from '.'

describe('getMilliseconds', function() {
  it('returns the milliseconds of the given date', function() {
    const result = getMilliseconds(
      new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123)
    )
    assert(result === 123)
  })

  it('accepts a timestamp', function() {
    const result = getMilliseconds(
      new Date(2014, 3 /* Apr */, 2, 23, 30, 42, 500).getTime()
    )
    assert(result === 500)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getMilliseconds(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getMilliseconds.bind(null), TypeError)
  })
})
