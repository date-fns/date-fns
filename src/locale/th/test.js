// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'

describe('th locale', function () {
  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function () {
      var result = format(date, 'G, GGGG, GGGGG', {locale: locale})
      assert(result === 'ค.ศ., คริสต์ศักราช, คศ')
    })

    describe('year', function () {
      it('ordinal regular year', function () {
        var result = format(date, "yo 'year'", {locale: locale})
        assert(result === '1986 year')
      })

      it('ordinal local week-numbering year', function () {
        var result = format(date, "Yo 'week-numbering year'", {locale: locale})
        assert(result === '1986 week-numbering year')
      })
    })

    describe('quarter', function () {
      it('formatting quarter', function () {
        var result = format(date, 'Qo, QQQ, QQQQ, QQQQQ', {locale: locale})
        assert(result === '2, Q2, ไตรมาสที่สอง, 2')
      })

      it('stand-alone quarter', function () {
        var result = format(date, 'qo, qqq, qqqq, qqqqq', {locale: locale})
        assert(result === '2, Q2, ไตรมาสที่สอง, 2')
      })
    })

    describe('month', function () {
      it('formatting month', function () {
        var result = format(date, 'do MMMM', {locale: locale})
        assert(result === '5 เมษายน')
      })

      it('stand-alone month', function () {
        var result = format(date, "'เดือนที่' Lo, LLL, LLLL, LLLLL", {locale: locale})
        assert(result === 'เดือนที่ 4, เม.ย., เมษายน, เม.ย.')
      })
    })

    describe('week', function () {
      it('ordinal local week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'wo', {locale: locale})
        assert(result === '14')
      })

      it('ordinal ISO week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "'ISO week ที่' Io", {locale: locale})
        assert(result === 'ISO week ที่ 14')
      })
    })

    describe('day', function () {
      it('ordinal date', function () {
        var result = format(date, "'วันนี้วันที่' do", {locale: locale})
        assert(result === 'วันนี้วันที่ 5')
      })

      it('ordinal day of year', function () {
        var result = format(date, 'Do', {locale: locale})
        assert(result === '95')
      })
    })

    describe('week day', function () {
      it('day of week', function () {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', {locale: locale})
        assert(result === 'ส., เสาร์, ส., ส.')
      })

      it('ordinal day of week', function () {
        var result = format(date, 'eo', {locale: locale})
        assert(result === '6')
      })
    })

    describe('day period and hour', function () {
      it('ordinal hour', function () {
        var result = format(date, 'ho', {locale: locale})
        assert(result === '10')
      })

      it('AM, PM', function () {
        var result = format(date, 'h a, h aaaa, haaaaa', {locale: locale})
        assert(result === '10 น., 10 น., 10น')
      })

      it('AM, PM, noon, midnight', function () {
        var result = format(new Date(1986, 3 /* Apr */, 6, 0), 'b, bbbb, bbbbb', {locale: locale})
        assert(result === 'เที่ยงคืน, เที่ยงคืน, เที่ยงคืน')
      })

      it('flexible day periods', function () {
        it('works as expected', function () {
          var result = format(date, 'h B', {locale: locale})
          assert(result === '10 ตอนเช้า')
        })
      })
    })

    it('ordinal minute', function () {
      var result = format(date, "'นาทีที่' mo", {locale: locale})
      assert(result === 'นาทีที่ 32')
    })

    it('ordinal second', function () {
      var result = format(date, 'so', {locale: locale})
      assert(result === '0')
    })

    describe('long format', function () {
      it('short date', function () {
        var result = format(date, 'P', {locale: locale})
        assert(result === '05/04/1986')
      })

      it('medium date', function () {
        var result = format(date, 'PP', {locale: locale})
        assert(result === '5 เม.ย. 1986')
      })

      it('long date', function () {
        var result = format(date, 'PPP', {locale: locale})
        assert(result === '5 เมษายน 1986')
      })

      it('full date', function () {
        var result = format(date, 'PPPP', {locale: locale})
        assert(result === 'วันเสาร์ที่ 5 เมษายน 1986')
      })

      it('short time', function () {
        var result = format(date, 'p', {locale: locale})
        assert(result === '10:32 น.')
      })

      it('medium time', function () {
        var result = format(date, 'pp', {locale: locale})
        assert(result === '10:32:00 น.')
      })

      it('short date + time', function () {
        var result = format(date, 'Pp', {locale: locale})
        assert(result === '05/04/1986, 10:32 น.')
      })

      it('medium date + time', function () {
        var result = format(date, 'PPpp', {locale: locale})
        assert(result === '5 เม.ย. 1986, 10:32:00 น.')
      })

      it('long date + time', function () {
        var result = format(date, 'PPPp', {locale: locale})
        assert(result === '5 เมษายน 1986 เวลา 10:32 น.')
      })

      it('full date + time', function () {
        var result = format(date, 'PPPPp', {locale: locale})
        assert(result === 'วันเสาร์ที่ 5 เมษายน 1986 เวลา 10:32 น.')
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
      assert(result === 'ครึ่งนาที')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'ใน น้อยกว่า 10 วินาที')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'ประมาณ 1 ชั่วโมงที่ผ่านมา')
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
      assert(result === '120 นาที')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'ใน 25 วินาที')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '1 ชั่วโมงที่ผ่านมา')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'อังคารที่แล้วเวลา 12:00 น.')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'เมื่อวานนี้เวลา 10:22 น.')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'วันนี้เวลา 4:50 น.')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'พรุ่งนี้เวลา 7:30 น.')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'อาทิตย์ เวลา 12:00 น.')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '11/04/1986')
    })
  })
})
