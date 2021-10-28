// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setWeekYear from '.'

describe('setWeekYear', function () {
  it('sets the local week-numbering year, saving the week and the day of the week', function () {
    const result = setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004)
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 3))
  })

  it('accepts a timestamp', function () {
    const result = setWeekYear(new Date(2008, 11 /* Dec */, 29).getTime(), 2007)
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('converts a fractional number to an integer', function () {
    const result = setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004.2004)
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 3))
  })

  it('implicitly converts number arguments', function () {
    // @ts-expect-error
    const result = setWeekYear(new Date(2008, 11 /* Dec */, 29), '2007')
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2008, 11 /* Dec */, 29)
    setWeekYear(date, 2000)
    assert.deepEqual(date, new Date(2008, 11 /* Dec */, 29))
  })

  it('sets local week-numbering years less than 100', function () {
    const initialDate = new Date(2008, 11 /* Dec */, 29)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('handles dates before 100 AD', function () {
    const initialDate = new Date(0)
    initialDate.setFullYear(8, 11 /* Dec */, 29)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = setWeekYear(new Date(NaN), 2007)
    assert(result instanceof Date && isNaN(result.getDate()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = setWeekYear(new Date(2008, 11 /* Dec */, 29), NaN)
    assert(result instanceof Date && isNaN(result.getDate()))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    const date = new Date(2010, 0 /* Jan */, 2)
    const result = setWeekYear(date, 2004, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    })
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const date = new Date(2010, 0 /* Jan */, 2)
    const result = setWeekYear(date, 2004, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    })
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // @ts-expect-error
    const block = setWeekYear.bind(null, new Date(2004, 7 /* Aug */, 7), 2018, {
      weekStartsOn: NaN,
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setWeekYear.bind(null), TypeError)
    assert.throws(setWeekYear.bind(null, 1), TypeError)
  })
})
