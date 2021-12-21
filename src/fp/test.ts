// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as fp from '.'

describe('FP functions', function () {
  it('addDays', function () {
    const result = fp.addDays(10)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('addHours', function () {
    const result = fp.addHours(2)(new Date(2014, 6 /* Jul */, 10, 23, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('addISOWeekYears', function () {
    const result = fp.addISOWeekYears(5)(new Date(2010, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('addMilliseconds', function () {
    const result = fp.addMilliseconds(750)(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750))
  })

  it('addMinutes', function () {
    const result = fp.addMinutes(30)(new Date(2014, 6 /* Jul */, 10, 12, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('addMonths', function () {
    const result = fp.addMonths(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 1))
  })

  it('addQuarters', function () {
    const result = fp.addQuarters(1)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('addSeconds', function () {
    const result = fp.addSeconds(30)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('addWeeks', function () {
    const result = fp.addWeeks(4)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('addYears', function () {
    const result = fp.addYears(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('areIntervalsOverlapping', function () {
    const leftInterval = {
      start: new Date(2016, 10, 10, 13, 0, 0),
      end: new Date(2016, 11, 3, 15, 0, 0),
    }
    const rightInterval = {
      start: new Date(2016, 10, 14),
      end: new Date(2016, 10, 14),
    }

    const result = fp.areIntervalsOverlapping(rightInterval)(leftInterval)
    assert(result === true)
  })

  it('closestIndexTo', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = fp.closestIndexTo([
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ])(date)
    assert.equal(result, 0)
  })

  it('closestTo', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = fp.closestTo([
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ])(date)
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('compareAsc', function () {
    const result = fp.compareAsc(new Date(1989, 6 /* Jul */, 10))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === -1)
  })

  it('compareDesc', function () {
    const result = fp.compareDesc(new Date(1989, 6 /* Jul */, 10))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === 1)
  })

  it('differenceInCalendarDays', function () {
    const result = fp.differenceInCalendarDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 366)
  })

  it('differenceInCalendarISOWeeks', function () {
    const result = fp.differenceInCalendarISOWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )(new Date(2014, 6 /* Jul */, 8, 18, 0))
    assert(result === 2)
  })

  it('differenceInCalendarISOWeekYears', function () {
    const result = fp.differenceInCalendarISOWeekYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 1)
  })

  it('differenceInCalendarMonths', function () {
    const result = fp.differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 12)
  })

  it('differenceInCalendarQuarters', function () {
    const result = fp.differenceInCalendarQuarters(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 4)
  })

  it('differenceInCalendarWeeks', function () {
    const result = fp.differenceInCalendarWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )(new Date(2014, 6 /* Jul */, 8, 18, 0))
    assert(result === 1)
  })

  it('differenceInCalendarWeeksWithOptions', function () {
    const result = fp.differenceInCalendarWeeksWithOptions({ weekStartsOn: 1 })(
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )(new Date(2014, 6 /* Jul */, 8, 18, 0))
    assert(result === 2)
  })

  it('differenceInCalendarYears', function () {
    const result = fp.differenceInCalendarYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 1)
  })

  it('differenceInDays', function () {
    const result = fp.differenceInDays(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 366)
  })

  it('differenceInHours', function () {
    const result = fp.differenceInHours(new Date(2014, 6 /* Jul */, 2, 6, 0))(
      new Date(2014, 6 /* Jul */, 2, 20, 0)
    )
    assert(result === 14)
  })

  it('differenceInISOWeekYears', function () {
    const result = fp.differenceInISOWeekYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 1)
  })

  it('differenceInMilliseconds', function () {
    const result = fp.differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600)
    )(new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700))
    assert(result === 100)
  })

  it('differenceInMinutes', function () {
    const result = fp.differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 6)
    )(new Date(2014, 6 /* Jul */, 2, 12, 20))
    assert(result === 14)
  })

  it('differenceInMonths', function () {
    const result = fp.differenceInMonths(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 12)
  })

  it('differenceInQuarters', function () {
    const result = fp.differenceInQuarters(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 4)
  })

  it('differenceInSeconds', function () {
    const result = fp.differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6)
    )(new Date(2014, 6 /* Jul */, 2, 12, 30, 20))
    assert(result === 14)
  })

  it('differenceInWeeks', function () {
    const result = fp.differenceInWeeks(new Date(2014, 5 /* Jun */, 29, 6, 0))(
      new Date(2014, 6 /* Jul */, 8, 18, 0)
    )
    assert(result === 1)
  })

  it('differenceInYears', function () {
    const result = fp.differenceInYears(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 1)
  })

  it('eachDayOfInterval', function () {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12),
    }
    const result = fp.eachDayOfInterval(interval)
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ])
  })

  it('eachWeekOfInterval', function () {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23),
    }
    const result = fp.eachWeekOfInterval(interval)
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23),
    ])
  })

  it('eachWeekOfIntervalWithOptions', function () {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23),
    }
    const result = fp.eachWeekOfIntervalWithOptions({ weekStartsOn: 2 })(
      interval
    )
    assert.deepEqual(result, [
      new Date(2014, 8 /* Sep */, 30),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 14),
      new Date(2014, 9 /* Oct */, 21),
      new Date(2014, 9 /* Oct */, 28),
      new Date(2014, 10 /* Nov */, 4),
      new Date(2014, 10 /* Nov */, 11),
      new Date(2014, 10 /* Nov */, 18),
    ])
  })

  it('endOfDay', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfDay(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999))
  })

  it('endOfHour', function () {
    const date = new Date(2014, 11, 1, 22, 15)
    const result = fp.endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('endOfISOWeek', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999))
  })

  it('endOfISOWeekYear', function () {
    const result = fp.endOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999))
  })

  it('endOfMinute', function () {
    const date = new Date(2014, 11, 1, 22, 15)
    const result = fp.endOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('endOfMonth', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('endOfQuarter', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('endOfSecond', function () {
    const date = new Date(2014, 11, 1, 22, 15, 30)
    const result = fp.endOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('endOfWeek', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999))
  })

  it('endOfWeekWithOptions', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfWeekWithOptions({ weekStartsOn: 2 })(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8, 23, 59, 59, 999))
  })

  it('endOfYear', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.endOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999))
  })

  it('format', function () {
    const date = new Date(2014, 3, 4)
    const result = fp.format('yyyy-MM-dd')(date)
    assert(result === '2014-04-04')
  })

  it('formatWithOptions', function () {
    const date = new Date(2014, 3, 4)
    const result = fp.formatWithOptions({})('yyyy-MM-dd')(date)
    assert(result === '2014-04-04')
  })

  it('formatDistance', function () {
    const result = fp.formatDistance(new Date(1986, 3, 4, 10, 34, 50))(
      new Date(1986, 3, 4, 10, 32, 0)
    )
    assert(result === '3 minutes')
  })

  it('formatDistanceWithOptions', function () {
    const result = fp.formatDistanceWithOptions({ includeSeconds: true })(
      new Date(1986, 3, 4, 10, 32, 3)
    )(new Date(1986, 3, 4, 10, 32, 0))
    assert(result === 'less than 5 seconds')
  })

  it('formatDistanceStrict', function () {
    const result = fp.formatDistanceStrict(new Date(1986, 3, 7, 10, 32, 0))(
      new Date(1986, 3, 4, 10, 32, 0)
    )
    assert(result === '3 days')
  })

  it('formatDistanceStrictWithOptions', function () {
    const result = fp.formatDistanceStrictWithOptions({ addSuffix: true })(
      new Date(1986, 3, 4, 10, 32, 0)
    )(new Date(1986, 3, 4, 11, 32, 0))
    assert(result === 'in 1 hour')
  })

  it('formatRelative', function () {
    const result = fp.formatRelative(new Date(1986, 3 /* Apr */, 4, 10, 32))(
      new Date(1986, 2 /* Mar */, 28, 16, 50)
    )
    assert(result === '03/28/1986')
  })

  it('formatRelativeWithOptions', function () {
    const result = fp.formatRelativeWithOptions({})(
      new Date(1986, 3 /* Apr */, 4, 10, 32)
    )(new Date(1986, 2 /* Mar */, 28, 16, 50))
    assert(result === '03/28/1986')
  })

  it('fromUnixTime', function () {
    const result = fp.fromUnixTime(1330515499)
    assert(result.getTime() === 1330515499000)
  })

  it('getDate', function () {
    const result = fp.getDate(new Date(2012, 1 /* Feb */, 29))
    assert(result === 29)
  })

  it('getDay', function () {
    const result = fp.getDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('getDayOfYear', function () {
    const result = fp.getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('getDaysInMonth', function () {
    const result = fp.getDaysInMonth(new Date(2100, 1 /* Feb */, 11))
    assert(result === 28)
  })

  it('getDaysInYear', function () {
    const result = fp.getDaysInYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === 366)
  })

  it('getHours', function () {
    const result = fp.getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    assert(result === 11)
  })

  it('getISODay', function () {
    const result = fp.getISODay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('getISOWeek', function () {
    const result = fp.getISOWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 53)
  })

  it('getISOWeeksInYear', function () {
    const result = fp.getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))
    assert(result === 53)
  })

  it('getISOWeekYear', function () {
    const result = fp.getISOWeekYear(new Date(2007, 11 /* Dec */, 31))
    assert(result === 2008)
  })

  it('getMilliseconds', function () {
    const result = fp.getMilliseconds(
      new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123)
    )
    assert(result === 123)
  })

  it('getMinutes', function () {
    const result = fp.getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5))
    assert(result === 45)
  })

  it('getMonth', function () {
    const result = fp.getMonth(new Date(2012, 1 /* Feb */, 29))
    assert(result === 1)
  })

  it('getOverlappingDaysInIntervals', function () {
    const leftInterval = {
      start: new Date(2016, 10, 10, 13, 0, 0),
      end: new Date(2016, 11, 3, 15, 0, 0),
    }
    const rightInterval = {
      start: new Date(2016, 10, 5),
      end: new Date(2016, 11, 15),
    }
    const numOverlappingDays = fp.getOverlappingDaysInIntervals(rightInterval)(
      leftInterval
    )
    assert(numOverlappingDays === 24)
  })

  it('getQuarter', function () {
    const result = fp.getQuarter(new Date(2014, 6 /* Jul */, 2))
    assert(result === 3)
  })

  it('getSeconds', function () {
    const result = fp.getSeconds(
      new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123)
    )
    assert(result === 5)
  })

  it('getTime', function () {
    const timestamp = 1483228800000
    const result = fp.getTime(new Date(timestamp))
    assert(result === timestamp)
  })

  it('getWeek', function () {
    const result = fp.getWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 2)
  })

  it('getWeeksInMonth', function () {
    const result = fp.getWeeksInMonth(new Date(2017, 3 /* Apr */, 8, 18, 0))
    assert(result === 6)
  })

  it('getWeeksInMonthWithOptions', function () {
    const result = fp.getWeeksInMonthWithOptions({})(
      new Date(2017, 3 /* Apr */, 8, 18, 0)
    )
    assert(result === 6)
  })

  it('getWeekOfMonth', function () {
    const result = fp.getWeekOfMonth(new Date(2017, 10 /* Nov */, 15))
    assert(result === 3)
  })

  it('getWeekOfMonthWithOptions', function () {
    const result = fp.getWeekOfMonthWithOptions({ weekStartsOn: 1 })(
      new Date(2017, 9 /* Oct */, 1)
    )
    assert(result === 1)
  })

  it('getWeekYear', function () {
    const result = fp.getWeekYear(new Date(2004, 11 /* Dec */, 26))
    assert(result === 2005)
  })

  it('getWeekYearWithOptions', function () {
    const result = fp.getWeekYearWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    })(new Date(2004, 11 /* Dec */, 26))
    assert(result === 2004)
  })

  it('getYear', function () {
    const result = fp.getYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 2014)
  })

  it('isAfter', function () {
    const result = fp.isAfter(new Date(1987, 1 /* Feb */, 11))(
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === true)
  })

  it('isBefore', function () {
    const result = fp.isBefore(new Date(1989, 6 /* Jul */, 10))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('isEqual', function () {
    const result = fp.isEqual(new Date(1987, 1 /* Feb */, 11))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('isFirstDayOfMonth', function () {
    const result = fp.isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    assert(result === true)
  })

  it('isFriday', function () {
    const result = fp.isFriday(new Date(2014, 8 /* Sep */, 26))
    assert(result === true)
  })

  it('isLastDayOfMonth', function () {
    const result = fp.isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('isLeapYear', function () {
    const result = fp.isLeapYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('isMonday', function () {
    const result = fp.isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('isSameDay', function () {
    const result = fp.isSameDay(new Date(2014, 8 /* Sep */, 4, 18, 0))(
      new Date(2014, 8 /* Sep */, 4, 6, 0)
    )
    assert(result === true)
  })

  it('isSameHour', function () {
    const result = fp.isSameHour(new Date(2014, 8 /* Sep */, 4, 6, 30))(
      new Date(2014, 8 /* Sep */, 4, 6, 0)
    )
    assert(result === true)
  })

  it('isSameISOWeek', function () {
    const result = fp.isSameISOWeek(new Date(2014, 8 /* Sep */, 7))(
      new Date(2014, 8 /* Sep */, 1)
    )
    assert(result === true)
  })

  it('isSameISOWeekYear', function () {
    const result = fp.isSameISOWeekYear(new Date(2005, 0 /* Jan */, 2))(
      new Date(2003, 11 /* Dec */, 29)
    )
    assert(result === true)
  })

  it('isSameMinute', function () {
    const result = fp.isSameMinute(new Date(2014, 8 /* Sep */, 4, 6, 30, 15))(
      new Date(2014, 8 /* Sep */, 4, 6, 30)
    )
    assert(result === true)
  })

  it('isSameMonth', function () {
    const result = fp.isSameMonth(new Date(2014, 8 /* Sep */, 25))(
      new Date(2014, 8 /* Sep */, 2)
    )
    assert(result === true)
  })

  it('isSameQuarter', function () {
    const result = fp.isSameQuarter(new Date(2014, 2 /* Mar */, 8))(
      new Date(2014, 0 /* Jan */, 1)
    )
    assert(result === true)
  })

  it('isSameSecond', function () {
    const result = fp.isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )(new Date(2014, 8 /* Sep */, 4, 6, 30, 15))
    assert(result === true)
  })

  it('isSameWeek', function () {
    const result = fp.isSameWeek(new Date(2014, 8 /* Sep */, 4))(
      new Date(2014, 7 /* Aug */, 31)
    )
    assert(result === true)
  })

  it('isSameWeekWithOptions', function () {
    const result = fp.isSameWeekWithOptions({ weekStartsOn: 1 })(
      new Date(2014, 8 /* Sep */, 4)
    )(new Date(2014, 7 /* Aug */, 31))
    assert(result === false)
  })

  it('isSameYear', function () {
    const result = fp.isSameYear(new Date(2014, 8 /* Sep */, 25))(
      new Date(2014, 8 /* Sep */, 2)
    )
    assert(result === true)
  })

  it('isSaturday', function () {
    const result = fp.isSaturday(new Date(2014, 8 /* Sep */, 27))
    assert(result === true)
  })

  it('isSunday', function () {
    const result = fp.isSunday(new Date(2014, 8 /* Sep */, 21))
    assert(result === true)
  })

  it('isThursday', function () {
    const result = fp.isThursday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('isTuesday', function () {
    const result = fp.isTuesday(new Date(2014, 8 /* Sep */, 23))
    assert(result === true)
  })

  it('isValid', function () {
    const result = fp.isValid(new Date())
    assert(result === true)
  })

  it('isWednesday', function () {
    const result = fp.isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('isWeekend', function () {
    const result = fp.isWeekend(new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('isWithinInterval', function () {
    const interval = {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    }
    const result = fp.isWithinInterval(interval)(
      new Date(2014, 9 /* Oct */, 31)
    )
    assert(result === true)
  })

  it('lastDayOfISOWeek', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.lastDayOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('lastDayOfISOWeekYear', function () {
    const result = fp.lastDayOfISOWeekYear(
      new Date(2009, 0 /* Jan */, 1, 16, 0)
    )
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3))
  })

  it('lastDayOfMonth', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.lastDayOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('lastDayOfQuarter', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.lastDayOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('lastDayOfWeek', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.lastDayOfWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 6))
  })

  it('lastDayOfWeekWithOptions', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.lastDayOfWeekWithOptions({ weekStartsOn: 1 })(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('lastDayOfYear', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.lastDayOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31))
  })

  it('max', function () {
    const result = fp.max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    ])
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('min', function () {
    const result = fp.min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    ])
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('parse', function () {
    const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
    const result = fp.parse(baseDate)("yyyyMMdd'T'HHmmss")('20161105T040404')
    assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
  })

  it('parseWithOptions', function () {
    const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
    const result = fp.parseWithOptions({})(baseDate)("yyyyMMdd'T'HHmmss")(
      '20161105T040404'
    )
    assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
  })

  it('roundToNearestMinutes', function () {
    const result = fp.roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 11, 34, 99)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 12))
  })

  it('roundToNearestMinutesWithOptions', function () {
    const resultA = fp.roundToNearestMinutesWithOptions({ nearestTo: 5 })(
      new Date(2014, 6 /* Jul */, 10, 12, 11, 34, 99)
    )
    assert.deepEqual(resultA, new Date(2014, 6 /* Jul */, 10, 12, 10))

    const resultB = fp.roundToNearestMinutesWithOptions({})(
      new Date(2014, 6 /* Jul */, 10, 12, 11, 34, 99)
    )
    assert.deepEqual(resultB, new Date(2014, 6 /* Jul */, 10, 12, 12))
  })

  it('setDate', function () {
    const result = fp.setDate(30)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('setDay', function () {
    const result = fp.setDay(0)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('setDayOfYear', function () {
    const result = fp.setDayOfYear(2)(new Date(2014, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('setHours', function () {
    const result = fp.setHours(4)(new Date(2014, 8 /* Sep */, 1, 11, 30))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('setISODay', function () {
    const result = fp.setISODay(3)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('setISOWeek', function () {
    const result = fp.setISOWeek(53)(new Date(2004, 7 /* Aug */, 7))
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('setISOWeekYear', function () {
    const result = fp.setISOWeekYear(2007)(new Date(2008, 11 /* Dec */, 29))
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('setMilliseconds', function () {
    const result = fp.setMilliseconds(300)(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('setMinutes', function () {
    const result = fp.setMinutes(45)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('setMonth', function () {
    const result = fp.setMonth(1)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('setQuarter', function () {
    const result = fp.setQuarter(1)(new Date(2014, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('setSeconds', function () {
    const result = fp.setSeconds(45)(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('setWeek', function () {
    const result = fp.setWeek(1)(new Date(2005, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26))
  })

  it('setWeekWithOptions', function () {
    const result = fp.setWeekWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    })(1)(new Date(2005, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 4))
  })

  it('setWeekYear', function () {
    const result = fp.setWeekYear(2004)(new Date(2010, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 3))
  })

  it('setWeekYearWithOptions', function () {
    const result = fp.setWeekYearWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    })(2004)(new Date(2010, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('setYear', function () {
    const result = fp.setYear(2013)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('startOfDay', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfDay(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0))
  })

  it('startOfHour', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    const result = fp.startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('startOfISOWeek', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('startOfISOWeekYear', function () {
    const result = fp.startOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('startOfMinute', function () {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    const result = fp.startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('startOfMonth', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('startOfQuarter', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('startOfSecond', function () {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    const result = fp.startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('startOfWeek', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('startOfWeekWithOptions', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfWeekWithOptions({ weekStartsOn: 1 })(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('startOfWeekYear', function () {
    const result = fp.startOfWeekYear(new Date(2005, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
  })

  it('startOfWeekYearWithOptions', function () {
    const result = fp.startOfWeekYearWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    })(new Date(2005, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
  })

  it('startOfYear', function () {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = fp.startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('subDays', function () {
    const result = fp.subDays(10)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('subHours', function () {
    const result = fp.subHours(2)(new Date(2014, 6 /* Jul */, 11, 1, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('subISOWeekYears', function () {
    const result = fp.subISOWeekYears(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2009, 7 /* Aug */, 31))
  })

  it('subMilliseconds', function () {
    const result = fp.subMilliseconds(750)(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('subMinutes', function () {
    const result = fp.subMinutes(30)(new Date(2014, 6 /* Jul */, 10, 12, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30))
  })

  it('subMonths', function () {
    const result = fp.subMonths(5)(new Date(2015, 1 /* Feb */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('subQuarters', function () {
    const result = fp.subQuarters(3)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('subSeconds', function () {
    const result = fp.subSeconds(30)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('subWeeks', function () {
    const result = fp.subWeeks(4)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('subYears', function () {
    const result = fp.subYears(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2009, 8 /* Sep */, 1))
  })

  it('parseISO', function () {
    const result = fp.parseISO('2014-10-25T13:46:20+07:00')
    assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
  })

  it('parseISOWithOptions', function () {
    const result = fp.parseISOWithOptions({ additionalDigits: 0 })('+12340702')
    assert.deepEqual(result, new Date(1234, 6 /* Jul */, 2))
  })
})
