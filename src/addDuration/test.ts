/* eslint-env mocha */

import assert from 'assert'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'
import addDuration from './index'

describe('addDuration', () => {
  it('adds the given number of seconds', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { seconds: 10 })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 0, 0, 10))
  })

  it('adds the given number of minutes', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { minutes: 10 })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 0, 10))
  })

  it('adds the given number of hours', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { hours: 10 })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 10))
  })

  it('adds the given number of days', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { days: 10 })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('adds the given number of weeks', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { weeks: 4 })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('adds the given number of months', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { months: 4 })
    assert.deepStrictEqual(result, new Date(2015, 0 /* Jan */, 1))
  })

  it('adds the given number of years', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { years: 10 })
    assert.deepStrictEqual(result, new Date(2024, 8 /* Sep */, 1))
  })

  it('adds the given number of years months weeks days hours minutes seconds', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), {
      years: 1,
      months: 2,
      weeks: 2,
      days: 3,
      hours: 2,
      minutes: 25,
      seconds: 30,
    })
    assert.deepStrictEqual(result, new Date(2015, 10 /* Nov */, 18, 2, 25, 30))
  })

  it('accepts a timestamp', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1).getTime(), {
      days: 10,
    })
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    addDuration(date, { days: 11 })
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addDuration(new Date(NaN), { days: 10 })
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addDuration(new Date(2014, 8 /* Sep */, 1), { days: NaN })
    assert(result instanceof Date && isNaN(result.getTime()))
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
      const result = addDuration(date!, { days: 1 })
      assert.deepStrictEqual(result, new Date(date!.getTime() + 24 * HOUR))
    }
  )

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 0.5 * HOUR)
      const result = addDuration(date, { days: 1 })
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
      const result = addDuration(date, { days: 1 })
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
      const result = addDuration(date!, { days: 1 })
      assert.deepStrictEqual(result, new Date(date!.getTime() + 24 * HOUR))
    }
  )

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tz || '(unknown)'}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 0.5 * HOUR)
      const result = addDuration(date, { days: 1 })
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
      const result = addDuration(date, { days: 1 })
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
      const result = addDuration(date, { days: 0 })
      assert.deepStrictEqual(result, date)
    }
  )
})
