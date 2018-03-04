// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('ru locale', function () {
  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function () {
      var result = format(date, 'G, GGGG, GGGGG', {locale: locale})
      assert(result === 'н. э., нашей эры, н.э.')
    })

    describe('year', function () {
      it('ordinal regular year', function () {
        var result = format(date, "yo 'год'", {locale: locale})
        assert(result === '1986-й год')
      })

      it('ordinal local week-numbering year', function () {
        var result = format(date, "Yo 'год'", {locale: locale})
        assert(result === '1986-й год')
      })
    })

    describe('quarter', function () {
      it('formatting quarter', function () {
        var result = format(date, "Qo 'квартал', QQQ, QQQQ, QQQQQ", {locale: locale})
        assert(result === '2-й квартал, 2-й кв., 2-й квартал, 2')
      })

      it('stand-alone quarter', function () {
        var result = format(date, "qo 'квартал', qqq, qqqq, qqqqq", {locale: locale})
        assert(result === '2-й квартал, 2-й кв., 2-й квартал, 2')
      })
    })

    describe('month', function () {
      it('formatting month', function () {
        var result = format(date, 'do MMMM', {locale: locale})
        assert(result === '5-е апреля')
      })

      it('stand-alone month', function () {
        var result = format(date, "Lo 'месяц', LLL, LLLL, LLLLL", {locale: locale})
        assert(result === '4-й месяц, апр., апрель, А')
      })
    })

    describe('week', function () {
      it('ordinal local week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'неделя'", {locale: locale})
        assert(result === '14-я неделя')
      })

      it('ordinal ISO week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'неделя'", {locale: locale})
        assert(result === '14-я неделя')
      })
    })

    describe('day', function () {
      it('ordinal date', function () {
        var result = format(date, "'сегодня' do 'число'", {locale: locale})
        assert(result === 'сегодня 5-е число')
      })

      it('ordinal day of year', function () {
        var result = format(date, "Do 'день года'", {locale: locale})
        assert(result === '95-й день года')
      })
    })

    describe('week day', function () {
      it('day of week', function () {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', {locale: locale})
        assert(result === 'суб, суббота, С, сб')
      })

      it('ordinal day of week', function () {
        var result = format(date, "eo 'день недели'", {locale: locale})
        assert(result === '6-й день недели')
      })
    })

    describe('day period and hour', function () {
      it('ordinal hour', function () {
        var result = format(date, "ho 'час'", {locale: locale})
        assert(result === '10-й час')
      })

      it('AM, PM', function () {
        var result = format(date, 'h a, h aaaa, haaaaa', {locale: locale})
        assert(result === '10 ДП, 10 ДП, 10ДП')
      })

      it('AM, PM, noon, midnight', function () {
        var result = format(new Date(1986, 3 /* Apr */, 6, 0), 'b, bbbb, bbbbb', {locale: locale})
        assert(result === 'полн., полночь, полн.')
      })

      it('flexible day periods', function () {
        it('works as expected', function () {
          var result = format(date, 'h B', {locale: locale})
          assert(result === '10 утра')
        })
      })
    })

    it('ordinal minute', function () {
      var result = format(date, "mo 'минута'", {locale: locale})
      assert(result === '32-я минута')
    })

    it('ordinal second', function () {
      var result = format(date, "so 'секунда'", {locale: locale})
      assert(result === '0-я секунда')
    })

    describe('long format', function () {
      it('short date', function () {
        var result = format(date, 'P', {locale: locale})
        assert(result === '05.04.1986')
      })

      it('medium date', function () {
        var result = format(date, 'PP', {locale: locale})
        assert(result === '5 апр. 1986 г.')
      })

      it('long date', function () {
        var result = format(date, 'PPP', {locale: locale})
        assert(result === '5-е апреля 1986 г.')
      })

      it('full date', function () {
        var result = format(date, 'PPPP', {locale: locale})
        assert(result === 'суббота, 5-е апреля 1986 г.')
      })

      it('short time', function () {
        var result = format(date, 'p', {locale: locale})
        assert(result === '10:32')
      })

      it('medium time', function () {
        var result = format(date, 'pp', {locale: locale})
        assert(result === '10:32:00')
      })

      it('short date + time', function () {
        var result = format(date, 'Pp', {locale: locale})
        assert(result === '05.04.1986, 10:32')
      })

      it('medium date + time', function () {
        var result = format(date, 'PPpp', {locale: locale})
        assert(result === '5 апр. 1986 г., 10:32:00')
      })

      it('long date + time', function () {
        var result = format(date, 'PPPp', {locale: locale})
        assert(result === '5-е апреля 1986 г., 10:32')
      })

      it('full date + time', function () {
        var result = format(date, 'PPPPp', {locale: locale})
        assert(result === 'суббота, 5-е апреля 1986 г., 10:32')
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
      assert(result === 'полминуты')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'меньше, чем через 10 секунд')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'около 1 часа назад')
      })
    })
  })

  context('with `formatDistanceStrict`', function () {
    it('works as expected', function () {
      var result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        {locale: locale, unit: 'minute'}
      )
      assert(result === '120 минут')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'через 25 секунд')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '1 час назад')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 2 /* Mar */, 30), baseDate, {locale: locale})
      assert(result === 'в прошлое воскресенье в 0:00')
    })

    it('this week, before yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'во вторник в 0:00')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'вчера в 22:22')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'сегодня в 16:50')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'завтра в 7:30')
    })

    it('this week, after tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'в воскресенье в 12:00')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 7, 12, 0), baseDate, {locale: locale})
      assert(result === 'в следующий понедельник в 12:00')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '11.04.1986')
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function () {
      it('abbreviated', function () {
        var result = parse('10000 до н. э.', 'yyyyy G', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function () {
        var result = parse('2018 нашей эры', 'yyyy GGGG', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function () {
        var result = parse('44 до н.э.', 'y GGGGG', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function () {
      var result = parse('2017-й', 'yo', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function () {
      it('ordinal', function () {
        var result = parse('1-й', 'Qo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function () {
        var result = parse('3-й кв.', 'QQQ', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function () {
        var result = parse('4-й квартал', 'QQQQ', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function () {
        var result = parse('1', 'QQQQQ', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function () {
      it('ordinal', function () {
        var result = parse('6-й', 'Mo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function () {
        var result = parse('ноя', 'MMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function () {
        var result = parse('февраль', 'MMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function () {
        var result = parse('Я', 'MMMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function () {
      var result = parse('49-я', 'wo', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('ordinal day of month', function () {
      var result = parse('28-й', 'do', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function () {
      var result = parse('200-й', 'Do', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function () {
      it('abbreviated', function () {
        var result = parse('пнд', 'E', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function () {
        var result = parse('вторник', 'EEEE', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function () {
        var result = parse('С', 'EEEEE', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function () {
        var result = parse('чт', 'EEEEEE', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function () {
      var result = parse('2-й день недели', "eo 'день недели'", baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    describe('AM, PM', function () {
      it('abbreviated', function () {
        var result = parse('5 ДП', 'h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function () {
        var result = parse('5 ПП', 'h aaaa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function () {
        var result = parse('11 ДП', 'h aaaaa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function () {
      it('abbreviated', function () {
        var result = parse('полд.', 'b', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function () {
        var result = parse('полночь', 'bbbb', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function () {
        var result = parse('полн.', 'bbbbb', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function () {
      it('abbreviated', function () {
        var result = parse('2 ночи', 'h B', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function () {
        var result = parse('12 дня', 'h BBBB', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function () {
        var result = parse('5 вечера', 'h BBBBB', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function () {
      var dateString = '1-й час, 2-я минута, 3-я секунда'
      var formatString = "ho 'час', mo 'минута', so 'секунда'"
      var result = parse(dateString, formatString, baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
