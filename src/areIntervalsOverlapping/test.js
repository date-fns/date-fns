// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import areIntervalsOverlapping from '.'

describe('areIntervalsOverlapping', function () {
  var initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0)
  var initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0)

  context('when the time intervals don\'t overlap', function () {
    it('returns false for a valid non overlapping interval before another interval', function () {
      var earlierIntervalStart = new Date(2016, 9, 25)
      var earlierIntervalEnd = new Date(2016, 10, 9)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: earlierIntervalStart, end: earlierIntervalEnd}
      )
      assert(isOverlapping === false)
    })

    it('returns false for a valid non overlapping interval after another interval', function () {
      var laterIntervalStart = new Date(2016, 11, 4)
      var laterIntervalEnd = new Date(2016, 11, 9)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: laterIntervalStart, end: laterIntervalEnd}
      )
      assert(isOverlapping === false)
    })

    it('returns false for a non overlapping same-day interval', function () {
      var sameDayIntervalStart = new Date(2016, 11, 4, 9, 0, 0)
      var sameDayIntervalEnd = new Date(2016, 11, 4, 18, 0, 0)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: sameDayIntervalStart, end: sameDayIntervalEnd}
      )
      assert(isOverlapping === false)
    })

    it('returns false for an interval differing by a few hours', function () {
      var oneDayOverlappingIntervalStart = new Date(2016, 11, 3, 18, 0, 0)
      var oneDayOverlappingIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: oneDayOverlappingIntervalStart, end: oneDayOverlappingIntervalEnd}
      )
      assert(isOverlapping === false)
    })

    it('returns false for an interval with the same startDateTime as the initial time intervals\'s endDateTime', function () {
      var oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0)
      var oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd}
      )
      assert(isOverlapping === false)
    })

    it('returns false for an interval with the same endDateTime as the initial time interval\'s startDateTime', function () {
      var oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0)
      var oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd}
      )
      assert(isOverlapping === false)
    })
  })

  context('when the time intervals overlap', function () {
    it('returns true for an interval included within another interval', function () {
      var includedIntervalStart = new Date(2016, 10, 14)
      var includedIntervalEnd = new Date(2016, 10, 14)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: includedIntervalStart, end: includedIntervalEnd}
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval overlapping at the end', function () {
      var endOverlappingIntervalStart = new Date(2016, 10, 5)
      var endOverlappingIntervalEnd = new Date(2016, 10, 14)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd}
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval overlapping at the beginning', function () {
      var startOverlappingIntervalStart = new Date(2016, 10, 20)
      var startOverlappingIntervalEnd = new Date(2016, 11, 14)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: startOverlappingIntervalStart, end: startOverlappingIntervalEnd}
      )
      assert(isOverlapping === true)
    })

    it('returns true for an interval including another interval', function () {
      var includingIntervalStart = new Date(2016, 10, 5)
      var includingIntervalEnd = new Date(2016, 11, 15)

      var isOverlapping = areIntervalsOverlapping(
        {start: initialIntervalStart, end: initialIntervalEnd},
        {start: includingIntervalStart, end: includingIntervalEnd}
      )
      assert(isOverlapping === true)
    })
  })

  it('accepts strings', function () {
    var initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0).toISOString()
    var initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0).toISOString()

    var endOverlappingIntervalStart = new Date(2016, 10, 5).toISOString()
    var endOverlappingIntervalEnd = new Date(2016, 10, 14).toISOString()

    var isOverlapping = areIntervalsOverlapping(
      {start: initialIntervalStart, end: initialIntervalEnd},
      {start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd}
    )
    assert(isOverlapping === true)
  })

  it('accepts timestamp', function () {
    var initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0).getTime()
    var initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0).getTime()

    var endOverlappingIntervalStart = new Date(2016, 10, 5).getTime()
    var endOverlappingIntervalEnd = new Date(2016, 10, 14).getTime()

    var isOverlapping = areIntervalsOverlapping(
      {start: initialIntervalStart, end: initialIntervalEnd},
      {start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd}
    )
    assert(isOverlapping === true)
  })

  it('throws an exception if the start date of the initial time interval is after the end date', function () {
    var block = areIntervalsOverlapping.bind(
      null,
      {start: new Date(2016, 10, 7), end: new Date(2016, 10, 3)},
      {start: new Date(2016, 10, 5), end: new Date(2016, 10, 15)}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date of the compared time interval is after the end date', function () {
    var block = areIntervalsOverlapping.bind(
      null,
      {start: new Date(2016, 10, 3), end: new Date(2016, 10, 7)},
      {start: new Date(2016, 10, 15), end: new Date(2016, 10, 5)}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the initial interval is undefined', function () {
    var block = areIntervalsOverlapping.bind(
      null,
      // $ExpectedMistake
      undefined,
      {start: new Date(2016, 10, 5), end: new Date(2016, 10, 15)}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the compared interval is undefined', function () {
    var block = areIntervalsOverlapping.bind(
      null,
      {start: new Date(2016, 10, 3), end: new Date(2016, 10, 7)},
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  context('one of the dates is `Invalid Date`', function () {
    it('throws an exception if the start date of the initial time interval is `Invalid Date`', function () {
      var block = areIntervalsOverlapping.bind(
        null,
        {start: new Date(NaN), end: new Date(2016, 10, 3)},
        {start: new Date(2016, 10, 5), end: new Date(2016, 10, 15)}
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the initial time interval is `Invalid Date`', function () {
      var block = areIntervalsOverlapping.bind(
        null,
        {start: new Date(2016, 10, 3), end: new Date(NaN)},
        {start: new Date(2016, 10, 5), end: new Date(2016, 10, 15)}
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the start date of the compared time interval is `Invalid Date`', function () {
      var block = areIntervalsOverlapping.bind(
        null,
        {start: new Date(2016, 10, 3), end: new Date(2016, 10, 7)},
        {start: new Date(NaN), end: new Date(2016, 10, 5)}
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the compared time interval is `Invalid Date`', function () {
      var block = areIntervalsOverlapping.bind(
        null,
        {start: new Date(2016, 10, 3), end: new Date(2016, 10, 7)},
        {start: new Date(2016, 10, 5), end: new Date(NaN)}
      )
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var earlierIntervalStart = new Date(2016, 9, 25)
    var earlierIntervalEnd = new Date(2016, 10, 9)

    var block = areIntervalsOverlapping.bind(
      null,
      {start: initialIntervalStart, end: initialIntervalEnd},
      {start: earlierIntervalStart, end: earlierIntervalEnd},
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(areIntervalsOverlapping.bind(null), TypeError)
    // $ExpectedMistake
    assert.throws(areIntervalsOverlapping.bind(null, 1), TypeError)
  })
})
