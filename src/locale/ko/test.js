// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('ko locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === 'AD, 서기, AD')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "yo '해'", { locale: locale })
        assert(result === '1986번째 해')
      })

      it('ordinal local week-numbering year', function() {
        var result = format(date, "Yo 'week-numbering year'", {
          locale: locale
        })
        assert(result === '1986번째 week-numbering year')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var result = format(date, "Qo '분기', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '2번째 분기, Q2, 2분기, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "qo '분기', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '2번째 분기, Q2, 2분기, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, 'do MMMM', { locale: locale })
        assert(result === '5번째 4월')
      })

      it('stand-alone month', function() {
        var result = format(date, "Lo '달', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '4번째 달, 4월, 4월, 4')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo '주'", { locale: locale })
        assert(result === '15번째 주')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'ISO 주'", { locale: locale })
        assert(result === '14번째 ISO 주')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'오늘은' do '날이다'", { locale: locale })
        assert(result === '오늘은 5번째 날이다')
      })

      it('ordinal day of year', function() {
        var result = format(date, "'올해' Do '날'", { locale: locale })
        assert(result === '올해 95번째 날')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === '토, 토요일, 토, 토')
      })

      it('ordinal day of week', function() {
        var result = format(date, "'주의' eo '날'", { locale: locale })
        assert(result === '주의 7번째 날')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "ho '시간'", { locale: locale })
        assert(result === '10번째 시간')
      })

      it('AM, PM', function() {
        var result = format(date, 'a h, aaaa h, aaaaa h', { locale: locale })
        assert(result === '오전 10, 오전 10, 오전 10')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === '자정, 자정, 자정')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'B h', { locale: locale })
          assert(result === '아침 10')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "mo '분'", { locale: locale })
      assert(result === '32 분')
    })

    it('ordinal second', function() {
      var result = format(date, "so '초'", { locale: locale })
      assert(result === '0 초')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '1986.04.05')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '1986.04.05')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '1986년 4월 5일')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === '1986년 4월 5일 토요일')
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
        assert(result === '1986.04.05 10:32')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '1986.04.05 10:32:00')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '1986년 4월 5일 10:32')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === '1986년 4월 5일 토요일 10:32')
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
      assert(result === '30초')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === '10초 미만 후')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '약 1시간 전')
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
      assert(result === '120분')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '25초 후')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '1시간 전')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      })
      assert(result === '지난 화요일 00:00')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === '어제 22:22')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '오늘 16:50')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === '내일 07:30')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === '다음 일요일 12:00')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '1986.04.11')
    })
  })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('BC 10000', 'G yyyyy', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('서기 2018', 'GGGG yyyy', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('BC 44', 'GGGGG y', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function() {
      var result = parse('2017번째', 'yo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function() {
      it('ordinal', function() {
        var result = parse('1번째', 'Qo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function() {
        var result = parse('Q3', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('4분기', 'QQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function() {
        var result = parse('1', 'QQQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function() {
      it('ordinal', function() {
        var result = parse('6번째', 'Mo', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function() {
        var result = parse('11월', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('2월', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('1', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('49번째', 'wo', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('ordinal day of month', function() {
      var result = parse('28번째', 'do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function() {
      var result = parse('200번째', 'Do', baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function() {
      it('abbreviated', function() {
        var result = parse('월', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function() {
        var result = parse('화요일', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function() {
        var result = parse('수', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function() {
        var result = parse('목', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse('그주의 2번째 날', "'그주의' eo '날'", baseDate, {
        locale: locale
      })
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    describe('AM, PM', function() {
      it('abbreviated', function() {
        var result = parse('오전 5', 'a h', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function() {
        var result = parse('오후 5', 'aaaa h', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function() {
        var result = parse('오전 11', 'aaaaa h', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function() {
      it('abbreviated', function() {
        var result = parse('정오', 'b', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function() {
        var result = parse('자정', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function() {
        var result = parse('자정', 'bbbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function() {
      it('abbreviated', function() {
        var result = parse('밤 2시', 'B h시', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function() {
        var result = parse('오후 12시', 'BBBB h시', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function() {
        var result = parse('저녁 5시', 'BBBBB h시', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function() {
      var dateString = '1번째 시간, 2번째 분, 3번째 초'
      var formatString = "ho '시간', mo '분', so '초'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
