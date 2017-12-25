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

describe('hr locale', function () {
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
        var result = format(date, 'Mo [mjesec]', {locale: locale})
        assert(result === '4. mjesec')
      })

      it('MMM', function () {
        var result = format(date, 'MMM', {locale: locale})
        assert(result === 'tra')
      })

      it('MMMM', function () {
        var result = format(date, 'MMMM', {locale: locale})
        assert(result === 'travanj')
      })
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = format(date, 'Qo [četvrtina]', {locale: locale})
        assert(result === '2. četvrtina')
      })
    })

    describe('days of month', function () {
      it('Do', function () {
        var result = format(date, 'Do MMMM YYYY', {locale: locale})
        assert(result === '4. travnja 1986')
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDo [dan godine]', {locale: locale})
        assert(result === '1. dan godine')
      })
    })

    describe('days of week', function () {
      it('all variants', function () {
        var result = format(date, 'do [dan u tjednu,] dd ddd dddd', {locale: locale})
        assert(result === '5. dan u tjednu, pe pet petak')
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = format(date, 'Wo [tjedan]', {locale: locale})
        assert(result === '14. tjedan')
      })
    })

    describe('hours and am/pm', function () {
      it('am/pm', function () {
        var result = format(date, 'hh:mm a', {locale: locale})
        assert(result === '10:32 ujutro')
      })

      it('12 pm', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm a', {locale: locale})
        assert(result === '12:00 popodne')
      })

      it('12 am', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm a', {locale: locale})
        assert(result === '12:00 ujutro')
      })

      it('12 a.m.', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm aa', {locale: locale})
        assert(result === '12:00 ujutro')
      })

      it('12 p.m.', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm aa', {locale: locale})
        assert(result === '12:00 popodne')
      })

      it('12PM', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mmA', {locale: locale})
        assert(result === '12:00popodne')
      })
    })

    describe('long formats', function () {
      it('LT', function () {
        var result = format(date, 'LT', {locale: locale})
        assert(result === '10:32 ujutro')
      })

      it('LTS', function () {
        var result = format(date, 'LTS', {locale: locale})
        assert(result === '10:32:00 ujutro')
      })

      it('L', function () {
        var result = format(new Date(2017, 6 /* Jul */, 2), 'L', {locale: locale})
        assert(result === '07/02/2017')
      })

      it('LL', function () {
        var result = format(date, 'LL', {locale: locale})
        assert(result === 'travanj 4 1986')
      })

      it('LLL', function () {
        var result = format(date, 'LLL', {locale: locale})
        assert(result === 'travanj 4 1986 10:32 ujutro')
      })

      it('LLLL', function () {
        var result = format(date, 'LLLL', {locale: locale})
        assert(result === 'petak, travanj 4 1986 10:32 ujutro')
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
      assert(result === 'pola minute')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'za manje od 10 sekundi')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'prije oko 1 sat')
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
      assert(result === '120 minuta')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'za 25 sekundi')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'prije 1 sat')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'posljednji utorak u 12:00 ujutro')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'jučer u 10:22 popodne')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'danas u 4:50 popodne')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'sutra u 7:30 ujutro')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'nedjelja u 12:00 popodne')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '04/11/1986')
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
        var result = parse('2016 stu', 'YYYY MMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 1))
      })

      it('MMMM', function () {
        var result = parse('2016 prosinac', 'YYYY MMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 11 /* Dec */, 1))
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
        var result = parse('2016 3 0.', 'GGGG W do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 24))
      })

      it('dd', function () {
        var result = parse('2016 4 po', 'GGGG W dd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
      })

      it('ddd', function () {
        var result = parse('2016 4 sri', 'GGGG W ddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 27))
      })

      it('dddd', function () {
        var result = parse('2016 4 petak', 'GGGG W dddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 29))
      })
    })

    describe('days of a month', function () {
      it('Do', function () {
        var result = parse('2016 11 15.', 'YYYY MM Do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
      })
    })

    describe('days of a year', function () {
      it('DDDo', function () {
        var result = parse('2016 100.', 'YYYY DDDo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 3 /* Apr */, 9))
      })
    })

    describe('a.m./p.m.', function () {
      it('AM', function () {
        var result = parse('2016-11-25 04 ujutro', 'YYYY-MM-DD hh A', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('PM', function () {
        var result = parse('2016-11-25 04 popodne', 'YYYY-MM-DD hh A', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })

      it('am', function () {
        var result = parse('2016-11-25 04 ujutro', 'YYYY-MM-DD hh a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('pm', function () {
        var result = parse('2016-11-25 04 popodne', 'YYYY-MM-DD hh a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })

      it('a.m.', function () {
        var result = parse('2016-11-25 04 ujutro', 'YYYY-MM-DD hh aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('p.m.', function () {
        var result = parse('2016-11-25 04 popodne', 'YYYY-MM-DD hh aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })
    })

    describe('long formats', function () {
      it('unfolds long formats', function () {
        var result = parse('travanj 6 1987 11:32 ujutro', 'LLL', baseDate, {locale: locale})
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
