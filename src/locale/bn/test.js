// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import format from '../../format'
import formatDistance from '../../formatDistance'
import formatDistanceStrict from '../../formatDistanceStrict'
import formatRelative from '../../formatRelative'
import parse from '../../parse'

describe('bn locale', function () {
  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900)

    it('era', function () {
      var result = format(date, 'G, GGGG, GGGGG', {locale: locale})
      assert(result === 'খ্রিঃ, খ্রিস্টাব্দ, খ্রিঃ')
    })

    describe('year', function () {
      it('ordinal regular year', function () {
        var result = format(date, "yo 'বছর'", {locale: locale})
        assert(result === '১৯৮৬তম বছর')
      })
    })

    describe('quarter', function () {
      it('formatting quarter', function () {
        var result = format(date, "Qo 'ত্রৈমাসিক', QQQ, QQQQ, QQQQQ", {locale: locale})
        assert(result === '২য় ত্রৈমাসিক, ২ত্রৈ, ২য় ত্রৈমাসিক, ২')
      })

      it('stand-alone quarter', function () {
        var result = format(date, "qo 'ত্রৈমাসিক', qqq, qqqq, qqqqq", {locale: locale})
        assert(result === '২য় ত্রৈমাসিক, ২ত্রৈ, ২য় ত্রৈমাসিক, ২')
      })
    })

    describe('month', function () {
      it('formatting month', function () {
        var result = format(date, 'do MMMM', {locale: locale})
        assert(result === '৫ই এপ্রিল')
      })

      it('stand-alone month', function () {
        var result = format(date, "Lo 'মাস', LLL, LLLL, LLLLL", {locale: locale})
        assert(result === '৪র্থ মাস, এপ্রিল, এপ্রিল, এপ্রিল')
      })
    })

    describe('week', function () {
      it('ordinal local week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "wo 'সপ্তাহ'", {locale: locale})
        assert(result === '১৫তম সপ্তাহ')
      })

      it('ordinal ISO week of year', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, "Io 'ISO week'", {locale: locale})
        assert(result === '১৪তম ISO week')
      })
    })

    describe('day', function () {
      it('ordinal date', function () {
        var result = format(date, "'today is the' do MMMM", {locale: locale})
        assert(result === 'today is the ৫ই এপ্রিল')
      })

      it('ordinal day of year', function () {
        var result = format(date, "Do 'day of the year'", {locale: locale})
        assert(result === '৯৫তম day of the year')
      })
    })

    describe('week day', function () {
      it('day of week', function () {
        var result = format(date, 'E, EEEE, EEEEE, EEEEEE', {locale: locale})
        assert(result === 'শনি, শনিবার, শ, শনি')
      })

      it('ordinal day of week', function () {
        var result = format(date, "eo 'day of the week'", {locale: locale})
        assert(result === '৭ম day of the week')
      })
    })

    describe('day period and hour', function () {
      it('ordinal hour', function () {
        var result = format(date, "ho 'ঘণ্টা'", {locale: locale})
        assert(result === '১০ম ঘণ্টা')
      })

      it('AM, PM', function () {
        var result = format(date, 'h a, h aaaa, haaaaa', {locale: locale})
        assert(result === '10 পূর্বাহ্ন, 10 পূর্বাহ্ন, 10পূ')
      })

      it('AM, PM, noon, midnight', function () {
        var result = format(new Date(1986, 3 /* Apr */, 6, 0), 'b, bbbb, bbbbb', {locale: locale})
        assert(result === 'মধ্যরাত, মধ্যরাত, মধ্যরাত')
      })

      it('flexible day periods works as expected', function () {
        var result = format(date, 'h a B', {locale: locale})
        assert(result === '10 পূর্বাহ্ন সকাল')
      })
    })

    it('ordinal minute', function () {
      var result = format(date, "mo 'মিনিট'", {locale: locale})
      assert(result === '৩২তম মিনিট')
    })

    it('ordinal second', function () {
      var result = format(date, "so 'second'", {locale: locale})
      assert(result === '০তম second')
    })

    describe('long format', function () {
      it('short date', function () {
        var result = format(date, 'P', {locale: locale})
        assert(result === '04/05/1986')
      })

      it('medium date', function () {
        var result = format(date, 'PP', {locale: locale})
        assert(result === 'এপ্রিল 5, 1986')
      })

      it('long date', function () {
        var result = format(date, 'PPP', {locale: locale})
        assert(result === 'এপ্রিল ৫ই, 1986')
      })

      it('full date', function () {
        var result = format(date, 'PPPP', {locale: locale})
        assert(result === 'শনিবার, এপ্রিল ৫ই, 1986')
      })

      it('short time', function () {
        var result = format(date, 'p', {locale: locale})
        assert(result === '10:32 পূর্বাহ্ন')
      })

      it('medium time', function () {
        var result = format(date, 'pp', {locale: locale})
        assert(result === '10:32:00 পূর্বাহ্ন')
      })

      it('short date + time', function () {
        var result = format(date, 'Pp', {locale: locale})
        assert(result === '04/05/1986, 10:32 পূর্বাহ্ন')
      })

      it('medium date + time', function () {
        var result = format(date, 'PPpp', {locale: locale})
        assert(result === 'এপ্রিল 5, 1986, 10:32:00 পূর্বাহ্ন')
      })

      it('long date + time', function () {
        var result = format(date, 'PPPp', {locale: locale})
        assert(result === 'এপ্রিল ৫ই, 1986 10:32 পূর্বাহ্ন সময়')
      })

      it('full date + time', function () {
        var result = format(date, 'PPPPp', {locale: locale})
        assert(result === 'শনিবার, এপ্রিল ৫ই, 1986 10:32 পূর্বাহ্ন সময়')
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
      assert(result === 'আধ মিনিট')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'প্রায় ১০ সেকেন্ড এর মধ্যে')
      })

      it('adds a past suffix', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'প্রায় ১ ঘন্টা আগে')
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
      assert(result === '১২০ মিনিট')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a future suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '২৫ সেকেন্ড এর মধ্যে')
      })

      it('adds a past suffix', function () {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '১ ঘন্টা আগে')
      })
    })
  })

  context('with `formatRelative`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('last week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {locale: locale})
      assert(result === 'গত মঙ্গলবার সময় 12:00 পূর্বাহ্ন')
    })

    it('yesterday', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate, {locale: locale})
      assert(result === 'গতকাল সময় 10:22 অপরাহ্ন')
    })

    it('today', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate, {locale: locale})
      assert(result === 'আজ সময় 4:50 অপরাহ্ন')
    })

    it('tomorrow', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate, {locale: locale})
      assert(result === 'আগামীকাল সময় 7:30 পূর্বাহ্ন')
    })

    it('next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate, {locale: locale})
      assert(result === 'রবিবার সময় 12:00 অপরাহ্ন')
    })

    it('after the next week', function () {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate, {locale: locale})
      assert(result === '04/11/1986')
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('era', function () {
      it('abbreviated', function () {
        var result = parse('10000 খ্রিঃপূর্ব', 'yyyyy G', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1))
      })

      it('wide', function () {
        var result = parse('2018 খ্রিস্টাব্দ', 'yyyy GGGG', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1))
      })

      it('narrow', function () {
        var result = parse('44 খ্রিঃপূঃ', 'y GGGGG', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1))
      })
    })

    it('ordinal year', function () {
      var result = parse('2017তম', 'yo', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1))
    })

    describe('quarter', function () {
      it('abbreviated', function () {
        var result = parse('৩ত্রৈ', 'QQQ', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1))
      })

      it('wide', function () {
        var result = parse('৪র্থ ত্রৈমাসিক', 'QQQQ', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1))
      })

      it('narrow', function () {
        var result = parse('১', 'QQQQQ', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function () {
      it('ordinal', function () {
        var result = parse('6ষ্ঠ', 'Mo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1))
      })

      it('abbreviated', function () {
        var result = parse('নভে', 'MMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1))
      })

      it('wide', function () {
        var result = parse('ফেব্রুয়ারি', 'MMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1))
      })

      it('narrow', function () {
        var result = parse('জানু', 'MMMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    it('ordinal week of year', function () {
      var result = parse('49তম', 'wo', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 30))
    })

    it('ordinal day of month', function () {
      var result = parse('28তম', 'do', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28))
    })

    it('ordinal day of year', function () {
      var result = parse('200তম', 'Do', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
    })

    describe('day of week', function () {
      it('abbreviated', function () {
        var result = parse('সোম', 'E', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
      })

      it('wide', function () {
        var result = parse('মঙ্গলবার', 'EEEE', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1))
      })

      it('narrow', function () {
        var result = parse('বু', 'EEEEE', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 2))
      })

      it('short', function () {
        var result = parse('বৃহ', 'EEEEEE', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3))
      })
    })

    it('ordinal local day of week', function () {
      var result = parse('2য় day of the week', "eo 'day of the week'", baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31))
    })

    describe('AM, PM', function () {
      it('abbreviated', function () {
        var result = parse('5 পূর্বাহ্ন', 'h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5))
      })

      it('wide', function () {
        var result = parse('5 অপরাহ্ন', 'h aaaa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })

      it('narrow', function () {
        var result = parse('11 পূ', 'h aaaaa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11))
      })
    })

    describe('AM, PM, noon, midnight', function () {
      it('abbreviated', function () {
        var result = parse('মধ্যাহ্ন', 'b', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('wide', function () {
        var result = parse('মধ্যরাত', 'bbbb', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })

      it('narrow', function () {
        var result = parse('মধ্যরাত', 'bbbbb', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0))
      })
    })

    describe('flexible day period', function () {
      it('abbreviated', function () {
        var result = parse('2 রাত', 'h B', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2))
      })

      it('wide', function () {
        var result = parse('12 বিকাল', 'h BBBB', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12))
      })

      it('narrow', function () {
        var result = parse('5 সন্ধ্যা', 'h BBBBB', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17))
      })
    })

    it('ordinal time', function () {
      var dateString = '1ম hour, 2য় minute, 3য় second'
      var formatString = "ho 'hour', mo 'minute', so 'second'"
      var result = parse(dateString, formatString, baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3))
    })
  })
})
