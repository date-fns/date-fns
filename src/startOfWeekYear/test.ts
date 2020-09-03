// @flow
/* eslint-env mocha */
import assert from 'assert'

import startOfWeekYear from '.'


describe('startOfWeekYear', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week year', function() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeekYear(new Date(2005, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
  })

  it('accepts a timestamp', function() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeekYear(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime())
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    startOfWeekYear(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(9, 0 /* Jan */, 1)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(8, 11 /* Dec */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeekYear(initialDate)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    var result = startOfWeekYear(new Date(NaN))
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
    assert(result instanceof Date && isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function() {
    var date = new Date(2005, 6 /* Jul */, 2)
    var result = startOfWeekYear(date, {
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 }
      }
    })
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = new Date(2005, 6 /* Jul */, 2)
    var result = startOfWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
      }
    })
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    // $ExpectedMistake
    var block = startOfWeekYear.bind(null, new Date(2007, 11 /* Dec */, 31), {
      weekStartsOn: NaN
    })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function() {
    // $ExpectedMistake
    var block = startOfWeekYear.bind(null, new Date(2007, 11 /* Dec */, 31), {
      firstWeekContainsDate: NaN
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfWeekYear.bind(null), TypeError)
  })
})
