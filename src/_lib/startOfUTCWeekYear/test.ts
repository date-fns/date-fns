/* eslint-env mocha */

import assert from 'assert'
import startOfUTCWeekYear from '.'

describe('startOfUTCWeekYear', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week year', () => {
    const result = startOfUTCWeekYear(new Date(Date.UTC(2005, 6 /* Jul */, 2)))
    assert.deepStrictEqual(
      result,
      new Date(Date.UTC(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
    )
  })

  it('accepts a timestamp', () => {
    const result = startOfUTCWeekYear(Date.UTC(2005, 0 /* Jan */, 1, 6, 0))
    assert.deepStrictEqual(
      result,
      new Date(Date.UTC(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    startOfUTCWeekYear(date)
    assert.deepStrictEqual(date, new Date(Date.UTC(2014, 6 /* Jul */, 2)))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setUTCFullYear(9, 0 /* Jan */, 1)
    initialDate.setUTCHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setUTCFullYear(8, 11 /* Dec */, 28)
    expectedResult.setUTCHours(0, 0, 0, 0)
    const result = startOfUTCWeekYear(initialDate)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfUTCWeekYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', () => {
    const date = new Date(Date.UTC(2005, 6 /* Jul */, 2))
    const result = startOfUTCWeekYear(date, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    })
    assert.deepStrictEqual(
      result,
      new Date(Date.UTC(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
    )
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const date = new Date(2005, 6 /* Jul */, 2)
    const result = startOfUTCWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    })
    assert.deepStrictEqual(
      result,
      new Date(Date.UTC(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
    )
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      startOfUTCWeekYear(new Date(2007, 11 /* Dec */, 31), {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', () => {
    const block = () =>
      startOfUTCWeekYear(new Date(2007, 11 /* Dec */, 31), {
        // @ts-expect-error
        firstWeekContainsDate: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(startOfUTCWeekYear.bind(null), TypeError)
  })
})
