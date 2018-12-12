// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('zh-CN locale', function() {
  context('with `format`', function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function() {
      var result = format(date, 'G, GGGG, GGGGG', { locale: locale })
      assert(result === '公元, 公元, 公元')
    })

    describe('year', function() {
      it('ordinal regular year', function() {
        var result = format(date, "yo '年'", { locale: locale })
        assert(result === '第 1986 年')
      })

      it('ordinal local week-numbering year', function() {
        var result = format(date, "Yo '年'", { locale: locale })
        assert(result === '第 1986 年')
      })
    })

    describe('quarter', function() {
      it('formatting quarter', function() {
        var result = format(date, "Qo '刻', QQQ, QQQQ, QQQQQ", {
          locale: locale
        })
        assert(result === '第 2 刻, 第二刻, 第二刻钟, 2')
      })

      it('stand-alone quarter', function() {
        var result = format(date, "qo '刻', qqq, qqqq, qqqqq", {
          locale: locale
        })
        assert(result === '第 2 刻, 第二刻, 第二刻钟, 2')
      })
    })

    describe('month', function() {
      it('formatting month', function() {
        var result = format(date, "MMMM do '天'", { locale: locale })
        assert(result === '四月 第 5 天')
      })

      it('stand-alone month', function() {
        var result = format(date, "Lo '月', LLL, LLLL, LLLLL", {
          locale: locale
        })
        assert(result === '第 4 月, 4月, 四月, 四')
      })
    })

    describe('week', function() {
      it('ordinal local week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo '周'", { locale: locale })
        assert(result === '第 14 周')
      })

      it('ordinal ISO week of year', function() {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io '周'", { locale: locale })
        assert(result === '第 14 周')
      })
    })

    describe('day', function() {
      it('ordinal date', function() {
        var result = format(date, "'今天是' do '日'", { locale: locale })
        assert(result === '今天是 第 5 日')
      })

      it('ordinal day of year', function() {
        var result = format(date, "'本年' Do '天'", { locale: locale })
        assert(result === '本年 第 95 天')
      })
    })

    describe('week day', function() {
      it('day of week', function() {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', { locale: locale })
        assert(result === '周六, 星期六, 六, 六')
      })

      it('ordinal day of week', function() {
        var result = format(date, "'本周' eo '天'", { locale: locale })
        assert(result === '本周 第 6 天')
      })
    })

    describe('day period and hour', function() {
      it('ordinal hour', function() {
        var result = format(date, "ho '时'", { locale: locale })
        assert(result === '第 10 时')
      })

      it('AM, PM', function() {
        var result = format(date, 'h a, h aaaa, haaaaa', { locale: locale })
        assert(result === '10 上午, 10 上午, 10上')
      })

      it('AM, PM, noon, midnight', function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          'b, bbbb, bbbbb',
          { locale: locale }
        )
        assert(result === '凌晨, 凌晨, 凌晨')
      })

      it('flexible day periods', function() {
        it('works as expected', function() {
          var result = format(date, 'h B', { locale: locale })
          assert(result === '10 上午')
        })
      })
    })

    it('ordinal minute', function() {
      var result = format(date, "mo '分'", { locale: locale })
      assert(result === '第 32 分')
    })

    it('ordinal second', function() {
      var result = format(date, "so '秒'", { locale: locale })
      assert(result === '第 0 秒')
    })

    describe('long format', function() {
      it('short date', function() {
        var result = format(date, 'P', { locale: locale })
        assert(result === '86-04-05')
      })

      it('medium date', function() {
        var result = format(date, 'PP', { locale: locale })
        assert(result === '1986-04-05')
      })

      it('long date', function() {
        var result = format(date, 'PPP', { locale: locale })
        assert(result === '1986年4月5日')
      })

      it('full date', function() {
        var result = format(date, 'PPPP', { locale: locale })
        assert(result === '1986年4月5日 星期六')
      })

      it('short time', function() {
        var result = format(date, 'p', { locale: locale })
        assert(result === '上午 10:32')
      })

      it('medium time', function() {
        var result = format(date, 'pp', { locale: locale })
        assert(result === '上午 10:32:00')
      })

      it('short date + time', function() {
        var result = format(date, 'Pp', { locale: locale })
        assert(result === '86-04-05 上午 10:32')
      })

      it('medium date + time', function() {
        var result = format(date, 'PPpp', { locale: locale })
        assert(result === '1986-04-05 上午 10:32:00')
      })

      it('long date + time', function() {
        var result = format(date, 'PPPp', { locale: locale })
        assert(result === '1986年4月5日 上午 10:32')
      })

      it('full date + time', function() {
        var result = format(date, 'PPPPp', { locale: locale })
        assert(result === '1986年4月5日 星期六 上午 10:32')
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
      assert(result === '半分钟')
    })

    context('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        )
        assert(result === '不到 10 秒内')
      })

      it('adds a past suffix', function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '大约 1 小时前')
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
      assert(result === '120 分钟')
    })

    describe('when `addSuffix` option is true', function() {
      it('adds a future suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '25 秒内')
      })

      it('adds a past suffix', function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        )
        assert(result === '1 小时前')
      })
    })
  })

  context('with `formatRelative`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      })
      assert(result === '上个 星期二 上午 12:00')
    })

    it('yesterday', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      )
      assert(result === '昨天 下午 10:22')
    })

    it('today', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '今天 下午 4:50')
    })

    it('tomorrow', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      )
      assert(result === '明天 上午 7:30')
    })

    it('next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      )
      assert(result === '下个 星期日 下午 12:00')
    })

    it('after the next week', function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      )
      assert(result === '86-04-11')
    })
  })

  context('with `parse`', function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function() {
      it('abbreviated', function() {
        var result = parse('10000 前', 'yyyyy G', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function() {
        var result = parse('2018 公元', 'yyyy GGGG', baseDate, {
          locale: locale
        })
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function() {
        var result = parse('44 前', 'y GGGGG', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function() {
      var result = parse('第 2017 年', "yo '年'", baseDate, { locale: locale })
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function() {
      it('ordinal', function() {
        var result = parse('第 1 刻', "Qo '刻'", baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })

      it('abbreviated', function() {
        var result = parse('第三刻', 'QQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function() {
        var result = parse('第四刻钟', 'QQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function() {
        var result = parse('1', 'QQQQQ', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function() {
      it('ordinal', function() {
        var result = parse('第 6 月', "Mo '月'", baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function() {
        var result = parse('11月', 'MMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function() {
        var result = parse('二月', 'MMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function() {
        var result = parse('一', 'MMMMM', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function() {
      var result = parse('第 49 周', "wo '周'", baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 31))
    })

    it('ordinal day of month', function() {
      var result = parse('第 28 日', "do '日'", baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function() {
      var result = parse('第 200 日', "Do '日'", baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function() {
      it('abbreviated', function() {
        var result = parse('周一', 'E', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function() {
        var result = parse('星期二', 'EEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function() {
        var result = parse('三', 'EEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function() {
        var result = parse('四', 'EEEEEE', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function() {
      var result = parse('本周 第 1 天', "'本周' eo '天'", baseDate, {
        locale: locale
      })
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    describe('AM, PM', function() {
      it('abbreviated', function() {
        var result = parse('5 上午', 'h a', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function() {
        var result = parse('5 下午', 'h aaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function() {
        var result = parse('11 上午', 'h aaaaa', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function() {
      it('abbreviated', function() {
        var result = parse('中午', 'b', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function() {
        var result = parse('凌晨', 'bbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function() {
        var result = parse('凌晨', 'bbbbb', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function() {
      it('abbreviated', function() {
        var result = parse('2 凌晨', 'h B', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function() {
        var result = parse('12 中午', 'h BBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function() {
        var result = parse('5 晚', 'h BBBBB', baseDate, { locale: locale })
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function() {
      var dateString = '第 1 时, 第 2 分, 第 3 秒'
      var formatString = "ho '时', mo '分', so '秒'"
      var result = parse(dateString, formatString, baseDate, { locale: locale })
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
