// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMonth from '.'

describe('getMonth', function() {
  it('returns the month of the given date', function() {
    const result = getMonth(new Date(2012, 1 /* Feb */, 29))
    assert(result === 1)
  })

  it('accepts a timestamp', function() {
    const result = getMonth(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 3)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getMonth.bind(null), TypeError)
  })
})
