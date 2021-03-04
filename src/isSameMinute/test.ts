// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameMinute from '.'

describe('isSameMinute', function() {
  it('returns true if the given dates have the same minute', function() {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different minutes', function() {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
      new Date(2014, 8 /* Sep */, 4, 6, 31)
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isSameMinute(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isSameMinute(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isSameMinute(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameMinute.bind(null), TypeError)
    assert.throws(isSameMinute.bind(null, 1), TypeError)
  })
})
