// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('fa-IR locale', function() {
  // context('with `format`', function () {
  //   var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

  //   it('era', function () {
  //     var result = format(date, 'G, GGGG, GGGGG', {locale: locale})
  //     assert(result === "AD, پس از مسیح, A" )
  //   })

  //   describe('year', function () {
  //     it('ordinal regular year', function () {
  //       var result = format(date, "yo 'سال'", {locale: locale})
  //       assert(result === '۱۹۸۶مین سال')
  //     })

  //     it('ordinal local week-numbering year', function () {
  //       var result = format(date, "Yo 'هفته سال'", {locale: locale})
  //       assert(result === '۱۹۸۶مین هفته سال')
  //     })
  //   })

  //   describe('quarter', function () {
  //     it('formatting quarter', function () {
  //       var result = format(date, "Qo 'چهارک', QQQ, QQQQ, QQQQQ", {locale: locale})
  //       assert(result === '۲مین چهارک, چهارک ۲, یک چهارم دوم, ۲')
  //     })

  //     it('stand-alone quarter', function () {
  //       var result = format(date, "qo 'چهارک', qqq, qqqq, qqqqq", {locale: locale})
  //       assert(result === '۲مین چهارک, چهارک ۲, یک چهارم دوم, ۲')
  //     })
  //   })

  //   describe('month', function () {
  //     it('formatting month', function () {
  //       var result = format(date, "'روز' do 'از' MMMM", {locale: locale})
  //       assert(result === 'روز ۵م از آوریل')
  //     })

  //     it('stand-alone month', function () {
  //       var result = format(date, "Lo 'ماه', LLL, LLLL, LLLLL", {locale: locale})
  //       assert(result === '۴مین ماه, آور, آوریل, A')
  //     })
  //   })

  //   describe('week', function () {
  //     it('ordinal local week of year', function () {
  //       var date = new Date(1986, 3 /* Apr */, 6)
  //       var result = format(date, "wo 'هفته'", {locale: locale})
  //       assert(result === '۱۵مین هفته')
  //     })

  //     it('ordinal ISO week of year', function () {
  //       var date = new Date(1986, 3 /* Apr */, 6)
  //       var result = format(date, "Io 'ISO هفته'", {locale: locale})
  //       assert(result === '۱۴مین ISO هفته')
  //     })
  //   })

  //   describe('day', function () {
  //     it('ordinal date', function () {
  //       var result = format(date, "'امروز' do است", {locale: locale})
  //       assert(result === 'امروز ۵م است')
  //     })

  //     it('ordinal day of year', function () {
  //       var result = format(date, "Do 'روز از سال است'", {locale: locale})
  //       assert(result === '۹۵مین روز از سال است')
  //     })
  //   })

  //   describe('week day', function () {
  //     it('day of week', function () {
  //       var result = format(date, 'E, EEEE, EEEEE, EEEEEE', {locale: locale})
  //       assert(result === 'شنبه, شنبه, ش, ش')
  //     })

  //     it('ordinal day of week', function () {
  //       var result = format(date, "eo 'روز از هفته'", {locale: locale})
  //       assert(result === '۱مین روز از هفته')
  //     })
  //   })

  //   describe('day period and hour', function () {
  //     it('ordinal hour', function () {
  //       var result = format(date, "ho 'ساعت'", {locale: locale})
  //       assert(result === '۱۰مین ساعت')
  //     })

  //     it('AM, PM', function () {
  //       var result = format(date, 'h a, h aaaa, haaaaa', {locale: locale})
  //       assert(result === '10 ق.ظ., 10 ق.ظ., 10ق.ظ.')
  //     })

  //     it('AM, PM, noon, midnight', function () {
  //       var result = format(new Date(1986, 3 /* Apr */, 6, 0), 'b, bbbb, bbbbb', {locale: locale})
  //       assert(result === 'نیمه شب, نیمه شب, نیمه شب')
  //     })

  //     it('flexible day periods', function () {
  //       it('works as expected', function () {
  //         var result = format(date, 'h B', {locale: locale})
  //         assert(result === '10 in the morning')
  //       })
  //     })
  //   })

  //   it('ordinal minute', function () {
  //     var result = format(date, "mo 'دقیقه'", {locale: locale})
  //     assert(result === '۳۲مین دقیقه')
  //   })

  //   it('ordinal second', function () {
  //     var result = format(date, "so 'ثانیه'", {locale: locale})
  //     assert(result === '۰مین ثانیه')
  //   })

  //   describe('long format', function () {
  //     it('short date', function () {
  //       var result = format(date, 'P', {locale: locale})
  //       assert(result === '04/05/1986')
  //     })

  //     it('medium date', function () {
  //       var result = format(date, 'PP', {locale: locale})
  //       assert(result === 'آور 5, 1986')
  //     })

  //   it('long date', function () {
  //     var result = format(date, 'PPP', {locale: locale})
  //     assert(result === 'آوریل ۵م, 1986')
  //   })

  //     it('full date', function () {
  //       var result = format(date, 'PPPP', {locale: locale})
  //       assert(result === 'شنبه, آوریل ۵م, 1986')
  //     })

  //     it('short time', function () {
  //       var result = format(date, 'p', {locale: locale})
  //       assert(result === '10:32 ق.ظ.')
  //     })

  //     it('medium time', function () {
  //       var result = format(date, 'pp', {locale: locale})
  //       assert(result === '10:32:00 ق.ظ.')
  //     })

  //     it('short date + time', function () {
  //       var result = format(date, 'Pp', {locale: locale})
  //       assert(result === '04/05/1986, 10:32 ق.ظ.')
  //     })

  //     it('medium date + time', function () {
  //       var result = format(date, 'PPpp', {locale: locale})
  //       assert(result === 'آور 5, 1986, 10:32:00 ق.ظ.')
  //     })

  //     it('long date + time', function () {
  //       var result = format(date, 'PPPp', {locale: locale})
  //       assert(result === 'آوریل ۵م, 1986 در ساعت 10:32 ق.ظ.')
  //     })

  //     it('full date + time', function () {
  //       var result = format(date, 'PPPPp', {locale: locale})
  //       assert(result === 'شنبه, آوریل ۵م, 1986 در ساعت 10:32 ق.ظ.')
  //     })
  //   })
  // })

  // context('with `formatDistance`', function () {
  //   it('works as expected', function () {
  //     var result = formatDistance(
  //       new Date(1986, 3, 4, 10, 32, 25),
  //       new Date(1986, 3, 4, 10, 32, 0),
  //       {locale: locale, includeSeconds: true}
  //     )
  //     assert(result === 'نیم دقیقه')
  //   })

  //   context('when `addSuffix` option is true', function () {
  //     it('adds a future suffix', function () {
  //       var result = formatDistance(
  //         new Date(1986, 3, 4, 10, 32, 7),
  //         new Date(1986, 3, 4, 10, 32, 0),
  //         {locale: locale, includeSeconds: true, addSuffix: true}
  //       )
  //       assert(result === 'در کمتر از ۱۰ ثانیه')
  //     })

  //     it('adds a past suffix', function () {
  //       var result = formatDistance(
  //         new Date(1986, 3, 4, 10, 32, 0),
  //         new Date(1986, 3, 4, 11, 32, 0),
  //         {locale: locale, addSuffix: true}
  //       )
  //       assert(result === 'نزدیک به ۱ ساعت پیش')
  //     })
  //   })
  // })

  // context('with `formatDistanceStrict`', function () {
  //   it('works as expected', function () {
  //     var result = formatDistanceStrict(
  //       new Date(1986, 3, 4, 10, 32, 0),
  //       new Date(1986, 3, 4, 12, 32, 0),
  //       {locale: locale, unit: 'minute'}
  //     )
  //     assert(result === '۱۲۰ دقیقه')
  //   })

  //   describe('when `addSuffix` option is true', function () {
  //     it('adds a future suffix', function () {
  //       var result = formatDistanceStrict(
  //         new Date(1986, 3, 4, 10, 32, 25),
  //         new Date(1986, 3, 4, 10, 32, 0),
  //         {locale: locale, addSuffix: true}
  //       )
  //       assert(result === 'در ۲۵ ثانیه')
  //     })

  //     it('adds a past suffix', function () {
  //       var result = formatDistanceStrict(
  //         new Date(1986, 3, 4, 10, 32, 0),
  //         new Date(1986, 3, 4, 11, 32, 0),
  //         {locale: locale, addSuffix: true}
  //       )
  //       assert(result === '۱ ساعت پیش')
  //     })
  //   })
  // })

  // context('with `formatRelative`', function () {
  //   var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  //   it('last week', function () {
  //     var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
  //     assert(result === 'سه شنبه گذشته، ساعت 12:00 ق.ظ.')
  //   })

  //   it('yesterday', function () {
  //     var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
  //     assert(result === 'دیروز، ساعت 10:22 ب.ظ.')
  //   })

  //   it('today', function () {
  //     var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
  //     assert(result === 'امروز، ساعت 4:50 ب.ظ.')
  //   })

  //   it('tomorrow', function () {
  //     var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
  //     assert(result === 'فردا، ساعت 7:30 ق.ظ.')
  //   })

  //   it('next week', function () {
  //     var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
  //     assert(result === 'یکشنبه، ساعت 12:00 ب.ظ.')
  //   })

  //   it('after the next week', function () {
  //     var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
  //     assert(result === '04/11/1986')
  //   })
  // })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('10000 BC', 'yyyyy G', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('2018 Anno Domini', 'yyyy GGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('44 B', 'y GGGGG', baseDate, { locale: locale })
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
        var result = parse('Q3', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('4st quarter', 'QQQQ', baseDate, { locale: locale })
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
        var result = parse('Nov', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('February', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('J', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('49th', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 29))
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
        var result = parse('Mon', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Mar */, 7))
      })

      it('wide', function() {
        var result = parse('Tuesday', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 8))
      })

      it('narrow', function() {
        var result = parse('W', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 9))
      })

      it('short', function() {
        var result = parse('Th', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 10))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse(
        '2nd day of the week',
        "eo 'day of the week'",
        baseDate,
        { locale: locale }
      )
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
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
