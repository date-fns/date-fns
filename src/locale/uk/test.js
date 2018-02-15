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

describe('uk locale', function () {
  context('with `differenceInCalendarWeeks`', function () {
    it('sets the first day of the week', function () {
      var result = differenceInCalendarWeeks(
        new Date(2014, 5 /* Jun */, 29, 6, 0),
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        {locale: locale}
      )
      assert(result === -2)
    })
  })

  context('with `endOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = endOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999))
    })
  })

  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('months', function () {
      it('Mo', function () {
        var result = format(date, 'Mo [місяць]', {locale: locale})
        assert(result === '4-й місяць')
      })

      it('MMM', function () {
        var result = format(date, 'MMM', {locale: locale})
        assert(result === 'квіт.')
      })

      it('MMMM', function () {
        var result = format(date, 'MMMM', {locale: locale})
        assert(result === 'квітень')
      })
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = format(date, 'Qo [квартал]', {locale: locale})
        assert(result === '2-й квартал')
      })
    })

    describe('days of month', function () {
      describe('Do', function () {
        it('when 23', function () {
          var result = format(new Date(1986, 3 /* Apr */, 23, 10, 32, 0, 900), 'Do MMMM YYYY', {locale: locale})
          assert(result === '23-є квітня 1986')
        })
        it('when 13', function () {
          var result = format(new Date(1986, 3 /* Apr */, 13, 10, 32, 0, 900), 'Do MMMM YYYY', {locale: locale})
          assert(result === '13-е квітня 1986')
        })
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDo [день року]', {locale: locale})
        assert(result === '1-й день року')
      })
    })

    describe('days of week', function () {
      it('all variants', function () {
        var result = format(date, 'do [день тижня,] dd ddd dddd', {locale: locale})
        assert(result === '5-й день тижня, пт птн п’ятниця')
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = format(date, 'Wo [тиждень]', {locale: locale})
        assert(result === '14-й тиждень')
      })
    })

    describe('hours and am/pm', function () {
      it('12 pm', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm a', {locale: locale})
        assert(result === '12:00 дня')
      })

      it('12 am', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm a', {locale: locale})
        assert(result === '12:00 ночі')
      })

      it('a', function () {
        var result = []
        for (var i = 0; i <= 23; i++) {
          result.push(format(new Date(2015, 0, 1, i), 'h a', {locale: locale}))
        }
        var expected = [
          '12 ночі', '1 ночі', '2 ночі', '3 ночі',
          '4 ранку', '5 ранку', '6 ранку', '7 ранку', '8 ранку', '9 ранку', '10 ранку', '11 ранку',
          '12 дня', '1 дня', '2 дня', '3 дня', '4 дня',
          '5 вечора', '6 вечора', '7 вечора', '8 вечора', '9 вечора', '10 вечора', '11 вечора'
        ]
        assert.deepEqual(result, expected)
      })

      it('A', function () {
        var result = []
        for (var i = 0; i <= 23; i++) {
          result.push(format(new Date(2015, 0, 1, i), 'h A', {locale: locale}))
        }
        var expected = [
          '12 ночі', '1 ночі', '2 ночі', '3 ночі',
          '4 ранку', '5 ранку', '6 ранку', '7 ранку', '8 ранку', '9 ранку', '10 ранку', '11 ранку',
          '12 дня', '1 дня', '2 дня', '3 дня', '4 дня',
          '5 вечора', '6 вечора', '7 вечора', '8 вечора', '9 вечора', '10 вечора', '11 вечора'
        ]
        assert.deepEqual(result, expected)
      })

      it('aa', function () {
        var result = []
        for (var i = 0; i <= 23; i++) {
          result.push(format(new Date(2015, 0, 1, i), 'h aa', {locale: locale}))
        }
        var expected = [
          '12 ночі', '1 ночі', '2 ночі', '3 ночі',
          '4 ранку', '5 ранку', '6 ранку', '7 ранку', '8 ранку', '9 ранку', '10 ранку', '11 ранку',
          '12 дня', '1 дня', '2 дня', '3 дня', '4 дня',
          '5 вечора', '6 вечора', '7 вечора', '8 вечора', '9 вечора', '10 вечора', '11 вечора'
        ]
        assert.deepEqual(result, expected)
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
        assert(result === '02.07.2017')
      })

      it('LL', function () {
        var result = format(date, 'LL', {locale: locale})
        assert(result === '4 квітня 1986 р.')
      })

      it('LLL', function () {
        var result = format(date, 'LLL', {locale: locale})
        assert(result === '4 квітня 1986 р., 10:32')
      })

      it('LLLL', function () {
        var result = format(date, 'LLLL', {locale: locale})
        assert(result === 'п’ятниця, 4 квітня 1986 р., 10:32')
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
      assert(result === 'півхвилини')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'менше, ніж за 10 секунд')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'близько 1 години тому')
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
      assert(result === '120 хвилин')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'за 25 секунд')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '1 годину тому')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 2 /* Mar */, 30), baseDate, {locale: locale})
      assert(result === 'у минулу неділю о 00:00')
    })

    it('this week, before yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'у вівторок о 00:00')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'вчора о 22:22')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'сьогодні о 16:50')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'завтра о 07:30')
    })

    it('this week, after tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'у неділю о 12:00')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 7, 12, 0), baseDate, {locale: locale})
      assert(result === 'у наступний понеділок о 12:00')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '11.04.1986')
    })
  })

  context('with `isSameWeek`', function () {
    it('sets the first day of the week', function () {
      var result = isSameWeek(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 4),
        {locale: locale}
      )
      assert(result === false)
    })
  })

  context('with `lastDayOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = lastDayOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('sets the first day of the week', function () {
      var result = parse('0', 'd', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = parse('2000 2-й', 'YYYY Qo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2000, 3 /* Apr */, 1))
      })
    })

    describe('months', function () {
      it('Mo', function () {
        var result = parse('2014 12-й', 'YYYY Mo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
      })

      it('MMM', function () {
        var result = parse('2016 листоп.', 'YYYY MMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 1))
      })

      it('MMMM', function () {
        var result = parse('2016 грудень', 'YYYY MMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 11 /* Dec */, 1))
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = parse('2016 3-й', 'GGGG Wo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 18))
      })
    })

    describe('days of week', function () {
      it('do', function () {
        var result = parse('2016 4 0-й', 'GGGG W do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
      })

      it('dd', function () {
        var result = parse('2016 4 пн', 'GGGG W dd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
      })

      it('ddd', function () {
        var result = parse('2016 4 серд', 'GGGG W ddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 27))
      })

      it('dddd', function () {
        var result = parse('2016 4 п’ятниця', 'GGGG W dddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 29))
      })
    })

    describe('days of month', function () {
      it('Do', function () {
        var result = parse('2016 11 15-е', 'YYYY MM Do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = parse('2016 100-й', 'YYYY DDDo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 3 /* Apr */, 9))
      })
    })

    describe('a.m./p.m.', function () {
      it('12 a.m.', function () {
        var result = parse('2016-11-25 12 ночі', 'YYYY-MM-DD h aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 0, 0, 0, 0))
      })

      it('12 p.m.', function () {
        var result = parse('2016-11-25 12 дня', 'YYYY-MM-DD h aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 12, 0, 0, 0))
      })

      it('night', function () {
        var result = parse('2016-11-25 3 ночі', 'YYYY-MM-DD h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 3, 0, 0, 0))
      })

      it('morning', function () {
        var result = parse('2016-11-25 8 ранку', 'YYYY-MM-DD h A', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 8, 0, 0, 0))
      })

      it('afternoon', function () {
        var result = parse('2016-11-25 2 дня', 'YYYY-MM-DD h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 14, 0, 0, 0))
      })

      it('evening', function () {
        var result = parse('2016-11-25 10 вечора', 'YYYY-MM-DD h aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 22, 0, 0, 0))
      })
    })

    describe('long formats', function () {
      it('unfolds long formats', function () {
        var result = parse('6 квітня 1987 р., 11:32', 'LLL', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1987, 3 /* Apr */, 6, 11, 32))
      })
    })
  })

  context('with `setDay`', function () {
    it('sets the first day of the week', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* sep */, 7))
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
