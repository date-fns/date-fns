// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('lv locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'm. ē., mūsu ērā, m.ē')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "yo 'gads'", { locale: locale })
        assert(result === '1986. gads')
      })

      it('ordinal local week-numbering year', function() {
        var result = format(date, "Yo 'week-numbering year'", {
          locale: locale
        })
        assert(result === '1986. week-numbering year')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var result = format(date, "Qo 'ceturksnī', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '2. ceturksnī, 2. cet., otrajā ceturksnī, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "qo 'ceturksnī', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '2. ceturksnī, 2. cet., otrais ceturksnis, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, 'do MMMM', { locale: locale })
        assert(result === '5. aprīlī')
      })

      it('stand-alone month', function() {
        var result = format(date, "Lo 'mēnesis', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '4. mēnesis, apr., aprīlis, A')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'nedēļa'", { locale: locale })
        assert(result === '14. nedēļa')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'ISO nedēļa'", { locale: locale })
        assert(result === '14. ISO nedēļa')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'šodien ir' do 'datums'", { locale: locale })
        assert(result === 'šodien ir 5. datums')
      })

      it('ordinal day of year', function() {
        var result = format(date, "Do 'gada diena'", { locale: locale })
        assert(result === '95. gada diena')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'sestd., sestdienā, S, S')
      })

      it('ordinal day of week', function() {
        var result = format(date, "eo 'nedēļas diena'", { locale: locale })
        assert(result === '6. nedēļas diena')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "ho 'stunda'", { locale: locale })
        assert(result === '10. stunda')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 am, 10 am, 10am')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === 'pusn., pusnaktī, pusn.')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 rītā')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "mo 'minūte'", { locale: locale })
      assert(result === '32. minūte')
    })

    it('ordinal second', function() {
      var result = format(date, "so 'sekunde'", { locale: locale })
      assert(result === '0. sekunde')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '05.04.1986.')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '05.04.1986.')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '1986. gada 4. aprīlī')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === '1986. gada 4. aprīlī., sestdienā')
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
        assert(result === '05.04.1986., 10:32')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '05.04.1986., 10:32:00')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '1986. gada 4. aprīlī plkst. 10:32')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === '1986. gada 4. aprīlī., sestdienā plkst. 10:32')
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
      assert(result === 'pusminūte')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === 'pēc mazāk nekā 10 sekundēm')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'pirms apmēram 1 stundas')
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
      assert(result === '120 minūtes')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'pēc 25 sekundēm')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'pirms 1 stundas')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      })
      assert(result === 'otrdienā plkst. 00:00')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === 'Vakar plkst. 22:22')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === 'Šodien plkst. 16:50')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === 'Rīt plkst. 07:30')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === 'svētdienā plkst. 12:00')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '11.04.1986.')
    })
  })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('10000 p. m. ē.', 'yyyyy G', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('2018 mūsu ērā', 'yyyy GGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('44 p.m.ē', 'y GGGGG', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function() {
      var result = parse('2017.', 'yo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function() {
      it('ordinal', function() {
        var result = parse('1.', 'Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function() {
        var result = parse('3. cet.', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('ceturtajā ceturksnī', 'QQQQ', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function() {
        var result = parse('1', 'QQQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function() {
      it('ordinal', function() {
        var result = parse('6.', 'Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function() {
        var result = parse('nov.', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('februārī', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('J', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('48.', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 24))
    })

    it('ordinal day of month', function() {
      var result = parse('28.', 'do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function() {
      var result = parse('200.', 'Do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function() {
      it('abbreviated', function() {
        var result = parse('P', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function() {
        var result = parse('otrdiena', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function() {
        var result = parse('T', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function() {
        var result = parse('C', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse('2. nedēļas diena', "eo 'nedēļas diena'", baseDate, {
        locale: locale
      })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    describe('AM, PM', function() {
      it('abbreviated', function() {
        var result = parse('5 am', 'h a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function() {
        var result = parse('5 pm', 'h aaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function() {
        var result = parse('11 am', 'h aaaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function() {
      it('abbreviated', function() {
        var result = parse('pusd.', 'b', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function() {
        var result = parse('pusnakts', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function() {
        var result = parse('pusn.', 'bbbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function() {
      it('abbreviated', function() {
        var result = parse('2 nakts', 'h B', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function() {
        var result = parse('12 pēcpusdienā', 'h BBBB', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function() {
        var result = parse('5 vakarā', 'h BBBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function() {
      var dateString = '1. stunda, 2. minūte, 3. sekunde'
      var formatString = "ho 'stunda', mo 'minūte', so 'sekunde'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
