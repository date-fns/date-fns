// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getOverlappingDaysInIntervals from '.'

describe('utc/getOverlappingDaysInIntervals', function () {
  var initialIntervalStart = new Date(Date.UTC(2016, 10, 10, 13, 0, 0))
  var initialIntervalEnd = new Date(Date.UTC(2016, 11, 3, 15, 0, 0))

  context('when the time intervals don\'t overlap', function () {
    it('returns 0 for a valid non overlapping interval before another interval', function () {
      var earlierIntervalStart = new Date(Date.UTC(2016, 9, 25))
      var earlierIntervalEnd = new Date(Date.UTC(2016, 10, 9))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: earlierIntervalStart, end: earlierIntervalEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a valid non overlapping interval after another interval', function () {
      var laterIntervalStart = new Date(Date.UTC(2016, 11, 4))
      var laterIntervalEnd = new Date(Date.UTC(2016, 11, 9))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: laterIntervalStart, end: laterIntervalEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a non overlapping same-day interval', function () {
      var sameDayIntervalStart = new Date(Date.UTC(2016, 11, 4, 9, 0, 0))
      var sameDayIntervalEnd = new Date(Date.UTC(2016, 11, 4, 18, 0, 0))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: sameDayIntervalStart, end: sameDayIntervalEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for an interval differing by a few hours', function () {
      var oneDayOverlappingIntervalStart = new Date(Date.UTC(2016, 11, 3, 18, 0, 0))
      var oneDayOverlappingIntervalEnd = new Date(Date.UTC(2016, 11, 14, 13, 0, 0))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: oneDayOverlappingIntervalStart, end: oneDayOverlappingIntervalEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for an interval with the same startDateTime as the initial time intervals\'s endDateTime', function () {
      var oneDayOverlapIntervalStart = new Date(Date.UTC(2016, 11, 3, 15, 0, 0))
      var oneDayOverlapIntervalEnd = new Date(Date.UTC(2016, 11, 14, 13, 0, 0))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for an interval with the same endDateTime as the initial time interval\'s startDateTime', function () {
      var oneDayOverlapIntervalStart = new Date(Date.UTC(2016, 10, 3, 15, 0, 0))
      var oneDayOverlapIntervalEnd = new Date(Date.UTC(2016, 10, 10, 13, 0, 0))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd}
      )
      assert(numOverlappingDays === 0)
    })
  })

  context('when the time intervals overlap', function () {
    it('rounds up the result to include each started overlapping day', function () {
      var includedIntervalStart = new Date(Date.UTC(2016, 10, 14, 9, 0, 0))
      var includedIntervalEnd = new Date(Date.UTC(2016, 10, 15, 18, 0, 0))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: includedIntervalStart, end: includedIntervalEnd}
      )
      assert(numOverlappingDays === 2)
    })

    it('returns the correct value for an interval included within another interval', function () {
      var includedIntervalStart = new Date(Date.UTC(2016, 10, 14))
      var includedIntervalEnd = new Date(Date.UTC(2016, 10, 15))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: includedIntervalStart, end: includedIntervalEnd}
      )
      assert(numOverlappingDays === 1)
    })

    it('returns the correct value for an interval overlapping at the end', function () {
      var endOverlappingIntervalStart = new Date(Date.UTC(2016, 10, 5))
      var endOverlappingIntervalEnd = new Date(Date.UTC(2016, 10, 14))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd}
      )
      assert(numOverlappingDays === 4)
    })

    it('returns the correct value for an interval overlapping at the beginning', function () {
      var startOverlappingIntervalStart = new Date(Date.UTC(2016, 10, 20))
      var startOverlappingIntervalEnd = new Date(Date.UTC(2016, 11, 14))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: startOverlappingIntervalStart, end: startOverlappingIntervalEnd}
      )
      assert(numOverlappingDays === 14)
    })

    it('returns the correct value for an interval including another interval', function () {
      var includingIntervalStart = new Date(Date.UTC(2016, 10, 5))
      var includingIntervalEnd = new Date(Date.UTC(2016, 11, 15))

      var numOverlappingDays = getOverlappingDaysInIntervals(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: includingIntervalStart, end: includingIntervalEnd}
      )
      assert(numOverlappingDays === 24)
    })
  })

  it('accepts strings', function () {
    var initialIntervalStart = new Date(Date.UTC(2016, 10, 10, 13, 0, 0)).toISOString()
    var initialIntervalEnd = new Date(Date.UTC(2016, 11, 3, 15, 0, 0)).toISOString()

    var endOverlappingIntervalStart = new Date(Date.UTC(2016, 10, 5)).toISOString()
    var endOverlappingIntervalEnd = new Date(Date.UTC(2016, 10, 14)).toISOString()

    var numOverlappingDays = getOverlappingDaysInIntervals(
      {start: initialIntervalStart, end: initialIntervalEnd},
      {start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd}
    )
    assert(numOverlappingDays === 4)
  })

  it('accepts timestamp', function () {
    var initialIntervalStart = Date.UTC(2016, 10, 10, 13, 0, 0)
    var initialIntervalEnd = Date.UTC(2016, 11, 3, 15, 0, 0)

    var endOverlappingIntervalStart = Date.UTC(2016, 10, 5)
    var endOverlappingIntervalEnd = Date.UTC(2016, 10, 14)

    var numOverlappingDays = getOverlappingDaysInIntervals(
      {start: initialIntervalStart, end: initialIntervalEnd},
      {start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd}
    )
    assert(numOverlappingDays === 4)
  })

  it('throws an exception if the start date of the initial time interval is after the end date', function () {
    var block = getOverlappingDaysInIntervals.bind(
      null,
      {start: new Date(Date.UTC(2016, 10, 7)), end: new Date(Date.UTC(2016, 10, 3))},
      {start: new Date(Date.UTC(2016, 10, 5)), end: new Date(Date.UTC(2016, 10, 15))}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date of the compared time interval is after the end date', function () {
    var block = getOverlappingDaysInIntervals.bind(
      null,
      {start: new Date(Date.UTC(2016, 10, 3)), end: new Date(Date.UTC(2016, 10, 7))},
      {start: new Date(Date.UTC(2016, 10, 15)), end: new Date(Date.UTC(2016, 10, 5))}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the initial interval is undefined', function () {
    var block = getOverlappingDaysInIntervals.bind(
      null,
      // $ExpectedMistake
      undefined,
      {start: new Date(Date.UTC(2016, 10, 5)), end: new Date(Date.UTC(2016, 10, 15))}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the compared interval is undefined', function () {
    var block = getOverlappingDaysInIntervals.bind(
      null,
      {start: new Date(Date.UTC(2016, 10, 3)), end: new Date(Date.UTC(2016, 10, 7))},
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  context('one of the dates is `Invalid Date`', function () {
    it('throws an exception if the start date of the initial time interval is `Invalid Date`', function () {
      var block = getOverlappingDaysInIntervals.bind(
        null,
        {start: new Date(NaN), end: new Date(Date.UTC(2016, 10, 3))},
        {start: new Date(Date.UTC(2016, 10, 5)), end: new Date(Date.UTC(2016, 10, 15))}
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the initial time interval is `Invalid Date`', function () {
      var block = getOverlappingDaysInIntervals.bind(
        null,
        {start: new Date(Date.UTC(2016, 10, 3)), end: new Date(NaN)},
        {start: new Date(Date.UTC(2016, 10, 5)), end: new Date(Date.UTC(2016, 10, 15))}
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the start date of the compared time interval is `Invalid Date`', function () {
      var block = getOverlappingDaysInIntervals.bind(
        null,
        {start: new Date(Date.UTC(2016, 10, 3)), end: new Date(Date.UTC(2016, 10, 7))},
        {start: new Date(NaN), end: new Date(Date.UTC(2016, 10, 5))}
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the compared time interval is `Invalid Date`', function () {
      var block = getOverlappingDaysInIntervals.bind(
        null,
        {start: new Date(Date.UTC(2016, 10, 3)), end: new Date(Date.UTC(2016, 10, 7))},
        {start: new Date(Date.UTC(2016, 10, 5)), end: new Date(NaN)}
      )
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var earlierIntervalStart = new Date(Date.UTC(2016, 9, 25))
    var earlierIntervalEnd = new Date(Date.UTC(2016, 10, 9))

    var block = getOverlappingDaysInIntervals.bind(
      null,
      {start: initialIntervalStart, end: initialIntervalEnd},
      {start: earlierIntervalStart, end: earlierIntervalEnd},
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(getOverlappingDaysInIntervals.bind(null), TypeError)
    // $ExpectedMistake
    assert.throws(getOverlappingDaysInIntervals.bind(null, 1), TypeError)
  })
})
