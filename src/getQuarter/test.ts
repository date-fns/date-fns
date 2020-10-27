// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getQuarter from '.'

describe('getQuarter', function() {
  it('returns the quarter of the given date', function() {
    const result = getQuarter(new Date(2014, 6 /* Jul */, 2))
    assert(result === 3)
  })

  it('accepts a timestamp', function() {
    const result = getQuarter(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 2)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getQuarter(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getQuarter.bind(null), TypeError)
  })
})
