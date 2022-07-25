/* eslint-env mocha */

import assert from 'assert'
import areIntervalsOverlapping from './index'

describe('areIntervalsOverlapping', () => {
  const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0)
  const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0)

  describe("when the time intervals don't overlap", () => {
    it('returns false for a valid non overlapping interval before another interval', () => {
      const earlierIntervalStart = new Date(2016, 9, 25)
      const earlierIntervalEnd = new Date(2016, 10, 9)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: earlierIntervalStart, end: earlierIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it('returns false for a valid non overlapping interval after another interval', () => {
      const laterIntervalStart = new Date(2016, 11, 4)
      const laterIntervalEnd = new Date(2016, 11, 9)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: laterIntervalStart, end: laterIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it('returns false for a non overlapping same-day interval', () => {
      const sameDayIntervalStart = new Date(2016, 11, 4, 9, 0, 0)
      const sameDayIntervalEnd = new Date(2016, 11, 4, 18, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: sameDayIntervalStart, end: sameDayIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it('returns false for an interval differing by a few hours', () => {
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

    it("returns false for an interval with the same startDateTime as the initial time intervals's endDateTime", () => {
      const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }
      )
      assert(isOverlapping === false)
    })

    it("returns false for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
      const oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }
      )
      assert(isOverlapping === false)
    })
  })

  describe('when the time intervals overlap', () => {
    it('returns true for an interval included within another interval', () => {
      const includedIntervalStart = new Date(2016, 10, 14)
      const includedIntervalEnd = new Date(2016, 10, 14)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd }
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval overlapping at the end', () => {
      const endOverlappingIntervalStart = new Date(2016, 10, 5)
      const endOverlappingIntervalEnd = new Date(2016, 10, 14)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd }
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval overlapping at the beginning', () => {
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

    it('returns true for an interval including another interval', () => {
      const includingIntervalStart = new Date(2016, 10, 5)
      const includingIntervalEnd = new Date(2016, 11, 15)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includingIntervalStart, end: includingIntervalEnd }
      )
      assert(isOverlapping === true)
    })
  })

  it('accepts timestamp', () => {
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

  it('throws an exception if the start date of the initial time interval is after the end date', () => {
    const block = areIntervalsOverlapping.bind(
      null,
      { start: new Date(2016, 10, 7), end: new Date(2016, 10, 3) },
      { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date of the compared time interval is after the end date', () => {
    const block = areIntervalsOverlapping.bind(
      null,
      { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
      { start: new Date(2016, 10, 15), end: new Date(2016, 10, 5) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the initial interval is undefined', () => {
    const block = () =>
      areIntervalsOverlapping(
        // @ts-expect-error
        undefined,
        {
          start: new Date(2016, 10, 5),
          end: new Date(2016, 10, 15),
        }
      )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the compared interval is undefined', () => {
    const block = () =>
      areIntervalsOverlapping(
        { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
        // @ts-expect-error
        undefined
      )
    assert.throws(block, RangeError)
  })

  describe('when the inclusive option is true', () => {
    it("returns true for an interval with the same startDateTime as the initial time interval's endDateTime", () => {
      const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
        { inclusive: true }
      )
      assert(isOverlapping)
    })

    it("returns true for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
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

  describe('one of the dates is `Invalid Date`', () => {
    it('throws an exception if the start date of the initial time interval is `Invalid Date`', () => {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(NaN), end: new Date(2016, 10, 3) },
        { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the initial time interval is `Invalid Date`', () => {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(2016, 10, 3), end: new Date(NaN) },
        { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the start date of the compared time interval is `Invalid Date`', () => {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
        { start: new Date(NaN), end: new Date(2016, 10, 5) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the compared time interval is `Invalid Date`', () => {
      const block = areIntervalsOverlapping.bind(
        null,
        { start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) },
        { start: new Date(2016, 10, 5), end: new Date(NaN) }
      )
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(areIntervalsOverlapping.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(areIntervalsOverlapping.bind(null, 1), TypeError)
  })
})
