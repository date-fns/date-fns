/* eslint-env mocha */

import assert from 'power-assert'
import differenceInDays from '.'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'

describe('differenceInDays', function () {
  it('returns the number of full days between the given dates', function () {
    const result = differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 366)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    const result = differenceInDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -366)
  })

  it('accepts timestamps', function () {
    const result = differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime()
    )
    assert(result === 1)
  })

  describe('edge cases', function () {
    it('the difference is less than a day, but the given dates are in different calendar days', function () {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('the time values of the given dates are the same', function () {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 6, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    const dstTransitions = getDstTransitions(2017)
    const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip
    const tz =
      Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz
    dstOnly(
      `works across DST start & end in local timezone: ${tz || '(unknown)'}`,
      function () {
        const { start, end } = dstTransitions
        const HOUR = 1000 * 60 * 60
        const MINUTE = 1000 * 60
        function sameTime(t1: Date, t2: Date): boolean {
          return (
            t1.getHours() === t2.getHours() &&
            t1.getMinutes() === t2.getMinutes() &&
            t1.getSeconds() === t2.getSeconds() &&
            t1.getMilliseconds() === t2.getMilliseconds()
          )
        }

        assert(start !== undefined)
        assert(end !== undefined)

        if (start === undefined || end === undefined) {
          return
        }

        // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
        const dstOffset =
          (end.getTimezoneOffset() - start.getTimezoneOffset()) * MINUTE

        // TEST DST START (SPRING)

        // anchor to one hour before the boundary
        {
          const a = new Date(start.getTime() - HOUR) // 1 hour before DST
          const b = new Date(a.getTime() + 24 * HOUR - dstOffset) // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR - dstOffset) // 2 days later, same local time

          assert(sameTime(a, b))
          assert(sameTime(a, c))
          assert(sameTime(b, c))
          assert(differenceInDays(c, b) === 1) // normal 24-hour day
          assert(differenceInDays(b, a) === 1) // 23 hours -> 1 day
          assert(differenceInDays(c, a) === 2) // 47 hours -> 2 days
        }
        // anchor exactly, the boundary
        {
          const a = start // exactly when DST starts
          const b = new Date(a.getTime() + 24 * HOUR) // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR) // 2 days later, same local time

          assert(sameTime(a, b))
          assert(sameTime(a, c))
          assert(sameTime(b, c))
          assert(differenceInDays(c, b) === 1) // normal 24-hour day
          assert(differenceInDays(b, a) === 1) // normal 24-hour day
          assert(differenceInDays(c, a) === 2) // 2 normal 24-hour days
        }

        // TEST DST END (FALL)

        // make sure that diffs across a "fall back" DST boundary won't report a full day
        // until 25 hours have elapsed.
        {
          const a = new Date(end.getTime() - HOUR / 2) // 1 hour before Standard Time starts
          const b = new Date(a.getTime() + 24 * HOUR + dstOffset - 15 * MINUTE) // 1 day later, 15 mins earlier local time
          const c = new Date(a.getTime() + 48 * HOUR + dstOffset - 15 * MINUTE) // 2 days later, 15 mins earlier local time

          assert(differenceInDays(c, b) === 1) // normal 24-hour day
          assert(differenceInDays(b, a) === 0) // 24.75 hours -> 0 full days (because hour lost to DST)
          assert(differenceInDays(c, a) === 1) // 48.75 hours -> 1 full day (because hour lost to DST)
        }
        // anchor to one hour before the boundary
        {
          const a = new Date(end.getTime() - HOUR) // 1 hour before Standard Time start
          const b = new Date(a.getTime() + 24 * HOUR + dstOffset) // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR + dstOffset) // 2 days later, same local time

          assert(sameTime(a, b))
          assert(sameTime(a, c))
          assert(sameTime(b, c))
          assert(differenceInDays(c, b) === 1) // normal 24-hour day
          assert(differenceInDays(b, a) === 1) // 25 hours -> 1 day
          assert(differenceInDays(c, a) === 2) // 49 hours -> 2 days
        }
        // anchor to one hour after the boundary
        {
          const a = new Date(end.getTime() + HOUR) // 1 hour after Standard Time start
          const b = new Date(a.getTime() + 24 * HOUR) // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR) // 2 days later, same local time

          assert(sameTime(a, b))
          assert(sameTime(a, c))
          assert(sameTime(b, c))
          assert(differenceInDays(c, b) === 1) // normal 24-hour day
          assert(differenceInDays(b, a) === 1) // normal 24-hour day
          assert(differenceInDays(c, a) === 2) // 2 normal 24-hour days
        }
        // anchor exactly at the boundary
        {
          const a = end // exactly when Standard Time starts
          const b = new Date(a.getTime() + 24 * HOUR) // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR) // 2 days later, same local time
          assert(differenceInDays(b, a) === 1) // normal 24-hour day
          assert(differenceInDays(c, a) === 2) // 2 normal 24-hour days
        }
      }
    )

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0
      }

      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      const resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    const result = differenceInDays(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    const result = differenceInDays(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    const result = differenceInDays(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(differenceInDays.bind(null), TypeError)
    assert.throws(differenceInDays.bind(null, 1), TypeError)
  })
})
