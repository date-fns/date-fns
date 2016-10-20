// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('jp locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns `Jan` for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === '1月')
      })

      it('returns `Feb` for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === '2月')
      })

      it('returns `Mar` for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === '3月')
      })

      it('returns `Apr` for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 3)) === '4月')
      })

      it('returns `May` for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === '5月')
      })

      it('returns `Jun` for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === '6月')
      })

      it('returns `Jul` for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === '7月')
      })

      it('returns `Aug` for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === '8月')
      })

      it('returns `Sep` for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === '9月')
      })

      it('returns `Oct` for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === '10月')
      })

      it('returns `Nov` for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === '11月')
      })

      it('returns `Dec` for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === '12月')
      })
    })

    describe('MMMM', function () {
      it('returns `January` for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === '一月')
      })

      it('returns `February` for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === '二月')
      })

      it('returns `March` for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === '三月')
      })

      it('returns `April` for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 3)) === '四月')
      })

      it('returns `May` for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === '五月')
      })

      it('returns `June` for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === '六月')
      })

      it('returns `July` for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === '七月')
      })

      it('returns `August` for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === '八月')
      })

      it('returns `September` for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === '九月')
      })

      it('returns `October` for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === '十月')
      })

      it('returns `November` for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === '十一月')
      })

      it('returns `December` for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === '十二月')
      })
    })

    describe('dd', function () {
      it('returns `Su` for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === '日')
      })

      it('returns `Mo` for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === '月')
      })

      it('returns `Tu` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === '火')
      })

      it('returns `We` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === '水')
      })

      it('returns `Th` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === '木')
      })

      it('returns `Fr` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === '金')
      })

      it('returns `Sa` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === '土')
      })
    })

    describe('ddd', function () {
      it('returns `Sun` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === '日曜')
      })

      it('returns `Mon` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === '月曜')
      })

      it('returns `Tue` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === '火曜')
      })

      it('returns `Wed` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === '水曜')
      })

      it('returns `Thu` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === '木曜')
      })

      it('returns `Fri` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === '金曜')
      })

      it('returns `Sat` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === '土曜')
      })
    })

    describe('dddd', function () {
      it('returns `Sunday` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === '日曜日')
      })

      it('returns `Monday` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === '月曜日')
      })

      it('returns `Tuesday` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === '火曜日')
      })

      it('returns `Wednesday` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === '水曜日')
      })

      it('returns `Thursday` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === '木曜日')
      })

      it('returns `Friday` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === '金曜日')
      })

      it('returns `Saturday` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === '土曜日')
      })
    })

    describe('A', function () {
      it('returns `AM` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === '午前')
      })

      it('returns `AM` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === '午前')
      })

      it('returns `PM` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === '午後')
      })

      it('returns `PM` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === '午後')
      })
    })

    describe('a', function () {
      it('returns `am` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === '午前')
      })

      it('returns `am` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === '午前')
      })

      it('returns `pm` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === '午後')
      })

      it('returns `pm` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === '午後')
      })
    })

    describe('aa', function () {
      it('returns `a.m.` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === '午前')
      })

      it('returns `a.m.` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === '午前')
      })

      it('returns `p.m.` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === '午後')
      })

      it('returns `p.m.` for 12 p.m.', function () {
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
