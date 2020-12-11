// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sub from '.'

describe('sub', () => {
  it('subtracts the duration from the given date', () => {
    const result = sub(new Date(2017, 5 /* June */, 15, 15, 29, 20), {
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 10, 19, 50))
  })

  it('returns same date object when passed empty duration', () => {
    const result = sub(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {})
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('accepts a timestamp', () => {
    const result = sub(new Date(2014, 8 /* Sep */, 1, 14).getTime(), {
      hours: 4
    })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('converts a fractional number to an integer', () => {
    const result = sub(new Date(2014, 8 /* Sep */, 1, 14), { hours: 4.2 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('implicitly converts number arguments', () => {
    // $ExpectedMistake
    const result = sub(new Date(2014, 8 /* Sep */, 1, 14), { hours: '4.2' })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1, 10)
    sub(date, { hours: 4 })
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', () => {
    const date = new Date(2014, 11 /* Dec */, 31)
    const result = sub(date, { months: 3 })
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(1, 2 /* Mar */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    const result = sub(initialDate, { months: 1 })
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = sub(new Date(NaN), { hours: 5 })
    assert(result instanceof Date && isNaN(Number(result)))
  })

  it('throws RangeError exception if passed Number as duration', () => {
    // $ExpectedMistake
    const result = sub(new Date(2014, 8, 1), 'wut' as any)
    assert(result instanceof Date && isNaN(Number(result)))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    assert.throws(sub.bind(null), TypeError)
    assert.throws(sub.bind(null, 1), TypeError)
  })
})
