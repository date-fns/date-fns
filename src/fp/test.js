// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import * as fp from '.'

describe('FP functions', function() {
  it('addDays', function() {
    var result = fp.addDays(10)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('addHours', function() {
    var result = fp.addHours(2)(new Date(2014, 6 /* Jul */, 10, 23, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 11, 1, 0))
  })

  it('addISOWeekYears', function() {
    var result = fp.addISOWeekYears(5)(new Date(2010, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2015, 5 /* Jun */, 26))
  })

  it('addMilliseconds', function() {
    var result = fp.addMilliseconds(750)(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750))
  })

  it('addMinutes', function() {
    var result = fp.addMinutes(30)(new Date(2014, 6 /* Jul */, 10, 12, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 30))
  })

  it('addMonths', function() {
    var result = fp.addMonths(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2015, 1 /* Feb */, 1))
  })

  it('addQuarters', function() {
    var result = fp.addQuarters(1)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('addSeconds', function() {
    var result = fp.addSeconds(30)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('addWeeks', function() {
    var result = fp.addWeeks(4)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('addYears', function() {
    var result = fp.addYears(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2019, 8 /* Sep */, 1))
  })

  it('areIntervalsOverlapping', function() {
    var leftInterval = {
      start: new Date(2016, 10, 10, 13, 0, 0),
      end: new Date(2016, 11, 3, 15, 0, 0)
    }
    var rightInterval = {
      start: new Date(2016, 10, 14),
      end: new Date(2016, 10, 14)
    }

    var result = fp.areIntervalsOverlapping(rightInterval)(leftInterval)
    assert(result === true)
  })

  it('closestIndexTo', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = fp.closestIndexTo([
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])(date)
    assert.equal(result, 0)
  })

  it('closestTo', function() {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = fp.closestTo([
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])(date)
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('compareAsc', function() {
    var result = fp.compareAsc(new Date(1989, 6 /* Jul */, 10))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === -1)
  })

  it('compareDesc', function() {
    var result = fp.compareDesc(new Date(1989, 6 /* Jul */, 10))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === 1)
  })

  it('differenceInCalendarDays', function() {
    var result = fp.differenceInCalendarDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 366)
  })

  it('differenceInCalendarISOWeeks', function() {
    var result = fp.differenceInCalendarISOWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )(new Date(2014, 6 /* Jul */, 8, 18, 0))
    assert(result === 2)
  })

  it('differenceInCalendarISOWeekYears', function() {
    var result = fp.differenceInCalendarISOWeekYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 1)
  })

  it('differenceInCalendarMonths', function() {
    var result = fp.differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 12)
  })

  it('differenceInCalendarQuarters', function() {
    var result = fp.differenceInCalendarQuarters(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 4)
  })

  it('differenceInCalendarWeeks', function() {
    var result = fp.differenceInCalendarWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0)
    )(new Date(2014, 6 /* Jul */, 8, 18, 0))
    assert(result === 1)
  })

  it('differenceInCalendarWeeksWithOptions', function() {
    var result = fp.differenceInCalendarWeeksWithOptions({
      options: { weekStartsOn: 1 }
    })(new Date(2014, 5 /* Jun */, 29, 6, 0))(
      new Date(2014, 6 /* Jul */, 8, 18, 0)
    )
    assert(result === 2)
  })

  it('differenceInCalendarYears', function() {
    var result = fp.differenceInCalendarYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 1)
  })

  it('differenceInDays', function() {
    var result = fp.differenceInDays(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 366)
  })

  it('differenceInHours', function() {
    var result = fp.differenceInHours(new Date(2014, 6 /* Jul */, 2, 6, 0))(
      new Date(2014, 6 /* Jul */, 2, 20, 0)
    )
    assert(result === 14)
  })

  it('differenceInISOWeekYears', function() {
    var result = fp.differenceInISOWeekYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )(new Date(2012, 6 /* Jul */, 2, 18, 0))
    assert(result === 1)
  })

  it('differenceInMilliseconds', function() {
    var result = fp.differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600)
    )(new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700))
    assert(result === 100)
  })

  it('differenceInMinutes', function() {
    var result = fp.differenceInMinutes(new Date(2014, 6 /* Jul */, 2, 12, 6))(
      new Date(2014, 6 /* Jul */, 2, 12, 20)
    )
    assert(result === 14)
  })

  it('differenceInMonths', function() {
    var result = fp.differenceInMonths(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 12)
  })

  it('differenceInQuarters', function() {
    var result = fp.differenceInQuarters(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 4)
  })

  it('differenceInSeconds', function() {
    var result = fp.differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6)
    )(new Date(2014, 6 /* Jul */, 2, 12, 30, 20))
    assert(result === 14)
  })

  it('differenceInWeeks', function() {
    var result = fp.differenceInWeeks(new Date(2014, 5 /* Jun */, 29, 6, 0))(
      new Date(2014, 6 /* Jul */, 8, 18, 0)
    )
    assert(result === 1)
  })

  it('differenceInYears', function() {
    var result = fp.differenceInYears(new Date(2011, 6 /* Jul */, 2, 6, 0))(
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === 1)
  })

  it('eachDayOfInterval', function() {
    var interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12)
    }
    var result = fp.eachDayOfInterval(interval)
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('eachWeekOfInterval', function() {
    var interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23)
    }
    var result = fp.eachWeekOfInterval(interval)
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23)
    ])
  })

  it('eachWeekOfIntervalWithOptions', function() {
    var interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23)
    }
    var result = fp.eachWeekOfIntervalWithOptions({ weekStartsOn: 2 })(interval)
    assert.deepEqual(result, [
      new Date(2014, 8 /* Sep */, 30),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 14),
      new Date(2014, 9 /* Oct */, 21),
      new Date(2014, 9 /* Oct */, 28),
      new Date(2014, 10 /* Nov */, 4),
      new Date(2014, 10 /* Nov */, 11),
      new Date(2014, 10 /* Nov */, 18)
    ])
  })

  it('endOfDay', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfDay(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999))
  })

  it('endOfHour', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = fp.endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('endOfISOWeek', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999))
  })

  it('endOfISOWeekYear', function() {
    var result = fp.endOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999))
  })

  it('endOfMinute', function() {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = fp.endOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('endOfMonth', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('endOfQuarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999))
  })

  it('endOfSecond', function() {
    var date = new Date(2014, 11, 1, 22, 15, 30)
    var result = fp.endOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('endOfWeek', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999))
  })

  it('endOfWeekWithOptions', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfWeekWithOptions({ weekStartsOn: 2 })(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8, 23, 59, 59, 999))
  })

  it('endOfYear', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.endOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999))
  })

  it('format', function() {
    var date = new Date(2014, 3, 4)
    var result = fp.format('yyyy-MM-dd')(date)
    assert(result === '2014-04-04')
  })

  it('formatWithOptions', function() {
    var date = new Date(2014, 3, 4)
    var result = fp.formatWithOptions({})('yyyy-MM-dd')(date)
    assert(result === '2014-04-04')
  })

  it('formatDistance', function() {
    var result = fp.formatDistance(new Date(1986, 3, 4, 10, 34, 50))(
      new Date(1986, 3, 4, 10, 32, 0)
    )
    assert(result === '3 minutes')
  })

  it('formatDistanceWithOptions', function() {
    var result = fp.formatDistanceWithOptions({ includeSeconds: true })(
      new Date(1986, 3, 4, 10, 32, 3)
    )(new Date(1986, 3, 4, 10, 32, 0))
    assert(result === 'less than 5 seconds')
  })

  it('formatDistanceStrict', function() {
    var result = fp.formatDistanceStrict(new Date(1986, 3, 7, 10, 32, 0))(
      new Date(1986, 3, 4, 10, 32, 0)
    )
    assert(result === '3 days')
  })

  it('formatDistanceStrictWithOptions', function() {
    var result = fp.formatDistanceStrictWithOptions({ addSuffix: true })(
      new Date(1986, 3, 4, 10, 32, 0)
    )(new Date(1986, 3, 4, 11, 32, 0))
    assert(result === 'in 1 hour')
  })

  it('formatRelative', function() {
    var result = fp.formatRelative(new Date(1986, 3 /* Apr */, 4, 10, 32))(
      new Date(1986, 2 /* Mar */, 28, 16, 50)
    )
    assert(result === '03/28/1986')
  })

  it('formatRelativeWithOptions', function() {
    var result = fp.formatRelativeWithOptions({})(
      new Date(1986, 3 /* Apr */, 4, 10, 32)
    )(new Date(1986, 2 /* Mar */, 28, 16, 50))
    assert(result === '03/28/1986')
  })

  it('fromUnixTime', function() {
    var result = fp.fromUnixTime(1330515499)
    assert(result.getTime() === 1330515499000)
  })

  it('getDate', function() {
    var result = fp.getDate(new Date(2012, 1 /* Feb */, 29))
    assert(result === 29)
  })

  it('getDay', function() {
    var result = fp.getDay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('getDayOfYear', function() {
    var result = fp.getDayOfYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 183)
  })

  it('getDaysInMonth', function() {
    var result = fp.getDaysInMonth(new Date(2100, 1 /* Feb */, 11))
    assert(result === 28)
  })

  it('getDaysInYear', function() {
    var result = fp.getDaysInYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === 366)
  })

  it('getHours', function() {
    var result = fp.getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    assert(result === 11)
  })

  it('getISODay', function() {
    var result = fp.getISODay(new Date(2012, 1 /* Feb */, 29))
    assert(result === 3)
  })

  it('getISOWeek', function() {
    var result = fp.getISOWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 53)
  })

  it('getISOWeeksInYear', function() {
    var result = fp.getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))
    assert(result === 53)
  })

  it('getISOWeekYear', function() {
    var result = fp.getISOWeekYear(new Date(2007, 11 /* Dec */, 31))
    assert(result === 2008)
  })

  it('getMilliseconds', function() {
    var result = fp.getMilliseconds(
      new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123)
    )
    assert(result === 123)
  })

  it('getMinutes', function() {
    var result = fp.getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5))
    assert(result === 45)
  })

  it('getMonth', function() {
    var result = fp.getMonth(new Date(2012, 1 /* Feb */, 29))
    assert(result === 1)
  })

  it('getOverlappingDaysInIntervals', function() {
    var leftInterval = {
      start: new Date(2016, 10, 10, 13, 0, 0),
      end: new Date(2016, 11, 3, 15, 0, 0)
    }
    var rightInterval = {
      start: new Date(2016, 10, 5),
      end: new Date(2016, 11, 15)
    }
    var numOverlappingDays = fp.getOverlappingDaysInIntervals(rightInterval)(
      leftInterval
    )
    assert(numOverlappingDays === 24)
  })

  it('getQuarter', function() {
    var result = fp.getQuarter(new Date(2014, 6 /* Jul */, 2))
    assert(result === 3)
  })

  it('getSeconds', function() {
    var result = fp.getSeconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123))
    assert(result === 5)
  })

  it('getTime', function() {
    var timestamp = 1483228800000
    var result = fp.getTime(new Date(timestamp))
    assert(result === timestamp)
  })

  it('getWeek', function() {
    var result = fp.getWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 2)
  })

  it('getWeeksInMonth', function() {
    var result = fp.getWeeksInMonth(new Date(2017, 3 /* Apr */, 8, 18, 0))
    assert(result === 6)
  })

  it('getWeeksInMonthWithOptions', function() {
    var result = fp.getWeeksInMonthWithOptions({})(
      new Date(2017, 3 /* Apr */, 8, 18, 0)
    )
    assert(result === 6)
  })

  it('getWeekOfMonth', function() {
    var result = fp.getWeekOfMonth(new Date(2017, 10 /* Nov */, 15))
    assert(result === 3)
  })

  it('getWeekOfMonthWithOptions', function() {
    var result = fp.getWeekOfMonthWithOptions({ weekStartsOn: 1 })(
      new Date(2017, 9 /* Oct */, 1)
    )
    assert(result === 1)
  })

  it('getWeekYear', function() {
    var result = fp.getWeekYear(new Date(2004, 11 /* Dec */, 26))
    assert(result === 2005)
  })

  it('getWeekYearWithOptions', function() {
    var result = fp.getWeekYearWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4
    })(new Date(2004, 11 /* Dec */, 26))
    assert(result === 2004)
  })

  it('getYear', function() {
    var result = fp.getYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 2014)
  })

  it('isAfter', function() {
    var result = fp.isAfter(new Date(1987, 1 /* Feb */, 11))(
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === true)
  })

  it('isBefore', function() {
    var result = fp.isBefore(new Date(1989, 6 /* Jul */, 10))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('isEqual', function() {
    var result = fp.isEqual(new Date(1987, 1 /* Feb */, 11))(
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === true)
  })

  it('isFirstDayOfMonth', function() {
    var result = fp.isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    assert(result === true)
  })

  it('isFriday', function() {
    var result = fp.isFriday(new Date(2014, 8 /* Sep */, 26))
    assert(result === true)
  })

  it('isLastDayOfMonth', function() {
    var result = fp.isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('isLeapYear', function() {
    var result = fp.isLeapYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('isMonday', function() {
    var result = fp.isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('isSameDay', function() {
    var result = fp.isSameDay(new Date(2014, 8 /* Sep */, 4, 18, 0))(
      new Date(2014, 8 /* Sep */, 4, 6, 0)
    )
    assert(result === true)
  })

  it('isSameHour', function() {
    var result = fp.isSameHour(new Date(2014, 8 /* Sep */, 4, 6, 30))(
      new Date(2014, 8 /* Sep */, 4, 6, 0)
    )
    assert(result === true)
  })

  it('isSameISOWeek', function() {
    var result = fp.isSameISOWeek(new Date(2014, 8 /* Sep */, 7))(
      new Date(2014, 8 /* Sep */, 1)
    )
    assert(result === true)
  })

  it('isSameISOWeekYear', function() {
    var result = fp.isSameISOWeekYear(new Date(2005, 0 /* Jan */, 2))(
      new Date(2003, 11 /* Dec */, 29)
    )
    assert(result === true)
  })

  it('isSameMinute', function() {
    var result = fp.isSameMinute(new Date(2014, 8 /* Sep */, 4, 6, 30, 15))(
      new Date(2014, 8 /* Sep */, 4, 6, 30)
    )
    assert(result === true)
  })

  it('isSameMonth', function() {
    var result = fp.isSameMonth(new Date(2014, 8 /* Sep */, 25))(
      new Date(2014, 8 /* Sep */, 2)
    )
    assert(result === true)
  })

  it('isSameQuarter', function() {
    var result = fp.isSameQuarter(new Date(2014, 2 /* Mar */, 8))(
      new Date(2014, 0 /* Jan */, 1)
    )
    assert(result === true)
  })

  it('isSameSecond', function() {
    var result = fp.isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )(new Date(2014, 8 /* Sep */, 4, 6, 30, 15))
    assert(result === true)
  })

  it('isSameWeek', function() {
    var result = fp.isSameWeek(new Date(2014, 8 /* Sep */, 4))(
      new Date(2014, 7 /* Aug */, 31)
    )
    assert(result === true)
  })

  it('isSameWeekWithOptions', function() {
    var result = fp.isSameWeekWithOptions({ weekStartsOn: 1 })(
      new Date(2014, 8 /* Sep */, 4)
    )(new Date(2014, 7 /* Aug */, 31))
    assert(result === false)
  })

  it('isSameYear', function() {
    var result = fp.isSameYear(new Date(2014, 8 /* Sep */, 25))(
      new Date(2014, 8 /* Sep */, 2)
    )
    assert(result === true)
  })

  it('isSaturday', function() {
    var result = fp.isSaturday(new Date(2014, 8 /* Sep */, 27))
    assert(result === true)
  })

  it('isSunday', function() {
    var result = fp.isSunday(new Date(2014, 8 /* Sep */, 21))
    assert(result === true)
  })

  it('isThursday', function() {
    var result = fp.isThursday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('isTuesday', function() {
    var result = fp.isTuesday(new Date(2014, 8 /* Sep */, 23))
    assert(result === true)
  })

  it('isValid', function() {
    var result = fp.isValid(new Date())
    assert(result === true)
  })

  it('isWednesday', function() {
    var result = fp.isWednesday(new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('isWeekend', function() {
    var result = fp.isWeekend(new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('isWithinInterval', function() {
    var interval = {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31)
    }
    var result = fp.isWithinInterval(interval)(new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('lastDayOfISOWeek', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.lastDayOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('lastDayOfISOWeekYear', function() {
    var result = fp.lastDayOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2010, 0 /* Jan */, 3))
  })

  it('lastDayOfMonth', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.lastDayOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('lastDayOfQuarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.lastDayOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('lastDayOfWeek', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.lastDayOfWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 6))
  })

  it('lastDayOfWeekWithOptions', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.lastDayOfWeekWithOptions({ weekStartsOn: 1 })(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  it('lastDayOfYear', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.lastDayOfYear(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 31))
  })

  it('max', function() {
    var result = fp.max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('min', function() {
    var result = fp.min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('parse', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
    var result = fp.parse(baseDate)("yyyyMMdd'T'HHmmss")('20161105T040404')
    assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
  })

  it('parseWithOptions', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
    var result = fp.parseWithOptions({})(baseDate)("yyyyMMdd'T'HHmmss")(
      '20161105T040404'
    )
    assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
  })

  it('roundToNearestMinutes', function() {
    var result = fp.roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 11, 34, 99)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 12))
  })

  it('roundToNearestMinutesWithOptions', function() {
    const resultA = fp.roundToNearestMinutesWithOptions({ nearestTo: 5 })(
      new Date(2014, 6 /* Jul */, 10, 12, 11, 34, 99)
    )
    assert.deepEqual(resultA, new Date(2014, 6 /* Jul */, 10, 12, 10))

    const resultB = fp.roundToNearestMinutesWithOptions({})(
      new Date(2014, 6 /* Jul */, 10, 12, 11, 34, 99)
    )
    assert.deepEqual(resultB, new Date(2014, 6 /* Jul */, 10, 12, 12))
  })

  it('setDate', function() {
    var result = fp.setDate(30)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('setDay', function() {
    var result = fp.setDay(0)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('setDayOfYear', function() {
    var result = fp.setDayOfYear(2)(new Date(2014, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('setHours', function() {
    var result = fp.setHours(4)(new Date(2014, 8 /* Sep */, 1, 11, 30))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('setISODay', function() {
    var result = fp.setISODay(3)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('setISOWeek', function() {
    var result = fp.setISOWeek(53)(new Date(2004, 7 /* Aug */, 7))
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('setISOWeekYear', function() {
    var result = fp.setISOWeekYear(2007)(new Date(2008, 11 /* Dec */, 29))
    assert.deepEqual(result, new Date(2007, 0 /* Jan */, 1))
  })

  it('setMilliseconds', function() {
    var result = fp.setMilliseconds(300)(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('setMinutes', function() {
    var result = fp.setMinutes(45)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('setMonth', function() {
    var result = fp.setMonth(1)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
  })

  it('setQuarter', function() {
    var result = fp.setQuarter(1)(new Date(2014, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('setSeconds', function() {
    var result = fp.setSeconds(45)(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('setWeek', function() {
    var result = fp.setWeek(1)(new Date(2005, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26))
  })

  it('setWeekWithOptions', function() {
    var result = fp.setWeekWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4
    })(1)(new Date(2005, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 4))
  })

  it('setWeekYear', function() {
    var result = fp.setWeekYear(2004)(new Date(2010, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2004, 0 /* Jan */, 3))
  })

  it('setWeekYearWithOptions', function() {
    var result = fp.setWeekYearWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4
    })(2004)(new Date(2010, 0 /* Jan */, 2))
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('setYear', function() {
    var result = fp.setYear(2013)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('startOfDay', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfDay(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0))
  })

  it('startOfHour', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    var result = fp.startOfHour(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('startOfISOWeek', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfISOWeek(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('startOfISOWeekYear', function() {
    var result = fp.startOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0))
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0))
  })

  it('startOfMinute', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = fp.startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('startOfMonth', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfMonth(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('startOfQuarter', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfQuarter(date)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 1))
  })

  it('startOfSecond', function() {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = fp.startOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('startOfWeek', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfWeek(date)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('startOfWeekWithOptions', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfWeekWithOptions({ weekStartsOn: 1 })(date)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('startOfWeekYear', function() {
    var result = fp.startOfWeekYear(new Date(2005, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0))
  })

  it('startOfWeekYearWithOptions', function() {
    var result = fp.startOfWeekYearWithOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4
    })(new Date(2005, 6 /* Jul */, 2))
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0))
  })

  it('startOfYear', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = fp.startOfYear(date)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0))
  })

  it('subDays', function() {
    var result = fp.subDays(10)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('subHours', function() {
    var result = fp.subHours(2)(new Date(2014, 6 /* Jul */, 11, 1, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('subISOWeekYears', function() {
    var result = fp.subISOWeekYears(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2009, 7 /* Aug */, 31))
  })

  it('subMilliseconds', function() {
    var result = fp.subMilliseconds(750)(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('subMinutes', function() {
    var result = fp.subMinutes(30)(new Date(2014, 6 /* Jul */, 10, 12, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30))
  })

  it('subMonths', function() {
    var result = fp.subMonths(5)(new Date(2015, 1 /* Feb */, 1))
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('subQuarters', function() {
    var result = fp.subQuarters(3)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2013, 11 /* Dec */, 1))
  })

  it('subSeconds', function() {
    var result = fp.subSeconds(30)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('subWeeks', function() {
    var result = fp.subWeeks(4)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('subYears', function() {
    var result = fp.subYears(5)(new Date(2014, 8 /* Sep */, 1))
    assert.deepEqual(result, new Date(2009, 8 /* Sep */, 1))
  })

  it('parseISO', function() {
    var result = fp.parseISO('2014-10-25T13:46:20+07:00')
    assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
  })

  it('parseISOWithOptions', function() {
    var result = fp.parseISOWithOptions({ additionalDigits: 0 })('+12340702')
    assert.deepEqual(result, new Date(1234, 6 /* Jul */, 2))
  })
})
