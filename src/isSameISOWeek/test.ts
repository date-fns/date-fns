// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameISOWeek from '.'

describe('isSameISOWeek', function() {
  it('returns true if the given dates have the same ISO week', function() {
    const result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 7)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different ISO weeks', function() {
    const result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 14)
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isSameISOWeek(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isSameISOWeek(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isSameISOWeek(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameISOWeek.bind(null), TypeError)
    assert.throws(isSameISOWeek.bind(null, 1), TypeError)
  })
})
