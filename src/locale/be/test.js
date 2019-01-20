// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('be locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'н. э., нашай эры, н.э.')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "yo 'год'", { locale: locale })
        assert(result === '1986-ы год')
      })

      it('ordinal regular year when the count ends with 2 or 3 but not with 12 or 13', function() {
        var date = new Date(1982, 3 /* Apr */, 5, 10, 32, 0, 900)
        var result = format(date, "yo 'год'", { locale: locale })
        assert(result === '1982-і год')
      })

      it('ordinal local week-numbering year', function() {
        var result = format(date, "Yo 'год'", { locale: locale })
        assert(result === '1986-ы год')
      })

      it('ordinal regular year when the count ends with 2 or 3 but not with 12 or 13', function() {
        var date = new Date(1982, 3 /* Apr */, 5, 10, 32, 0, 900)
        var result = format(date, "Yo 'год'", { locale: locale })
        assert(result === '1982-і год')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var date = new Date(1982, 1 /* Feb */, 5, 10, 32, 0, 900)
        var result = format(date, "Qo 'квартал', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '1-ы квартал, 1-ы кв., 1-ы квартал, 1')
      })

      it('formatting quarter when the count ends with 2 or 3', function() {
        var result = format(date, "Qo 'квартал', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '2-і квартал, 2-і кв., 2-і квартал, 2')
      })

      it('stand-alone quarter', function() {
        var date = new Date(1982, 1 /* Feb */, 5, 10, 32, 0, 900)
        var result = format(date, "qo 'квартал', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '1-ы квартал, 1-ы кв., 1-ы квартал, 1')
      })

      it('stand-alone quarter when the count ends with 2 or 3 but not with 12 or 13', function() {
        var result = format(date, "qo 'квартал', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '2-і квартал, 2-і кв., 2-і квартал, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, 'd MMMM', { locale: locale })
        assert(result === '5 красавіка')
      })

      it('stand-alone month', function() {
        var result = format(date, "Lo 'месяц', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '4-ы месяц, крас., красавік, К')
      })

      it('stand-alone month when the count ends with 2 or 3 but not with 12 or 13', function() {
        var date = new Date(1982, 1 /* Feb */, 5, 10, 32, 0, 900)
        var result = format(date, "Lo 'месяц', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '2-і месяц, лют., люты, Л')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'тыдзень'", { locale: locale })
        assert(result === '14-ы тыдзень')
      })

      it('ordinal local week of year when the count ends with 2 or 3 but not with 12 or 13', function() {
        var date = new Date(1986, 4 /* May */, 28)
        var result = format(date, "wo 'тыдзень'", { locale: locale })
        assert(result === '22-і тыдзень')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'тыдзень'", { locale: locale })
        assert(result === '14-ы тыдзень')
      })

      it('ordinal ISO week of year when the count ends with 2 or 3 but not with 12 or 13', function() {
        var date = new Date(1986, 4 /* May */, 28)
        var result = format(date, "Io 'тыдзень'", { locale: locale })
        assert(result === '22-і тыдзень')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "do 'верасня'", { locale: locale })
        assert(result === '5-га верасня')
      })

      it('ordinal day of year', function() {
        var result = format(date, "Do 'дзень года'", { locale: locale })
        assert(result === '95-ы дзень года')
      })

      it('ordinal day of year when the count ends with 2 or 3 but not with 12 or 13', function() {
        var date = new Date(1986, 3 /* Apr */, 3, 10, 32, 0, 900)
        var result = format(date, "Do 'дзень года'", { locale: locale })
        assert(result === '93-і дзень года')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'суб, субота, С, сб')
      })

      it('ordinal day of week', function() {
        var result = format(date, "eo 'дзень тыдня'", { locale: locale })
        assert(result === '6-ы дзень тыдня')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "ho 'гадзіна'", { locale: locale })
        assert(result === '10-я гадзіна')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 ДП, 10 ДП, 10ДП')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === 'поўн., поўнач, поўн.')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 раніцы')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "mo 'хвіліна'", { locale: locale })
      assert(result === '32-я хвіліна')
    })

    it('ordinal second', function() {
      var result = format(date, "so 'секунда'", { locale: locale })
      assert(result === '0-я секунда')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '05.04.1986')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '5 крас. 1986 г.')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '5 красавіка 1986 г.')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === 'субота, 5 красавіка 1986 г.')
      })

      it('short time', function() {
        var result = format(date, 'p', { locale: locale })
        assert(result === '10:32')
      })

      it('medium time', function() {
        var result = format(date, 'pp', { locale: locale })
        assert(result === '10:32:00')
      })

      it('short date + time', function() {
        var result = format(date, 'Pp', { locale: locale })
        assert(result === '05.04.1986, 10:32')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '5 крас. 1986 г., 10:32:00')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '5 красавіка 1986 г., 10:32')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === 'субота, 5 красавіка 1986 г., 10:32')
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
      assert(result === 'паўхвіліны')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === 'менш, чым праз 10 секунд')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'каля 1 гадзіны таму')
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
      assert(result === '120 хвілін')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'праз 25 секунд')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '1 гадзіну таму')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 2 /* Mar */, 29), baseDate, {
        locale: locale
      })
      assert(result === 'у мінулую суботу а 0:00')
    })

    it('this week, before yesterday', function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      })
      assert(result === 'у аўторак а 0:00')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === 'учора а 22:22')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === 'сёння а 16:50')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === 'заўтра а 7:30')
    })

    it('this week, after tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === 'у нядзелю а 12:00')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 7, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === 'у наступны панядзелак а 12:00')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '11.04.1986')
    })
  })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('10000 да н. э.', 'yyyyy G', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('2018 нашай эры', 'yyyy GGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('44 да н.э.', 'y GGGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function() {
      var result = parse('2017-ы', 'yo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function() {
      it('ordinal', function() {
        var result = parse('1-ы', 'Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function() {
        var result = parse('3-і кв.', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('4-ы квартал', 'QQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function() {
        var result = parse('1', 'QQQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function() {
      it('ordinal', function() {
        var result = parse('6-ы', 'Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function() {
        var result = parse('ліст.', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('люты', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('С', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('49-ы', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
    })

    it('ordinal day of month', function() {
      var result = parse('28-ы', 'do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function() {
      var result = parse('200-ы', 'Do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function() {
      it('abbreviated', function() {
        var result = parse('пнд', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function() {
        var result = parse('аўторак', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function() {
        var result = parse('С', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function() {
        var result = parse('чц', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse('2-і дзень тыдня', "eo 'дзень тыдня'", baseDate, {
        locale: locale
      })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    describe('AM, PM', function() {
      it('abbreviated', function() {
        var result = parse('5 ДП', 'h a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function() {
        var result = parse('5 ПП', 'h aaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function() {
        var result = parse('11 ДП', 'h aaaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function() {
      it('abbreviated', function() {
        var result = parse('поўд.', 'b', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function() {
        var result = parse('поўнач', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function() {
        var result = parse('поўн.', 'bbbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function() {
      it('abbreviated', function() {
        var result = parse('2 ночы', 'h B', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function() {
        var result = parse('12 дня', 'h BBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function() {
        var result = parse('5 веч.', 'h BBBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function() {
      var dateString = '1-я гадзіна, 2-я хвіліна, 3-я секунда'
      var formatString = "ho 'гадзіна', mo 'хвіліна', so 'секунда'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
