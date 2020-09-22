// @flow
/* eslint-env mocha */

import assert from 'assert'
import add from '.'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'

describe('add', function() {
  it('adds the values from the given object', function() {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10, 19, 50), {
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30
    })
    assert.deepStrictEqual(result, new Date(2017, 5 /* June */, 15, 15, 29, 20))
  })

  it('returns same date object when passed empty duration values', function() {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {})
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('accepts a timestamp', function() {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {
      hours: 4
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 14))
  })

  it('converts a fractional number to an integer', function() {
    const result = add(new Date(2014, 8 /* Sep */, 1, 10), { hours: 4.2 })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 14))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = add(new Date(2014, 8 /* Sep */, 1, 10), { hours: '4.2' })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 14))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1, 10)
    add(date, { hours: 4 })
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    const date = new Date(2014, 11 /* Dec */, 31)
    const result = add(date, { months: 9 })
    assert.deepStrictEqual(result, new Date(2015, 8 /* Sep */, 30))
  })

  const dstTransitions = getDstTransitions(2017)
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz
  const HOUR = 1000 * 60 * 60

  dstOnly(
    `works at DST-end boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      const date = dstTransitions.end
      const result = add(date!, { hours: 1 })
      assert.deepStrictEqual(result, new Date(date!.getTime() + HOUR))
    }
  )

  it('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(-1, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = add(initialDate, { months: 3 })
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = add(new Date(NaN), { hours: 5 })
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws RangeError exception if passed Number as duration', function() {
    // @ts-expect-error
    const result = add(new Date(2014, 8, 1), 'wut')
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(add.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(add.bind(null, 1), TypeError)
  })
})
