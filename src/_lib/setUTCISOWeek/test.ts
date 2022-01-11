/* eslint-env mocha */

import assert from 'assert'
import setUTCISOWeek from '.'

describe('setUTCISOWeek', () => {
  it('sets the ISO week', () => {
    const result = setUTCISOWeek(new Date(Date.UTC(2004, 7 /* Aug */, 7)), 53)
    assert.deepStrictEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('accepts a timestamp', () => {
    const result = setUTCISOWeek(
      new Date(Date.UTC(2009, 11 /* Dec */, 2)).getTime(),
      1
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 31)))
  })

  it('converts a fractional number to an integer', () => {
    const result = setUTCISOWeek(
      new Date(Date.UTC(2004, 7 /* Aug */, 7)),
      53.53
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('implicitly converts number arguments', () => {
    const result = setUTCISOWeek(
      new Date(Date.UTC(2004, 7 /* Aug */, 7)),
      // @ts-expect-error
      '53'
    )
    assert.deepStrictEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('does not mutate the original date', () => {
    const date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    setUTCISOWeek(date, 52)
    assert.deepStrictEqual(date, new Date(Date.UTC(2014, 6 /* Jul */, 2)))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setUTCFullYear(4, 0 /* Jan */, 4)
    initialDate.setUTCHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setUTCFullYear(4, 11 /* Dec */, 26)
    expectedResult.setUTCHours(0, 0, 0, 0)
    const result = setUTCISOWeek(initialDate, 52)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setUTCISOWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setUTCISOWeek(new Date(2004, 7 /* Aug */, 7), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(setUTCISOWeek.bind(null, 1), TypeError)
  })
})
