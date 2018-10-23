// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('en-US locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'ب.م., بعد الميلاد, ب')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "'السنة' yo", { locale: locale })
        assert(result === 'السنة 1986')
      })

      it('ordinal local week-numbering year', function() {
        var result = format(date, "'السنة المرقمة' Yo", {
          locale: locale
        })
        assert(result === 'السنة المرقمة 1986')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var result = format(date, "'الربع' Qo, QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === 'الربع 2, ر2, الربع الثاني, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "'الربع' qo, qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === 'الربع 2, ر2, الربع الثاني, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, "do 'من' MMMM", { locale: locale })
        assert(result === '5 من أبريل')
      })

      it('stand-alone month', function() {
        var result = format(date, "'الشهر' Lo, LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === 'الشهر 4, أبريل, أبريل, أ')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "'الإسبوع' wo", { locale: locale })
        assert(result === 'الإسبوع 15')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'الإسبوع إيزو'", { locale: locale })
        assert(result === '14 الإسبوع إيزو')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'اليوم هو' do", { locale: locale })
        assert(result === 'اليوم هو 5')
      })

      it('ordinal day of year', function() {
        var result = format(date, "'اليوم' Do 'من السنة'", { locale: locale })
        assert(result === 'اليوم 95 من السنة')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'سبت, السبت, س, سبت')
      })

      it('ordinal day of week', function() {
        var result = format(date, "'اليوم' eo ' من الإسبوع'", {
          locale: locale
        })
        assert(result === 'اليوم 7  من الإسبوع')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "'الساعة' ho", { locale: locale })
        assert(result === 'الساعة 10')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 ص, 10 ص, 10ص')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === 'نصف الليل, نصف الليل, ن')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 في الصباح')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "'الدقيقة' mo", { locale: locale })
      assert(result === 'الدقيقة 32')
    })

    it('ordinal second', function() {
      var result = format(date, "'الثانية' so", { locale: locale })
      assert(result === 'الثانية 0')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '04/05/1986')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === 'أبريل 5, 1986')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === 'أبريل 5, 1986')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === 'السبت, أبريل 5, 1986')
      })

      it('short time', function() {
        var result = format(date, 'p', { locale: locale })
        assert(result === '10:32 ص')
      })

      it('medium time', function() {
        var result = format(date, 'pp', { locale: locale })
        assert(result === '10:32:00 ص')
      })

      it('short date + time', function() {
        var result = format(date, 'Pp', { locale: locale })
        assert(result === '04/05/1986, 10:32 ص')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === 'أبريل 5, 1986, 10:32:00 ص')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === 'أبريل 5, 1986 عند 10:32 ص')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === 'السبت, أبريل 5, 1986 عند 10:32 ص')
      })
    })
  })

  context('with `formatDistance`', function() {
    it('works as expected', function() {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        { locale: locale, includeSeconds: true }
      )
      assert(result === 'نصف دقيقة')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === 'في خلال أقل من 10 ثواني')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'منذ ساعة واحدة تقريباً')
      })
    })
  })

  context('with `formatDistanceStrict`', function() {
    it('works as expected', function() {
      var result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        { locale: locale, unit: 'minute' }
      )
      assert(result === '120 دقيقة')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'في خلال 25 ثانية')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'منذ ساعة واحدة')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      })
      assert(result === 'أخر الثلاثاء عند 12:00 ص')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === 'أمس عند 10:22 م')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === 'اليوم عند 4:50 م')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === 'غداً عند 7:30 ص')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === 'الأحد عند 12:00 م')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '04/11/1986')
    })
  })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('10000 ق.م.', 'yyyyy G', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('2018 بعد الميلاد', 'yyyy GGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('44 ق', 'y GGGGG', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function() {
      var result = parse('2017th', 'yo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function() {
      it('ordinal', function() {
        var result = parse('1st', 'Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function() {
        var result = parse('ر3', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('الربع 4', 'QQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function() {
        var result = parse('1', 'QQQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function() {
      it('ordinal', function() {
        var result = parse('6th', 'Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function() {
        var result = parse('ن', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('ف', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('ي', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('49th', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('ordinal day of month', function() {
      var result = parse('28th', 'do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function() {
      var result = parse('200th', 'Do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function() {
      it('abbreviated', function() {
        var result = parse('اثن', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function() {
        var result = parse('الثلاثاء', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function() {
        var result = parse('ر', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function() {
        var result = parse('خ', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse(
        '2nd day of the week',
        "eo 'day of the week'",
        baseDate,
        { locale: locale }
      )
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    describe('AM, PM', function() {
      it('abbreviated', function() {
        var result = parse('5 AM', 'h a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function() {
        var result = parse('5 p.m.', 'h aaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function() {
        var result = parse('11 a', 'h aaaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function() {
      it('abbreviated', function() {
        var result = parse('noon', 'b', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function() {
        var result = parse('midnight', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function() {
        var result = parse('mi', 'bbbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function() {
      it('abbreviated', function() {
        var result = parse('2 at night', 'h B', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function() {
        var result = parse('12 in the afternoon', 'h BBBB', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function() {
        var result = parse('5 in the evening', 'h BBBBB', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function() {
      var dateString = '1st hour, 2nd minute, 3rd second'
      var formatString = "ho 'hour', mo 'minute', so 'second'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
