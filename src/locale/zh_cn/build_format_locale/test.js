// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('zh_CN locale > buildFormatLocale', function () {
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

      it('returns `一` for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === '一')
      })

      it('returns `二` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === '二')
      })

      it('returns `三` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === '三')
      })

      it('returns `四` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === '四')
      })

      it('returns `五` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === '五')
      })

      it('returns `六` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === '六')
      })
    })

    describe('ddd', function () {
      it('returns `周日` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === '周日')
      })

      it('returns `周一` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === '周一')
      })

      it('returns `周二` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === '周二')
      })

      it('returns `周三` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === '周三')
      })

      it('returns `周四` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === '周四')
      })

      it('returns `周五` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === '周五')
      })

      it('returns `周六` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === '周六')
      })
    })

    describe('dddd', function () {
      it('returns `星期日` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === '星期日')
      })

      it('returns `星期一` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === '星期一')
      })

      it('returns `星期二` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === '星期二')
      })

      it('returns `星期三` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === '星期三')
      })

      it('returns `星期四` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === '星期四')
      })

      it('returns `星期五` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === '星期五')
      })

      it('returns `星期六` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === '星期六')
      })
    })

    describe('A', function () {
      it('returns `AM` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'AM')
      })

      it('returns `AM` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'AM')
      })

      it('returns `PM` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'PM')
      })

      it('returns `PM` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'PM')
      })
    })

    describe('a', function () {
      it('returns `am` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'am')
      })

      it('returns `am` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'am')
      })

      it('returns `pm` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'pm')
      })

      it('returns `pm` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'pm')
      })
    })

    describe('aa', function () {
      it('returns `上午` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === '上午')
      })

      it('returns `上午` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === '上午')
      })

      it('returns `下午` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === '下午')
      })

      it('returns `下午` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === '下午')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}), '1')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}), '2')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}), '3')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}), '11')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}), '101')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}), '111')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}), '1')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}), '2')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}), '3')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}), '11')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}), '101')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}), '111')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}), '1')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}), '2')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}), '3')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}), '11')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}), '101')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}), '111')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}), '1')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}), '2')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}), '3')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}), '11')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}), '101')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}), '111')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}), '1')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}), '2')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}), '3')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}), '11')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}), '101')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}), '111')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}), '1')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}), '2')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}), '3')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}), '11')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}), '101')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}), '111')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
