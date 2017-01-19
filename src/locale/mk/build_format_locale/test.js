// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('mk locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'јан')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'фев')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'мар')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'апр')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'мај')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'јун')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'јул')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'авг')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'сеп')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'окт')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'ное')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'дек')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'јануари')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'февруари')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'март')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'април')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'мај')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'јуни')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'јули')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'август')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'септември')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'октомври')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'ноември')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'декември')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'не')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'по')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'вт')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'ср')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'че')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'пе')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'са')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'нед')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'пон')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'вто')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'сре')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'чет')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'пет')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'саб')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'недела')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'понеделник')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'вторник')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'среда')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'четврток')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'петок')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'сабота')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'претпладне')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'претпладне')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'попладне')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'попладне')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'претпладне')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'претпладне')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'попладне')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'попладне')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'претпладне')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'претпладне')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'попладне')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'попладне')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1-ви')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2-ри')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3-ти')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 7 }}) === '7-ми')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 8 }}) === '8-ми')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11-ти')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101-ви')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111-ти')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1-ви')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2-ри')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3-ти')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 7 }}) === '7-ми')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 8 }}) === '8-ми')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11-ти')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101-ви')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111-ти')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1-ви')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2-ри')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3-ти')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 7 }}) === '7-ми')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 8 }}) === '8-ми')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11-ти')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101-ви')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111-ти')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1-ви')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2-ри')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3-ти')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 7 }}) === '7-ми')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 8 }}) === '8-ми')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11-ти')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101-ви')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111-ти')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1-ви')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2-ри')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3-ти')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 7 }}) === '7-ми')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 8 }}) === '8-ми')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11-ти')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101-ви')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111-ти')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1-ви')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2-ри')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3-ти')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 7 }}) === '7-ми')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 8 }}) === '8-ми')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11-ти')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101-ви')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111-ти')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
