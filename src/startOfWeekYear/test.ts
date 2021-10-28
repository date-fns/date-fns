/* eslint-env mocha */

import assert from 'assert'
import startOfWeekYear from '.'

describe('startOfWeekYear', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week year', function () {
    const result = startOfWeekYear(new Date(2005, 6 /* Jul */, 2))
    assert.deepStrictEqual(result, new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
  })

  it('accepts a timestamp', function () {
    const result = startOfWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime()
    )
    assert.deepStrictEqual(result, new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
  })

  it('does not mutate the original date', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    startOfWeekYear(date)
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    const initialDate = new Date(0)
    initialDate.setFullYear(9, 0 /* Jan */, 1)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(8, 11 /* Dec */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    const result = startOfWeekYear(initialDate)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = startOfWeekYear(new Date(NaN))
    //@ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function () {
    const date = new Date(2005, 6 /* Jul */, 2)
    const result = startOfWeekYear(date, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    })
    assert.deepStrictEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const date = new Date(2005, 6 /* Jul */, 2)
    const result = startOfWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    })
    assert.deepStrictEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // @ts-expect-error
    const block = startOfWeekYear.bind(null, new Date(2007, 11 /* Dec */, 31), {
      weekStartsOn: NaN,
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    //@ts-expect-error
    assert.throws(startOfWeekYear.bind(null), TypeError)
  })
})
