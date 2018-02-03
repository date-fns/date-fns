// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import differenceInCalendarWeeks from '../../differenceInCalendarWeeks'
import endOfWeek from '../../endOfWeek'
import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import isSameWeek from '../../isSameWeek'
import lastDayOfWeek from '../../lastDayOfWeek'
import parse from '../../parse'
import setDay from '../../setDay'
import startOfWeek from '../../startOfWeek'

describe.skip('vi locale', function () {
  context('with `differenceInCalendarWeeks`', function () {
    it('sets the first day of the week', function () {
      var result = differenceInCalendarWeeks(
        new Date(2014, 5 /* Jun */, 30, 6, 0), // Monday is first day of week
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        {locale: locale}
      )
      assert(result === -1)
    })
  })

  context('with `endOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = endOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)) // Sunday is end of week
    })
  })

  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('months', function () {
      it('Mo', function () {
        var result = format(date, '[tháng] Mo', {locale: locale})
        assert(result === 'tháng 4')
      })

      it('MMM', function () {
        var result = format(date, 'MMM', {locale: locale})
        assert(result === 'thg 4')
      })

      it('MMMM', function () {
        var result = format(date, 'MMMM', {locale: locale})
        assert(result === 'tháng Tư')
      })
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = format(date, '[quý] Qo', {locale: locale})
        assert(result === 'quý hai')
      })
    })

    describe('days of month', function () {
      it('Do', function () {
        var result = format(date, 'Do MMMM YYYY', {locale: locale})
        assert(result === '4 tháng Tư 1986')
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = format(new Date(1992, 0 /* Jan */, 1), '[ngày] DDDo [của năm]', {locale: locale})
        assert(result === 'ngày đầu tiên của năm')
        var result2 = format(new Date(1992, 0 /* Jan */, 2), '[ngày] DDDo [của năm]', { locale: locale })
        assert(result2 === 'ngày thứ 2 của năm')
      })
    })

    describe('days of week', function () {
      it('all variants', function () {
        var result = format(date, '[ngày thứ] do [của tuần,] dd ddd dddd', {locale: locale})
        assert(result === 'ngày thứ 6 của tuần, T6 thứ 6 thứ Sáu')
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = format(date, '[tuần] Wo', {locale: locale})
        assert(result === 'tuần thứ 14')
        var result2 = format(new Date(1986, 0, 1), '[tuần] Wo', {locale: locale})
        assert(result2 === 'tuần thứ nhất')
      })
    })

    describe('hours and am/pm', function () {
      it('am/pm', function () {
        var result = format(date, 'hh:mm a', {locale: locale})
        assert(result === '10:32 am')
      })

      it('12 pm', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm a', {locale: locale})
        assert(result === '12:00 pm')
      })

      it('12 am', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm a', {locale: locale})
        assert(result === '12:00 am')
      })

      it('12 SA', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm aa', {locale: locale})
        assert(result === '12:00 SA')
      })

      it('12 CH', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm aa', {locale: locale})
        assert(result === '12:00 CH')
      })

      it('12PM', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mmA', {locale: locale})
        assert(result === '12:00PM')
      })
    })

    describe('long formats', function () {
      it('LT', function () {
        var result = format(date, 'LT', {locale: locale})
        assert(result === '10:32')
      })

      it('LTS', function () {
        var result = format(date, 'LTS', {locale: locale})
        assert(result === '10:32:00')
      })

      it('L', function () {
        var result = format(new Date(2017, 6 /* Jul */, 2), 'L', {locale: locale})
        assert(result === '02/07/2017')
      })

      it('LL', function () {
        var result = format(date, 'LL', {locale: locale})
        assert(result === 'ngày 4 tháng 4 năm 1986')
      })

      it('LLL', function () {
        var result = format(date, 'LLL', {locale: locale})
        assert(result === 'ngày 4 tháng 4 năm 1986 10:32')
      })

      it('LLLL', function () {
        var result = format(date, 'LLLL', {locale: locale})
        assert(result === 'thứ Sáu, ngày 4 tháng Tư năm 1986 10:32:00')
      })
    })
  })

  context('with `formatDistance`', function () {
    it('works as expected', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        {locale: locale, includeSeconds: true}
      )
      assert(result === 'nửa phút')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'dưới 10 giây nữa')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'khoảng 1 tiếng trước')
      })
    })
  })

  context('with `formatDistanceStrict`', function () {
    it('works as expected', function () {
      var result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        {locale: locale, unit: 'm'}
      )
      assert(result === '120 phút')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '25 giây nữa')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '1 tiếng trước')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'thứ Ba tuần trước vào lúc 0:00')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'hôm qua vào lúc 22:22')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'hôm nay vào lúc 16:50')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'ngày mai vào lúc 7:30')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'Chủ Nhật vào lúc 12:00')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '11/04/1986')
    })
  })

  context('with `isSameWeek`', function () {
    it('sets the first day of the week', function () {
      var result = isSameWeek(
        new Date(2014, 7 /* Aug */, 25),
        new Date(2014, 7 /* Aug */, 31),
        {locale: locale}
      )
      assert(result === true)
    })
  })

  context('with `lastDayOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0) // Tue 2/9
      var result = lastDayOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7)) // Sun 7/9
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('sets the first day of the week', function () {
      // FIXME: I think there's an issue with the parsing here
      var result = parse('0', 'd', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = parse('2000 2nd', 'YYYY Qo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2000, 3 /* Apr */, 1))
      })
    })

    describe('months', function () {
      it('Mo', function () {
        var result = parse('2014 12th', 'YYYY Mo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
      })

      it('MMM', function () {
        var result = parse('2016 thg 1 20', 'YYYY MMM DD', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 20))
        result = parse('2016 thg 01 20', 'YYYY MMM DD', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 20))
        result = parse('2016 20 thg 9', 'YYYY DD MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 8 /* Sep */, 20))
        result = parse('2016 20 thg09', 'YYYY DD MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 8 /* Sep */, 20))
        result = parse('2016 20 thg_11', 'YYYY DD MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 20))
        result = parse('2016 20 thg10', 'YYYY DD MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 9 /* Oct */, 20))
      })

      it('MMMM', function () {
        var result = parse('2016 tháng Một 15', 'YYYY MMMM DD', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 15))
        result = parse('2016 tháng Mười 15', 'YYYY MMMM DD', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 9 /* Oct */, 15))
        result = parse('2016 tháng Mười Một 15', 'YYYY MMMM DD', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
        result = parse('2016 thángmườihai 15', 'YYYY MMMM DD', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 11 /* Dec */, 15))
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = parse('2016 3rd', 'GGGG Wo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 18))
      })
    })

    describe('days of a week', function () {
      it('do', function () {
        var result = parse('2016 4 0th', 'GGGG W do', baseDate, {locale: locale})
        // FIXME: why the 0th day of the week move forward?
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
      })

      it('dd', function () {
        var result = parse('2016 4 T2', 'GGGG W dd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
      })

      it('ddd', function () {
        var result = parse('2016 4 thứ 4', 'GGGG W ddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 27))
        result = parse('2016 4 thứ7', 'GGGG W ddd', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 30))
      })

      it('dddd', function () {
        var result = parse('2016 4 thứ Sáu', 'GGGG W dddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 29))
        result = parse('2016 4 Chủ Nhật', 'GGGG W dddd', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
        result = parse('2016 4 Chúa Nhật', 'GGGG W dddd', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
      })
    })

    describe('days of a month', function () {
      it('Do', function () {
        var result = parse('2016 11 15th', 'YYYY MM Do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
      })
    })

    describe('days of a year', function () {
      it('DDDo', function () {
        var result = parse('2016 100th', 'YYYY DDDo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 3 /* Apr */, 9))
      })
    })

    describe('a.m./p.m.', function () {
      it('AM', function () {
        var result = parse('2016-11-25 04 AM', 'YYYY-MM-DD hh A', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('PM', function () {
        var result = parse('2016-11-25 04 PM', 'YYYY-MM-DD hh A', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })

      it('am', function () {
        var result = parse('2016-11-25 04 am', 'YYYY-MM-DD hh a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('pm', function () {
        var result = parse('2016-11-25 04 pm', 'YYYY-MM-DD hh a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })

      it('SA (aa)', function () {
        var result = parse('2016-11-25 04 SA', 'YYYY-MM-DD hh aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('CH (aa)', function () {
        var result = parse('2016-11-25 04 CH', 'YYYY-MM-DD hh aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })
    })

    describe('long formats', function () {
      it('unfolds long formats', function () {
        // [ngày] D [tháng] M [năm] YYYY H:mm
        var result = parse('ngày 6 tháng 4 năm 1987 11:32', 'LLL', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1987, 3 /* Apr */, 6, 11, 32))
      })
    })
  })

  context('with `setDay`', function () {
    it('sets the first day of the week', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
    })
  })

  context('with `startOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = startOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
    })
  })
})
