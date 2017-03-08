// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameISOYear from '.'

describe('isSameISOYear', function () {
  it('returns true if the given dates have the same ISO week-numbering year', function () {
    var result = isSameISOYear(
      new Date(2003, 11 /* Dec */, 29),
      new Date(2005, 0 /* Jan */, 2)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different ISO week-numbering years', function () {
    var result = isSameISOYear(
      new Date(2014, 11 /* Dec */, 28),
      new Date(2014, 11 /* Dec */, 29)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameISOYear(
      new Date(2003, 11 /* Dec */, 29).toISOString(),
      new Date(2005, 0 /* Jan */, 2).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameISOYear(
      new Date(2003, 11 /* Dec */, 29).getTime(),
      new Date(2005, 0 /* Jan */, 2).getTime()
    )
    assert(result === true)
  })

  it('handles dates before 100 AD', function () {
    var firstDate = new Date(0)
    firstDate.setFullYear(5, 0 /* Jan */, 1)
    firstDate.setHours(0, 0, 0, 0)
    var secondDate = new Date(0)
    secondDate.setFullYear(5, 0 /* Jan */, 2)
    secondDate.setHours(0, 0, 0, 0)
    var result = isSameISOYear(firstDate, secondDate)
    assert(result === true)
  })
})
