// @flow
/* eslint-env mocha */

import assert from 'assert'
import areIntervalsOverlapping from '.'
import context from 'assert'

describe('areIntervalsOverlapping', function () {
  const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0)
  const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0)

  describe("when the time intervals don't overlap", function () {
    it('returns false for a valid non overlapping interval before another interval', function () {
      const earlierIntervalStart = new Date(2016, 9, 25)
      const earlierIntervalEnd = new Date(2016, 10, 9)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: earlierIntervalStart, end: earlierIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it('returns false for a valid non overlapping interval after another interval', function () {
      const laterIntervalStart = new Date(2016, 11, 4)
      const laterIntervalEnd = new Date(2016, 11, 9)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: laterIntervalStart, end: laterIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it('returns false for a non overlapping same-day interval', function () {
      const sameDayIntervalStart = new Date(2016, 11, 4, 9, 0, 0)
      const sameDayIntervalEnd = new Date(2016, 11, 4, 18, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: sameDayIntervalStart, end: sameDayIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it('returns false for an interval differing by a few hours', function () {
      const oneDayOverlappingIntervalStart = new Date(2016, 11, 3, 18, 0, 0)
      const oneDayOverlappingIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: oneDayOverlappingIntervalStart,
          end: oneDayOverlappingIntervalEnd,
        }
      )
      assert(isOverlapping === false)
    })

    it("returns false for an interval with the same startDateTime as the initial time intervals's endDateTime", function () {
      const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it("returns false for an interval with the same endDateTime as the initial time interval's startDateTime", function () {
      const oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }
      )
      assert(isOverlapping === false)
    })
  })

  describe('when the time intervals overlap', function () {
    it('returns true for an interval included within another interval', function () {
      const includedIntervalStart = new Date(2016, 10, 14)
      const includedIntervalEnd = new Date(2016, 10, 14)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd }
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval overlapping at the end', function () {
      const endOverlappingIntervalStart = new Date(2016, 10, 5)
      const endOverlappingIntervalEnd = new Date(2016, 10, 14)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd }
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval overlapping at the beginning', function () {
      const startOverlappingIntervalStart = new Date(2016, 10, 20)
      const startOverlappingIntervalEnd = new Date(2016, 11, 14)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: startOverlappingIntervalStart,
          end: startOverlappingIntervalEnd,
        }
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval including another interval', function () {
      const includingIntervalStart = new Date(2016, 10, 5)
      const includingIntervalEnd = new Date(2016, 11, 15)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includingIntervalStart, end: includingIntervalEnd }
      )
      assert(isOverlapping === true)
    })
  })

  it('accepts timestamp', function () {
    const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0).getTime()
    const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0).getTime()

    const endOverlappingIntervalStart = new Date(2016, 10, 5).getTime()
    const endOverlappingIntervalEnd = new Date(2016, 10, 14).getTime()

    const isOverlapping = areIntervalsOverlapping(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd }
    )
    assert(isOverlapping === true)
  })

  it('throws an exception if the start date of the initial time interval is after the end date', function () {
    const block = areIntervalsOverlapping.bind(
      null,
      { start: new Date(2016, 10, 7), end: new Date(2016, 10, 3) },
      { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date of the compared time interval is after the end date', function () {
    const block = areIntervalsOverlapping.bind(
      null,
      { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
      { start: new Date(2016, 10, 15), end: new Date(2016, 10, 5) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the initial interval is undefined', function () {
    // @ts-expect-error
    const block = areIntervalsOverlapping.bind(null, undefined, {
      start: new Date(2016, 10, 5),
      end: new Date(2016, 10, 15),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the compared interval is undefined', function () {
    // @ts-expect-error
    const block = areIntervalsOverlapping.bind(
      null,
      { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
      undefined
    )
    assert.throws(block, RangeError)
  })

  describe('when the inclusive option is true', function () {
    it("returns true for an interval with the same startDateTime as the initial time interval's endDateTime", function () {
      const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
        { inclusive: true }
      )
      assert(isOverlapping)
    })

    it("returns true for an interval with the same endDateTime as the initial time interval's startDateTime", function () {
      const oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
        { inclusive: true }
      )
      assert(isOverlapping)
    })
  })

  describe('one of the dates is `Invalid Date`', function () {
    it('throws an exception if the start date of the initial time interval is `Invalid Date`', function () {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(NaN), end: new Date(2016, 10, 3) },
        { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the initial time interval is `Invalid Date`', function () {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(2016, 10, 3), end: new Date(NaN) },
        { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the start date of the compared time interval is `Invalid Date`', function () {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
        { start: new Date(NaN), end: new Date(2016, 10, 5) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the compared time interval is `Invalid Date`', function () {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
        { start: new Date(2016, 10, 5), end: new Date(NaN) }
      )
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(areIntervalsOverlapping.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(areIntervalsOverlapping.bind(null, 1), TypeError)
  })
})
