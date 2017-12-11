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

describe('ka locale', function () {
  context('with `differenceInCalendarWeeks`', function () {
    it('sets the first day of the week', function () {
      var result = differenceInCalendarWeeks(
        new Date(2014, 5 /* Jun */, 29, 6, 0),
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        { locale: locale }
      )
      assert(result === -2)
    })
  })

  context('with `endOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = endOfWeek(date, { locale: locale })
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999))
    })
  })

  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('months', function () {
      it('Mo', function () {
        var result = format(date, 'Mo [თვე]', { locale: locale })
        assert(result === '4-ე თვე')
      })

      it('MMM', function () {
        var result = format(date, 'MMM', { locale: locale })
        assert(result === 'აპრ')
      })

      it('MMMM', function () {
        var result = format(date, 'MMMM', { locale: locale })
        assert(result === 'აპრილი')
      })
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = format(date, 'Qo [კვარტალი]', { locale: locale })
        assert(result === '2-ე კვარტალი')
      })
    })

    describe('days of month', function () {
      it('Do', function () {
        var result = format(date, 'Do MMMM YYYY', { locale: locale })
        assert(result === '4-ე აპრილი 1986')
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = format(
          new Date(1992, 0 /* Jan */, 1), '[წლის] DDDo [დღე]', { locale: locale }
        )
        assert(result === 'წლის 1-ლი დღე')
      })
    })

    describe('days of week', function () {
      it('all variants', function () {
        var result = format(date, '[კვირის] do [დღე,] dd ddd dddd', { locale: locale })
        assert(result === 'კვირის 5-ე დღე, პა პარ პარასკევი')
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = format(date, 'Wo [კვირა]', { locale: locale })
        assert(result === '14-ე კვირა')
      })
    })

    describe('hours and am/pm', function () {
      it('am/pm', function () {
        var result = format(date, 'hh:mm a', { locale: locale })
        assert(result === '10:32 am')
      })

      it('12 pm', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm a', { locale: locale })
        assert(result === '12:00 pm')
      })

      it('12 am', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm a', { locale: locale })
        assert(result === '12:00 am')
      })

      it('12 a.m.', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm aa', { locale: locale })
        assert(result === '12:00 a.m.')
      })

      it('12 p.m.', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm aa', { locale: locale })
        assert(result === '12:00 p.m.')
      })

      it('12PM', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mmA', { locale: locale })
        assert(result === '12:00PM')
      })
    })

    describe('long formats', function () {
      it('LT', function () {
        var result = format(date, 'LT', { locale: locale })
        assert(result === '10:32')
      })

      it('LTS', function () {
        var result = format(date, 'LTS', { locale: locale })
        assert(result === '10:32:00')
      })

      it('L', function () {
        var result = format(new Date(2017, 6 /* Jul */, 2), 'L', {
          locale: locale
        })
        assert(result === '02/07/2017')
      })

      it('LL', function () {
        var result = format(date, 'LL', { locale: locale })
        assert(result === '4 აპრილი 1986')
      })

      it('LLL', function () {
        var result = format(date, 'LLL', { locale: locale })
        assert(result === '4 აპრილი 1986 10:32')
      })

      it('LLLL', function () {
        var result = format(date, 'LLLL', { locale: locale })
        assert(result === 'პარასკევი, 4 აპრილი 1986 10:32')
      })
    })
  })

  context('with `formatDistance`', function () {
    it('works as expected', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        { locale: locale, includeSeconds: true }
      )
      assert(result === 'ნახევარი წუთი')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === '10 წამზე ნაკლებში')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'დაახლოებით 1 საათის წინ')
      })
    })
  })

  context('with `formatDistanceStrict`', function () {
    it('works as expected', function () {
      var result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        { locale: locale, unit: 'm' }
      )
      assert(result === '120 წუთი')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '25 წამში')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '1 საათის წინ')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, { locale: locale })
      assert(result === 'წინა სამშაბათი 00:00-ზე')
    })

    it('yesterday', function () {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, { locale: locale }
      )
      assert(result === 'გუშინ 22:22-ზე')
    })

    it('today', function () {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, { locale: locale }
      )
      assert(result === 'დღეს 16:50-ზე')
    })

    it('tomorrow', function () {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, { locale: locale }
      )
      assert(result === 'ხვალ 07:30-ზე')
    })

    it('next week', function () {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, { locale: locale }
      )
      assert(result === 'შემდეგი კვირა 12:00-ზე')
    })

    it('after the next week', function () {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, { locale: locale }
      )
      assert(result === '11/04/1986')
    })
  })

  context('with `isSameWeek`', function () {
    it('sets the first day of the week', function () {
      var result = isSameWeek(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 4),
        { locale: locale }
      )
      assert(result === false)
    })
  })

  context('with `lastDayOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = lastDayOfWeek(date, { locale: locale })
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('sets the first day of the week', function () {
      var result = parse('0', 'd', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = parse('2000 2-ე', 'YYYY Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2000, 3 /* Apr */, 1))
      })
    })

    describe('months', function () {
      it('Mo', function () {
        var result = parse('2014 12-ე', 'YYYY Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
      })

      it('MMM', function () {
        var result = parse('2016 ნოე', 'YYYY MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 1))
      })

      it('MMMM', function () {
        var result = parse('2016 დეკემბერი', 'YYYY MMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 11 /* Dec */, 1))
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = parse('2016 3-ე', 'GGGG Wo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 18))
      })
    })

    describe('days of a week', function () {
      it('do', function () {
        var result = parse('2016 4 0-ე', 'GGGG W do', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
      })

      it('dd', function () {
        var result = parse('2016 4 ორ', 'GGGG W dd', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
      })

      it('ddd', function () {
        var result = parse('2016 4 ოთხ', 'GGGG W ddd', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 27))
      })

      it('dddd', function () {
        var result = parse('2016 4 პარასკევი', 'GGGG W dddd', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 29))
      })
    })

    describe('days of a month', function () {
      it('Do', function () {
        var result = parse('2016 11 15-ე', 'YYYY MM Do', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
      })
    })

    describe('days of a year', function () {
      it('DDDo', function () {
        var result = parse('2016 100-ე', 'YYYY DDDo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 3 /* Apr */, 9))
      })
    })

    describe('a.m./p.m.', function () {
      it('AM', function () {
        var result = parse('2016-11-25 04 AM', 'YYYY-MM-DD hh A', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('PM', function () {
        var result = parse('2016-11-25 04 PM', 'YYYY-MM-DD hh A', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })

      it('am', function () {
        var result = parse('2016-11-25 04 am', 'YYYY-MM-DD hh a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('pm', function () {
        var result = parse('2016-11-25 04 pm', 'YYYY-MM-DD hh a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })

      it('a.m.', function () {
        var result = parse('2016-11-25 04 a.m.', 'YYYY-MM-DD hh aa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })

      it('p.m.', function () {
        var result = parse('2016-11-25 04 p.m.', 'YYYY-MM-DD hh aa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
      })
    })

    describe('long formats', function () {
      it('unfolds long formats', function () {
        var result = parse('6 აპრილი 1987 11:32', 'LLL', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1987, 3 /* Apr */, 6, 11, 32))
      })
    })
  })

  context('with `setDay`', function () {
    it('sets the first day of the week', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), 0, { locale: locale })
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
    })
  })

  context('with `startOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = startOfWeek(date, { locale: locale })
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
    })
  })
})
