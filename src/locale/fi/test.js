// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'

describe('fi locale', function () {
  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function () {
      var result = format(date, 'G, GGGG, GGGGG', {locale: locale})
      assert(result === 'jaa., jälkeen ajanlaskun alun, jaa.')
    })

    describe('year', function () {
      it('ordinal regular year', function () {
        var result = format(date, "yo 'vuosi'", {locale: locale})
        assert(result === '1986. vuosi')
      })

      it('ordinal local week-numbering year', function () {
        var result = format(date, "Yo 'ISO-vuosi'", {locale: locale})
        assert(result === '1986. ISO-vuosi')
      })
    })

    describe('quarter', function () {
      it('formatting quarter', function () {
        var result = format(date, "Qo 'kvartaali', QQQ, QQQQ, QQQQQ", {locale: locale})
        assert(result === '2. kvartaali, Q2, 2. kvartaali, 2')
      })

      it('stand-alone quarter', function () {
        var result = format(date, "qo 'kvartaali', qqq, qqqq, qqqqq", {locale: locale})
        assert(result === '2. kvartaali, Q2, 2. kvartaali, 2')
      })
    })

    describe('month', function () {
      it('formatting month', function () {
        var result = format(date, 'do MMMM', {locale: locale})
        assert(result === '5. huhtikuuta')
      })

      it('stand-alone month', function () {
        var result = format(date, "Lo 'kuukausi', LLL, LLLL, LLLLL", {locale: locale})
        assert(result === '4. kuukausi, huhti, huhtikuu, H')
      })
    })

    describe('week', function () {
      it('ordinal local week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'viikko'", {locale: locale})
        assert(result === '14. viikko')
      })

      it('ordinal ISO week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'ISO-viikko'", {locale: locale})
        assert(result === '14. ISO-viikko')
      })
    })

    describe('day', function () {
      it('ordinal date', function () {
        var result = format(date, "'tänään on' do 'päivä'", {locale: locale})
        assert(result === 'tänään on 5. päivä')
      })

      it('ordinal day of year', function () {
        var result = format(date, "Do 'vuoden päivä'", {locale: locale})
        assert(result === '95. vuoden päivä')
      })
    })

    describe('week day', function () {
      it('standalone day of week', function () {
        var result = format(date, 'ccc, cccc, ccccc, cccccc', {locale: locale})
        assert(result === 'la, lauantai, L, la')
      })

      it('formatting day of week', function () {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', {locale: locale})
        assert(result === 'la, lauantaina, L, la')
      })

      it('ordinal day of week', function () {
        var result = format(date, "'viikon' eo 'päivä'", {locale: locale})
        assert(result === 'viikon 6. päivä')
      })
    })

    describe('day period and hour', function () {
      it('ordinal hour', function () {
        var result = format(date, "ho 'tunti'", {locale: locale})
        assert(result === '10. tunti')
      })

      it('AM, PM', function () {
        var result = format(date, 'h a, h aaaa, h aaaaa', {locale: locale})
        assert(result === '10 ap, 10 ap, 10 ap')
      })

      it('AM, PM, noon, midnight', function () {
        var result = format(new Date(1986, 3 /* Apr */, 6, 0), 'b, bbbb, bbbbb', {locale: locale})
        assert(result === 'keskiyö, keskiyöllä, keskiyö')
      })

      it('flexible day periods', function () {
        var result = format(date, 'h B', {locale: locale})
        assert(result === '10 ap')
      })
    })

    it('ordinal minute', function () {
      var result = format(date, "mo 'minuutti'", {locale: locale})
      assert(result === '32. minuutti')
    })

    it('ordinal second', function () {
      var result = format(date, "so 'sekunti'", {locale: locale})
      assert(result === '0. sekunti')
    })

    describe('long format', function () {
      it('short date', function () {
        var result = format(date, 'P', {locale: locale})
        assert(result === '5.4.1986')
      })

      it('medium date', function () {
        var result = format(date, 'PP', {locale: locale})
        assert(result === '5. huhti 1986')
      })

      it('long date', function () {
        var result = format(date, 'PPP', {locale: locale})
        assert(result === '5. huhtikuuta 1986')
      })

      it('full date', function () {
        var result = format(date, 'PPPP', {locale: locale})
        assert(result === 'lauantaina 5. huhtikuuta 1986')
      })

      it('short time', function () {
        var result = format(date, 'p', {locale: locale})
        assert(result === '10.32')
      })

      it('medium time', function () {
        var result = format(date, 'pp', {locale: locale})
        assert(result === '10.32.00')
      })

      it('short date + time', function () {
        var result = format(date, 'Pp', {locale: locale})
        assert(result === '5.4.1986 10.32')
      })

      it('medium date + time', function () {
        var result = format(date, 'PPpp', {locale: locale})
        assert(result === '5. huhti 1986 10.32.00')
      })

      it('long date + time', function () {
        var result = format(date, 'PPPp', {locale: locale})
        assert(result === '5. huhtikuuta 1986 klo 10.32')
      })

      it('full date + time', function () {
        var result = format(date, 'PPPPp', {locale: locale})
        assert(result === 'lauantaina 5. huhtikuuta 1986 klo 10.32')
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
      assert(result === 'puoli minuuttia')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'alle 10 sekunnin kuluttua')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'noin tunti sitten')
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
      assert(result === '120 minuuttia')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '25 sekunnin kuluttua')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'tunti sitten')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'viime tiistaina klo 00.00')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'eilen klo 22.22')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'tänään klo 16.50')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'huomenna klo 07.30')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'ensi sunnuntaina klo 12.00')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '11.4.1986')
    })
  })
})
