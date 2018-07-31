// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('nb locale', function () {
  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function () {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'e.Kr., etter Kristus, e.Kr.')
    })

    describe('year', function () {
      it('ordinal regular year', function () {
        var result = format(date, "yo 'året'", { locale: locale })
        assert(result === '1986. året')
      })

      it('ordinal local week-numbering year', function () {
        var result = format(date, "Yo 'uke-tellende år'", { locale: locale })
        assert(result === '1986. uke-tellende år')
      })
    })

    describe('quarter', function () {
      it('formatting quarter', function () {
        var result = format(date, "Qo 'kvartal', QQQ, QQQQ, QQQQQ", { locale: locale })
        assert(result === '2. kvartal, Q2, 2. kvartal, 2')
      })

      it('stand-alone quarter', function () {
        var result = format(date, "qo 'kvartal', qqq, qqqq, qqqqq", { locale: locale })
        assert(result === '2. kvartal, Q2, 2. kvartal, 2')
      })
    })

    describe('month', function () {
      it('formatting month', function () {
        var result = format(date, 'do MMMM', { locale: locale })
        assert(result === '5. april')
      })

      it('stand-alone month', function () {
        var result = format(date, "Lo 'måneden', LLL, LLLL", { locale: locale })
        assert(result === '4. måneden, apr., april')
      })
    })

    describe('week', function () {
      it('ordinal local week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'uken'", { locale: locale })
        assert(result === '14. uken')
      })

      it('ordinal ISO week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'ISO uken'", { locale: locale })
        assert(result === '14. ISO uken')
      })
    })

    describe('day', function () {
      it('ordinal date', function () {
        var result = format(date, "'i dag er den' do", { locale: locale })
        assert(result === 'i dag er den 5.')
      })

      it('ordinal day of year', function () {
        var result = format(date, "Do 'dagen i året'", { locale: locale })
        assert(result === '95. dagen i året')
      })
    })

    describe('week day', function () {
      it('day of week', function () {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'lør, lørdag, L, lø')
      })

      it('ordinal day of week', function () {
        var result = format(date, "eo 'dagen i uken'", { locale: locale })
        assert(result === '6. dagen i uken')
      })
    })

    describe('day period and hour', function () {
      it('ordinal hour', function () {
        var result = format(date, "ho 'timen'", { locale: locale })
        assert(result === '10. timen')
      })

      it('AM, PM', function () {
        var result = format(date, 'h a, h aaaa, haaaaa', {locale: locale})
        assert(result === '10 a.m., 10 a.m., 10a')
      })

      it('AM, PM, noon, midnight', function () {
        var result = format(new Date(1986, 3 /* Apr */, 6, 0), 'b, bbbb', { locale: locale })
        assert(result === 'midnatt, midnatt')
      })

      it('flexible day periods', function () {
        it('works as expected', function () {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 på morgenen')
        })
      })
    })

    it('ordinal minute', function () {
      var result = format(date, "mo 'minutt'", { locale: locale })
      assert(result === '32. minutt')
    })

    it('ordinal second', function () {
      var result = format(date, "so 'sekund'", { locale: locale })
      assert(result === '0. sekund')
    })

    describe('long format', function () {
      it('short date', function () {
        var result = format(date, 'P', { locale: locale })
        assert(result === '05.04.1986')
      })

      it('medium date', function () {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '5. apr. 1986')
      })

      it('long date', function () {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '5. april 1986')
      })

      it('full date', function () {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === 'lørdag 5. april 1986')
      })

      it('short time', function () {
        var result = format(date, 'p', { locale: locale })
        assert(result === '10:32')
      })

      it('medium time', function () {
        var result = format(date, 'pp', { locale: locale })
        assert(result === '10:32:00')
      })

      it('short date + time', function () {
        var result = format(date, 'Pp', { locale: locale })
        assert(result === '05.04.1986 10:32')
      })

      it('medium date + time', function () {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '5. apr. 1986 10:32:00')
      })

      it('long date + time', function () {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '5. april 1986 kl. 10:32')
      })

      it('full date + time', function () {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === 'lørdag 5. april 1986 kl. 10:32')
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
      assert(result === 'et halvt minutt')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === 'om mindre enn ti sekunder')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'omtrent en time siden')
      })
    })
  })

  context('with `formatDistanceStrict`', function () {
    it('works as expected', function () {
      var result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        { locale: locale, unit: 'minute' }
      )
      assert(result === '120 minutter')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'om 25 sekunder')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'en time siden')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, { locale: locale })
      assert(result === 'forrige tirsdag kl. 00:00')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, { locale: locale })
      assert(result === 'i går kl. 22:22')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, { locale: locale })
      assert(result === 'i dag kl. 16:50')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, { locale: locale })
      assert(result === 'i morgen kl. 07:30')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, { locale: locale })
      assert(result === 'søndag kl. 12:00')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, { locale: locale })
      assert(result === '11.04.1986')
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function () {
      it('abbreviated', function () {
        var result = parse('10000 f.Kr.', 'yyyyy G', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function () {
        var result = parse('2018 etter Kristus', 'yyyy GGGG', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function () {
        var result = parse('44 f.Kr.', 'y GGGGG', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function () {
      var result = parse('2017.', 'yo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function () {
      it('ordinal', function () {
        var result = parse('1.', 'Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function () {
        var result = parse('Q3', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function () {
        var result = parse('4. kvartal', 'QQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function () {
        var result = parse('1', 'QQQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function () {
      it('ordinal', function () {
        var result = parse('6.', 'Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function () {
        var result = parse('nov.', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function () {
        var result = parse('februar', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function () {
        var result = parse('J', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function () {
      var result = parse('49.', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 31))
    })

    it('ordinal day of month', function () {
      var result = parse('28.', 'do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function () {
      var result = parse('200.', 'Do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function () {
      it('abbreviated', function () {
        var result = parse('man', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function () {
        var result = parse('tirsdag', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function () {
        var result = parse('O', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function () {
        var result = parse('to', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function () {
      var result = parse('2.', 'eo', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    })

    describe('AM, PM', function () {
      it('abbreviated', function () {
        var result = parse('5 AM', 'h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function () {
        var result = parse('5 p.m.', 'h aaaa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function () {
        var result = parse('11 a', 'h aaaaa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function () {
      it('abbreviated', function () {
        var result = parse('middag', 'b', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function () {
        var result = parse('midnatt', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function () {
        var result = parse('midnatt', 'bbbbb', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function () {
      it('abbreviated', function () {
        var result = parse('02 på natten', 'HH B', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function () {
        var result = parse('12 på ettermiddagen', 'HH BBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function () {
        var result = parse('17 på kvelden', 'HH BBBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function () {
      var dateString = '1. time, 2. minuttet, 3. sekundet'
      var formatString = "ho 'time', mo 'minuttet', so 'sekundet'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
