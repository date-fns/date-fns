// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameISOWeekYear from '.'

describe('isSameISOWeekYear', function () {
  it('returns true if the given dates have the same ISO week-numbering year', function () {
    var result = isSameISOWeekYear(
      new Date(2003, 11 /* Dec */, 29),
      new Date(2005, 0 /* Jan */, 2)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different ISO week-numbering years', function () {
    var result = isSameISOWeekYear(
      new Date(2014, 11 /* Dec */, 28),
      new Date(2014, 11 /* Dec */, 29)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameISOWeekYear(
      new Date(2003, 11 /* Dec */, 29).toISOString(),
      new Date(2005, 0 /* Jan */, 2).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameISOWeekYear(
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
    var result = isSameISOWeekYear(firstDate, secondDate)
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameISOWeekYear(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameISOWeekYear(
      new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function () {
    var result = isSameISOWeekYear(
      new Date(NaN),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = isSameISOWeekYear.bind(
      null,
      new Date(2003, 11 /* Dec */, 29),
      new Date(2005, 0 /* Jan */, 2),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(isSameISOWeekYear.bind(null), TypeError)
    assert.throws(isSameISOWeekYear.bind(null, 1), TypeError)
  })
})
