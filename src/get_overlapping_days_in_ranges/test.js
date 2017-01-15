// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getOverlappingDaysInRanges from './'

describe('getOverlappingDaysInRanges', function () {
  var initialRangeStart = new Date(2016, 10, 10, 13, 0, 0)
  var initialRangeEnd = new Date(2016, 11, 3, 15, 0, 0)

  context('when the date ranges don\'t overlap', function () {
    it('returns 0 for a valid non overlapping range before another range', function () {
      var earlierRangeStart = new Date(2016, 9, 25)
      var earlierRangeEnd = new Date(2016, 10, 9)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: earlierRangeStart, end: earlierRangeEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a valid non overlapping range after another range', function () {
      var laterRangeStart = new Date(2016, 11, 4)
      var laterRangeEnd = new Date(2016, 11, 9)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: laterRangeStart, end: laterRangeEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a non overlapping same-day range', function () {
      var sameDayRangeStart = new Date(2016, 11, 4, 9, 0, 0)
      var sameDayRangeEnd = new Date(2016, 11, 4, 18, 0, 0)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: sameDayRangeStart, end: sameDayRangeEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a range differing by a few hours', function () {
      var oneDayOverlappingRangeStart = new Date(2016, 11, 3, 18, 0, 0)
      var oneDayOverlappingRangeEnd = new Date(2016, 11, 14, 13, 0, 0)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: oneDayOverlappingRangeStart, end: oneDayOverlappingRangeEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a range with the same startDateTime as the initial date ranges\'s endDateTime', function () {
      var oneDayOverlapRangeStart = new Date(2016, 11, 3, 15, 0, 0)
      var oneDayOverlapRangeEnd = new Date(2016, 11, 14, 13, 0, 0)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: oneDayOverlapRangeStart, end: oneDayOverlapRangeEnd}
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a range with the same endDateTime as the initial date range\'s startDateTime', function () {
      var oneDayOverlapRangeStart = new Date(2016, 10, 3, 15, 0, 0)
      var oneDayOverlapRangeEnd = new Date(2016, 10, 10, 13, 0, 0)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: oneDayOverlapRangeStart, end: oneDayOverlapRangeEnd}
      )
      assert(numOverlappingDays === 0)
    })
  })

  context('when the date ranges overlap', function () {
    it('rounds up the result to include each started overlapping day', function () {
      var includedRangeStart = new Date(2016, 10, 14, 9, 0, 0)
      var includedRangeEnd = new Date(2016, 10, 15, 18, 0, 0)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: includedRangeStart, end: includedRangeEnd}
      )
      assert(numOverlappingDays === 2)
    })

    it('returns the correct value for a range included within another range', function () {
      var includedRangeStart = new Date(2016, 10, 14)
      var includedRangeEnd = new Date(2016, 10, 15)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: includedRangeStart, end: includedRangeEnd}
      )
      assert(numOverlappingDays === 1)
    })

    it('returns the correct value for a range overlapping at the end', function () {
      var endOverlappingRangeStart = new Date(2016, 10, 5)
      var endOverlappingRangeEnd = new Date(2016, 10, 14)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: endOverlappingRangeStart, end: endOverlappingRangeEnd}
      )
      assert(numOverlappingDays === 4)
    })

    it('returns the correct value for a range overlapping at the beginning', function () {
      var startOverlappingRangeStart = new Date(2016, 10, 20)
      var startOverlappingRangeEnd = new Date(2016, 11, 14)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: startOverlappingRangeStart, end: startOverlappingRangeEnd}
      )
      assert(numOverlappingDays === 14)
    })

    it('returns the correct value for a range including another range', function () {
      var includingRangeStart = new Date(2016, 10, 5)
      var includingRangeEnd = new Date(2016, 11, 15)

      var numOverlappingDays = getOverlappingDaysInRanges(
        {start: initialRangeStart, end: initialRangeEnd},
        {start: includingRangeStart, end: includingRangeEnd}
      )
      assert(numOverlappingDays === 24)
    })
  })

  it('accepts strings', function () {
    var initialRangeStart = new Date(2016, 10, 10, 13, 0, 0).toISOString()
    var initialRangeEnd = new Date(2016, 11, 3, 15, 0, 0).toISOString()

    var endOverlappingRangeStart = new Date(2016, 10, 5).toISOString()
    var endOverlappingRangeEnd = new Date(2016, 10, 14).toISOString()

    var numOverlappingDays = getOverlappingDaysInRanges(
      {start: initialRangeStart, end: initialRangeEnd},
      {start: endOverlappingRangeStart, end: endOverlappingRangeEnd}
    )
    assert(numOverlappingDays === 4)
  })

  it('accepts timestamp', function () {
    var initialRangeStart = new Date(2016, 10, 10, 13, 0, 0).getTime()
    var initialRangeEnd = new Date(2016, 11, 3, 15, 0, 0).getTime()

    var endOverlappingRangeStart = new Date(2016, 10, 5).getTime()
    var endOverlappingRangeEnd = new Date(2016, 10, 14).getTime()

    var numOverlappingDays = getOverlappingDaysInRanges(
      {start: initialRangeStart, end: initialRangeEnd},
      {start: endOverlappingRangeStart, end: endOverlappingRangeEnd}
    )
    assert(numOverlappingDays === 4)
  })

  it('throws an exception if the start date of the initial date range is after the end date', function () {
    var block = getOverlappingDaysInRanges.bind(
      null,
      {start: new Date(2016, 10, 7), end: new Date(2016, 10, 3)},
      {start: new Date(2016, 10, 5), end: new Date(2016, 10, 15)}
    )
    assert.throws(block)
  })

  it('throws an exception if the start date of the compared date range is after the end date', function () {
    var block = getOverlappingDaysInRanges.bind(
      null,
      {start: new Date(2016, 10, 3), end: new Date(2016, 10, 7)},
      {start: new Date(2016, 10, 15), end: new Date(2016, 10, 5)}
    )
    assert.throws(block)
  })
})
