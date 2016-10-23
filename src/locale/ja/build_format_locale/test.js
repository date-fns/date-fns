// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('ja locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns `1月` for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === '1月')
      })

      it('returns `2月` for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === '2月')
      })

      it('returns `3月` for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === '3月')
      })

      it('returns `4月` for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === '4月')
      })

      it('returns `5月` for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === '5月')
      })

      it('returns `6月` for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === '6月')
      })

      it('returns `7月` for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === '7月')
      })

      it('returns `8月` for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === '8月')
      })

      it('returns `9月` for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === '9月')
      })

      it('returns `10月` for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === '10月')
      })

      it('returns `11月` for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === '11月')
      })

      it('returns `12月` for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === '12月')
      })
    })

    describe('MMMM', function () {
      it('returns `一月` for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === '一月')
      })

      it('returns `二月` for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === '二月')
      })

      it('returns `三月` for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === '三月')
      })

      it('returns `四月` for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === '四月')
      })

      it('returns `五月` for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === '五月')
      })

      it('returns `六月` for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === '六月')
      })

      it('returns `七月` for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === '七月')
      })

      it('returns `八月` for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === '八月')
      })

      it('returns `九月` for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === '九月')
      })

      it('returns `十月` for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === '十月')
      })

      it('returns `十一月` for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === '十一月')
      })

      it('returns `十二月` for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === '十二月')
      })
    })

    describe('dd', function () {
      it('returns `日` for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === '日')
      })

      it('returns `月` for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === '月')
      })

      it('returns `火` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === '火')
      })

      it('returns `水` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === '水')
      })

      it('returns `木` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === '木')
      })

      it('returns `金` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === '金')
      })

      it('returns `土` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === '土')
      })
    })

    describe('ddd', function () {
      it('returns `日曜` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === '日曜')
      })

      it('returns `月曜` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === '月曜')
      })

      it('returns `火曜` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === '火曜')
      })

      it('returns `水曜` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === '水曜')
      })

      it('returns `木曜` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === '木曜')
      })

      it('returns `金曜` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === '金曜')
      })

      it('returns `土曜` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === '土曜')
      })
    })

    describe('dddd', function () {
      it('returns `日曜日` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === '日曜日')
      })

      it('returns `月曜日` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === '月曜日')
      })

      it('returns `火曜日` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === '火曜日')
      })

      it('returns `水曜日` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === '水曜日')
      })

      it('returns `木曜日` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === '木曜日')
      })

      it('returns `金曜日` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === '金曜日')
      })

      it('returns `土曜日` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === '土曜日')
      })
    })

    describe('A', function () {
      it('returns `午前` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === '午前')
      })

      it('returns `午前` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === '午前')
      })

      it('returns `午後` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === '午後')
      })

      it('returns `午後` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === '午後')
      })
    })

    describe('a', function () {
      it('returns `午前` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === '午前')
      })

      it('returns `午前` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === '午前')
      })

      it('returns `午後` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === '午後')
      })

      it('returns `午後` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === '午後')
      })
    })

    describe('aa', function () {
      it('returns `午前` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === '午前')
      })

      it('returns `午前` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === '午前')
      })

      it('returns `午後` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === '午後')
      })

      it('returns `午後` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === '午後')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}), '1日')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}), '2日')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}), '3日')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}), '11日')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}), '101日')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}), '111日')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}), '1日')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}), '2日')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}), '3日')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}), '11日')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}), '101日')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}), '111日')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}), '1日')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}), '2日')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}), '3日')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}), '11日')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}), '101日')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}), '111日')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}), '1日')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}), '2日')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}), '3日')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}), '11日')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}), '101日')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}), '111日')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}), '1日')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}), '2日')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}), '3日')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}), '11日')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}), '101日')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}), '111日')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}), '1日')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}), '2日')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}), '3日')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}), '11日')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}), '101日')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}), '111日')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
