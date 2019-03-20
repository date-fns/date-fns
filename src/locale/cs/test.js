// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('cs locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'n. l., našeho letopočtu, n. l.')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "yo 'year'", { locale: locale })
        assert(result === '1986. year')
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
        var result = format(date, "Qo 'čtvrtletí', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '2. čtvrtletí, 2. čtvrtletí, 2. čtvrtletí, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "qo 'čtvrtletí', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '2. čtvrtletí, 2. čtvrtletí, 2. čtvrtletí, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, 'do MMMM', { locale: locale })
        assert(result === '5. duben')
      })

      it('stand-alone month', function() {
        var result = format(date, "Lo 'měsíc', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '4. měsíc, dub, duben, D')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'týden'", { locale: locale })
        assert(result === '14. týden')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'ISO týden'", { locale: locale })
        assert(result === '14. ISO týden')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'dnes je' do", { locale: locale })
        assert(result === 'dnes je 5.')
      })

      it('ordinal day of year', function() {
        var result = format(date, "Do 'den v roce'", { locale: locale })
        assert(result === '95. den v roce')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === 'sob, sobota, so, so')
      })

      it('ordinal day of week', function() {
        var result = format(date, "eo 'den v týdnu'", { locale: locale })
        assert(result === '6. den v týdnu')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "ho 'hodina'", { locale: locale })
        assert(result === '10. hodina')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 odp., 10 odpoledne, 10odp.')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === 'půlnoc, půlnoc, půlnoc')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 ráno')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "mo 'minuta'", { locale: locale })
      assert(result === '32. minuta')
    })

    it('ordinal second', function() {
      var result = format(date, "so 'vteřina'", { locale: locale })
      assert(result === '0. vteřina')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '5.4.86')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '5.4.1986')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '5. duben 1986')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === 'sobota, 5. duben 1986')
      })

      it('short time', function() {
        var result = format(date, 'p', { locale: locale })
        assert(result === '10:32 odp.')
      })

      it('medium time', function() {
        var result = format(date, 'pp', { locale: locale })
        assert(result === '10:32:00 odp.')
      })

      it('short date + time', function() {
        var result = format(date, 'Pp', { locale: locale })
        assert(result === '5.4.86, 10:32 odp.')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '5.4.1986, 10:32:00 odp.')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '5. duben 1986 v 10:32 odp.')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === 'sobota, 5. duben 1986 v 10:32 odp.')
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
      assert(result === 'půl minuty')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === 'za méně než 10 vteřin')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'přibližně před hodinou')
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
      assert(result === '120 minut')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'za 25 vteřin')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === 'před hodinou')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      })
      assert(result === 'poslední úterý ve 12:00 odp.')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === 'včera v 10:22 dop.')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === 'dnes v 4:50 dop.')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === 'zítra v 7:30 odp.')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === 'v neděle o 12:00 dop.')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '11.4.86')
    })
  })

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

    // describe('month', function () {
    //   it('ordinal', function () {
    //     var result = parse('6th', 'Mo', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
    //   })

    //   it('abbreviated', function () {
    //     var result = parse('Nov', 'MMM', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
    //   })

    //   it('wide', function () {
    //     var result = parse('February', 'MMMM', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
    //   })

    //   it('narrow', function () {
    //     var result = parse('J', 'MMMMM', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
    //   })
    // })

    // it('ordinal week of year', function () {
    //   var result = parse('49th', 'wo', baseDate, {locale: locale})
    //   assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    // })

    // it('ordinal day of month', function () {
    //   var result = parse('28th', 'do', baseDate, {locale: locale})
    //   assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    // })

    // it('ordinal day of year', function () {
    //   var result = parse('200th', 'Do', baseDate, {locale: locale})
    //   assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    // })

    // describe('day of week', function () {
    //   it('abbreviated', function () {
    //     var result = parse('Mon', 'E', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    //   })

    //   it('wide', function () {
    //     var result = parse('Tuesday', 'EEEE', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
    //   })

    //   it('narrow', function () {
    //     var result = parse('W', 'EEEEE', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
    //   })

    //   it('short', function () {
    //     var result = parse('Th', 'EEEEEE', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
    //   })
    // })

    // it('ordinal local day of week', function () {
    //   var result = parse('2nd day of the week', "eo 'day of the week'", baseDate, {locale: locale})
    //   assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    // })

    // describe('AM, PM', function () {
    //   it('abbreviated', function () {
    //     var result = parse('5 AM', 'h a', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
    //   })

    //   it('wide', function () {
    //     var result = parse('5 p.m.', 'h aaaa', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    //   })

    //   it('narrow', function () {
    //     var result = parse('11 a', 'h aaaaa', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
    //   })
    // })

    // describe('AM, PM, noon, midnight', function () {
    //   it('abbreviated', function () {
    //     var result = parse('noon', 'b', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    //   })

    //   it('wide', function () {
    //     var result = parse('midnight', 'bbbb', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    //   })

    //   it('narrow', function () {
    //     var result = parse('mi', 'bbbbb', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
    //   })
    // })

    // describe('flexible day period', function () {
    //   it('abbreviated', function () {
    //     var result = parse('2 at night', 'h B', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
    //   })

    //   it('wide', function () {
    //     var result = parse('12 in the afternoon', 'h BBBB', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
    //   })

    //   it('narrow', function () {
    //     var result = parse('5 in the evening', 'h BBBBB', baseDate, {locale: locale})
    //     assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
    //   })
    // })

    // it('ordinal time', function () {
    //   var dateString = '1st hour, 2nd minute, 3rd second'
    //   var formatString = "ho 'hour', mo 'minute', so 'second'"
    //   var result = parse(dateString, formatString, baseDate, {locale: locale})
    //   assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    // })
  })
})
