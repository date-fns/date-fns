// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameDay from '.'

describe('isSameDay', function() {
  it('returns true if the given dates have the same day', function() {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different days', function() {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0)
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isSameDay(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isSameDay(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isSameDay(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameDay.bind(null), TypeError)
    assert.throws(isSameDay.bind(null, 1), TypeError)
  })
})
