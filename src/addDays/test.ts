// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addDays from '.'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'

describe('addDays', function() {
  it('adds the given number of days', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a timestamp', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('converts a fractional number to an integer', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addDays.bind(null), TypeError)
    assert.throws(addDays.bind(null, 1), TypeError)
  })

  const dstTransitions = getDstTransitions(2017)
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz
  const HOUR = 1000 * 60 * 60

  dstOnly(
    `works at DST-start boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = dstTransitions.start
      var result = addDays(date, 1)
      assert.deepEqual(result, new Date(date.getTime() + 24 * HOUR))
    }
  )

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR)
      var result = addDays(date, 1)
      // started before the transition so will only be 23 hours later in local time
      assert.deepEqual(result, new Date(date.getTime() + 23 * HOUR))
    }
  )

  dstOnly(
    `works at DST-start - 60 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.start.getTime() - 1 * HOUR)
      var result = addDays(date, 1)
      // started before the transition so will only be 23 hours later in local time
      assert.deepEqual(result, new Date(date.getTime() + 23 * HOUR))
    }
  )

  dstOnly(
    `works at DST-end boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = dstTransitions.end
      var result = addDays(date, 1)
      assert.deepEqual(result, new Date(date.getTime() + 24 * HOUR))
    }
  )

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR)
      var result = addDays(date, 1)
      // started before the transition so will be 25 hours later in local
      // time because one hour repeats after DST ends.
      assert.deepEqual(result, new Date(date.getTime() + 25 * HOUR))
    }
  )

  dstOnly(
    `works at DST-end - 60 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.end.getTime() - 1 * HOUR)
      var result = addDays(date, 1)
      // started before the transition so will be 25 hours later in local
      // time because one hour repeats after DST ends.
      assert.deepEqual(result, new Date(date.getTime() + 25 * HOUR))
    }
  )

  dstOnly(
    `doesn't mutate if zero increment is used: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.end)
      var result = addDays(date, 0)
      assert.deepEqual(result, date)
    }
  )
})
