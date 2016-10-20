// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('de locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns `Jan` for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'Jan')
      })

      it('returns `Feb` for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'Feb')
      })

      it('returns `Mär` for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'Mär')
      })

      it('returns `Apr` for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'Apr')
      })

      it('returns `May` for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'Mai')
      })

      it('returns `Jun` for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'Jun')
      })

      it('returns `Jul` for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'Jul')
      })

      it('returns `Aug` for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'Aug')
      })

      it('returns `Sep` for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'Sep')
      })

      it('returns `Okt` for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'Okt')
      })

      it('returns `Nov` for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'Nov')
      })

      it('returns `Dez` for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'Dez')
      })
    })

    describe('MMMM', function () {
      it('returns `Januar` for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'Januar')
      })

      it('returns `Februar` for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'Februar')
      })

      it('returns `März` for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'März')
      })

      it('returns `April` for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'April')
      })

      it('returns `Mai` for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'Mai')
      })

      it('returns `Juni` for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'Juni')
      })

      it('returns `Juli` for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'Juli')
      })

      it('returns `August` for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'August')
      })

      it('returns `September` for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'September')
      })

      it('returns `Oktober` for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'Oktober')
      })

      it('returns `November` for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'November')
      })

      it('returns `Dezember` for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'Dezember')
      })
    })

    describe('dd', function () {
      it('returns `Su` for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'So')
      })

      it('returns `Mo` for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Mo')
      })

      it('returns `Tu` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Di')
      })

      it('returns `We` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Mi')
      })

      it('returns `Th` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Do')
      })

      it('returns `Fr` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Fr')
      })

      it('returns `Sa` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Sa')
      })
    })

    describe('ddd', function () {
      it('returns `Sun` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Son')
      })

      it('returns `Mon` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Mon')
      })

      it('returns `Tue` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Die')
      })

      it('returns `Wed` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Mit')
      })

      it('returns `Thu` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Don')
      })

      it('returns `Fri` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Fre')
      })

      it('returns `Sat` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Sam')
      })
    })

    describe('dddd', function () {
      it('returns `Sunday` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Sonntag')
      })

      it('returns `Monday` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Montag')
      })

      it('returns `Tuesday` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Dienstag')
      })

      it('returns `Wednesday` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Mittwoch')
      })

      it('returns `Thursday` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Donnerstag')
      })

      it('returns `Friday` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Freitag')
      })

      it('returns `Saturday` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Samstag')
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
      it('returns `a.m.` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'a.m.')
      })

      it('returns `a.m.` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'a.m.')
      })

      it('returns `p.m.` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'p.m.')
      })

      it('returns `p.m.` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'p.m.')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}), '1.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}), '2.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}), '3.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}), '11.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}), '101.')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}), '111.')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}), '1.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}), '2.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}), '3.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}), '11.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}), '101.')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}), '111.')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}), '1.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}), '2.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}), '3.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}), '11.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}), '101.')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}), '111.')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}), '1.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}), '2.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}), '3.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}), '11.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}), '101.')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}), '111.')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}), '1.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}), '2.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}), '3.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}), '11.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}), '101.')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}), '111.')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}), '1.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}), '2.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}), '3.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}), '11.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}), '101.')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}), '111.')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
