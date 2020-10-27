// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameYear from '.'

describe('isSameYear', function() {
  it('returns true if the given dates have the same year', function() {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 25),
      new Date(2014, 8 /* Sep */, 2)
    )
    assert(result === true)
  })

  it('returns true if the earlier date is within an interval of 12 months of the later date', function() {
    const result = isSameYear(
      new Date(2014, 6 /* Jul */, 2),
      new Date(2015, 2 /* Mar */, 25),
      { yearStartsOn: 6 }
    )
    assert(result === true)
  })

  it('returns false if the given dates have different years', function() {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('returns false if the earlier date is not within an interval of 12 months of the later date', function() {
    const result = isSameYear(
      new Date(2014, 6 /* Jul */, 2),
      new Date(2014, 2 /* Mar */, 25),
      { yearStartsOn: 4 }
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isSameYear(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isSameYear(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isSameYear(new Date(NaN), new Date(NaN))
    assert(result === false)
  })
  it('throws Error exception if the month of the first date is before the start of year', function() {
    assert.throws(
      () =>
        isSameYear(
          new Date(2014, 6 /* Jul */, 2),
          new Date(2014, 11 /* Dec */, 25),
          { yearStartsOn: 8 }
        ),
      Error
    )
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameYear.bind(null), TypeError)
    assert.throws(isSameYear.bind(null, 1), TypeError)
  })
})
