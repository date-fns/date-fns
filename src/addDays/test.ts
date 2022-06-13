/* eslint-env mocha */

import assert from 'assert'
import addDays from './index'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'

describe('addDays', () => {
  it('adds the given number of days', () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a timestamp', () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('converts a fractional number to an integer', () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('implicitly converts number arguments', () => {
    const result = addDays(
      new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '10'
    )
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    addDays(date, 11)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(addDays.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addDays.bind(null, 1), TypeError)
  })

  const dstTransitions = getDstTransitions(2017)
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz
  const HOUR = 1000 * 60 * 60
  const MINUTE = 1000 * 60
  // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
  const dstOffset =
    dstTransitions.start && dstTransitions.end
      ? (dstTransitions.end.getTimezoneOffset() -
          dstTransitions.start.getTimezoneOffset()) *
        MINUTE
      : NaN

  dstOnly(
    `works at DST-start boundary in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = dstTransitions.start
      const result = addDays(date!, 1)
      assert.deepStrictEqual(result, new Date(date!.getTime() + 24 * HOUR))
    }
  )

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 0.5 * HOUR)
      const result = addDays(date, 1)
      // started before the transition so will only be 23 hours later in local time
      assert.deepStrictEqual(
        result,
        new Date(date.getTime() + 24 * HOUR - dstOffset)
      )
    }
  )

  dstOnly(
    `works at DST-start - 60 mins in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 1 * HOUR)
      const result = addDays(date, 1)
      // started before the transition so will only be 23 hours later in local time
      assert.deepStrictEqual(
        result,
        new Date(date.getTime() + 24 * HOUR - dstOffset)
      )
    }
  )

  dstOnly(
    `works at DST-end boundary in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = dstTransitions.end
      const result = addDays(date!, 1)
      assert.deepStrictEqual(result, new Date(date!.getTime() + 24 * HOUR))
    }
  )

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 0.5 * HOUR)
      const result = addDays(date, 1)
      // started before the transition so will be 25 hours later in local
      // time because one hour repeats after DST ends.
      assert.deepStrictEqual(
        result,
        new Date(date.getTime() + 24 * HOUR + dstOffset)
      )
    }
  )

  dstOnly(
    `works at DST-end - 60 mins in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 1 * HOUR)
      const result = addDays(date, 1)
      // started before the transition so will be 25 hours later in local
      // time because one hour repeats after DST ends.
      assert.deepStrictEqual(
        result,
        new Date(date.getTime() + 24 * HOUR + dstOffset)
      )
    }
  )

  dstOnly(
    `doesn't mutate if zero increment is used: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.end!)
      const result = addDays(date, 0)
      assert.deepStrictEqual(result, date)
    }
  )
})
