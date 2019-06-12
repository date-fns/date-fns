// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('ca locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* abr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'DC, Després de Crist, DC')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "yo 'any'", { locale: locale })
        assert(result === '1986è any')
      })

      it('ordinal local week-numeric year', function() {
        var result = format(date, "Yo 'setmana-numero any'", {
          locale: locale
        })
        assert(result === '1986è setmana-numero any')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var result = format(date, "Qo 'trimestre', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '2on trimestre, T2, 2on trimestre, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "qo 'trimestre', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '2on trimestre, T2, 2on trimestre, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, "do 'de' MMMM", { locale: locale })
        assert(result === '5è de abril')
      })

      it('stand-alone month', function() {
        var result = format(date, "Lo 'mes', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '4rt mes, abr, abril, a')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* abr */, 6)
        var result = format(date, "wo 'setmana'", { locale: locale })
        assert(result === '14è setmana')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* abr */, 6)
        var result = format(date, "Io 'ISO setmana'", { locale: locale })
        assert(result === '14è ISO setmana')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'avui és el' do", { locale: locale })
        assert(result === 'avui és el 5è')
      })

      it('ordinal day of year', function() {
        var result = format(date, "Do 'dia de lany'", { locale: locale })
        assert(result === '95è dia de lany')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'dis, dissabte, ds, ds.')
      })

      it('ordinal day of week', function() {
        var result = format(date, "eo 'dia de la setmana'", { locale: locale })
        assert(result === '6è dia de la setmana')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "ho 'hora'", { locale: locale })
        assert(result === '10è hora')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 AM, 10 a.m., 10a')
      })

      it('AM, PM, noon, mitjanit', function() {
        var result = format(
          new Date(1986, 3 /* abr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === 'mitjanit, mitjanit, mn')
      })

      describe('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 del matí')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "mo 'minut'", { locale: locale })
      assert(result === '32on minut')
    })

    it('ordinal second', function() {
      var result = format(date, "so 'segon'", { locale: locale })
      assert(result === '0è segon')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '05/04/1986')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '5 abr 1986')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '5 de abril 1986')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === 'dissabte, 5 de abril 1986')
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
        assert(result === '05/04/1986, 10:32')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '5 abr 1986, 10:32:00')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '5 de abril 1986 a les 10:32')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === 'dissabte, 5 de abril 1986 a les 10:32')
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
      assert(result === 'mig minut')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === 'en menys de 10 segons')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'fa aproximadament una hora')
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
      assert(result === '120 minuts')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'en 25 segons')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'fa 1 hora')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* abr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 3 /* abr */, 1), baseDate, {
        locale: locale
      })
      assert(result === 'el dimarts passat a les 00:00')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* abr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === 'ahir a les 22:22')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* abr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === 'avui a les 16:50')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* abr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === 'demà a les 07:30')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* abr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === 'diumenge a les 12:00')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* abr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '11/04/1986')
    })
  })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* abr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('10000 AC', 'yyyyy G', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('2018 Després de Crist', 'yyyy GGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('44 AC', 'y GGGGG', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function() {
      var result = parse('2017è', 'yo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function() {
      it('ordinal', function() {
        var result = parse('1er', 'Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function() {
        var result = parse('T3', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('4rt trimestre', 'QQQQ', baseDate, {
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
        var result = parse('6è', 'Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function() {
        var result = parse('nov', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('febrer', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('g', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('49è', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 31))
    })

    it('ordinal day of month', function() {
      var result = parse('28è', 'do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* abr */, 28))
    })

    it('ordinal day of year', function() {
      var result = parse('200è', 'Do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function() {
      it('abbreviated', function() {
        var result = parse('dil', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function() {
        var result = parse('dimarts', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 1))
      })

      it('narrow', function() {
        var result = parse('dm', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 2))
      })

      it('short', function() {
        var result = parse('dj.', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 3))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse(
        '2on dia de la setmana',
        "eo 'dia de la setmana'",
        baseDate,
        { locale: locale }
      )
      assert.deepEqual(result, new Date(1986, 3 /* Mar */, 1))
    })

    describe('AM, PM', function() {
      it('abbreviated', function() {
        var result = parse('5 AM', 'h a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 5))
      })

      it('wide', function() {
        var result = parse('5 p.m.', 'h aaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 17))
      })

      it('narrow', function() {
        var result = parse('11 a', 'h aaaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function() {
      it('abbreviated', function() {
        var result = parse('migdia', 'b', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 12))
      })

      it('wide', function() {
        var result = parse('mitjanit', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 0))
      })

      it('narrow', function() {
        var result = parse('mn', 'bbbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 0))
      })
    })

    describe('flexible day period', function() {
      it('abbreviated', function() {
        var result = parse('2 de la nit', 'h B', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 2))
      })

      it('wide', function() {
        var result = parse('12 de la tarda', 'h BBBB', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 12))
      })

      it('narrow', function() {
        var result = parse('5 del vespre', 'h BBBBB', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 17))
      })
    })

    it('ordinal time', function() {
      var dateString = '1er hora, 2on minut, 3er segon'
      var formatString = "ho 'hora', mo 'minut', so 'segon'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* abr */, 4, 1, 2, 3))
    })
  })
})
