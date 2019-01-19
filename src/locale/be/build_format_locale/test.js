// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('be locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'студз')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'лют')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'сак')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'крас')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'май')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'чэрв')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'ліп')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'жн')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'вер')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'кастр')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'ліст')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'снеж')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'студзень')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'люты')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'сакавік')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'красавік')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'май')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'чэрвень')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'ліпень')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'жнівень')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'верасень')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'кастрычнік')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'лістапад')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'снежань')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'нд')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'пн')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'аў')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'ср')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'чц')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'пт')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'сб')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'нядз')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'пан')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'аўт')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'сер')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'чац')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'пят')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'суб')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'нядзеля')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'панядзелак')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'аўторак')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'серада')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'чацвер')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'пятніца')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'субота')
      })
    })

    describe('A', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночы')
        })
      })

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'раніцы')
        })
      })

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
        })
      })

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечара')
        })
      })
    })

    describe('a', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночы')
        })
      })

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'раніцы')
        })
      })

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
        })
      })

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечара')
        })
      })
    })

    describe('aa', function () {
      it('returns the correct string for 12-3 a.m.', function () {
        [0, 1, 2, 3].forEach(function (hours) {
          assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночы')
        })
      })

      it('returns the correct string for 4-11 a.m.', function () {
        [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
          assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'раніцы')
        })
      })

      it('returns the correct string for 12-4 p.m.', function () {
        [12, 13, 14, 15, 16].forEach(function (hours) {
          assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
        })
      })

      it('returns the correct string for 5-11 p.m.', function () {
        [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
          assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечара')
        })
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1-ы')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2-і')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3-і')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11-ы')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 12 }}) === '12-ы')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 21 }}) === '21-ы')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 22 }}) === '22-і')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101-ы')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111-ы')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1-ы')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2-і')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3-і')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11-ы')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 12 }}) === '12-ы')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 21 }}) === '21-ы')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 22 }}) === '22-і')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101-ы')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111-ы')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1-ы')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2-і')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3-і')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11-ы')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 12 }}) === '12-ы')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 21 }}) === '21-ы')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 22 }}) === '22-і')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101-ы')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111-ы')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1-ы')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2-і')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3-і')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11-ы')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 12 }}) === '12-ы')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 21 }}) === '21-ы')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 22 }}) === '22-і')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101-ы')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111-ы')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1-ы')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2-і')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3-і')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11-ы')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 12 }}) === '12-ы')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 21 }}) === '21-ы')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 22 }}) === '22-і')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101-ы')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111-ы')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1-ы')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2-і')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3-і')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11-ы')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 12 }}) === '12-ы')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 21 }}) === '21-ы')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 22 }}) === '22-і')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101-ы')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111-ы')
      })
    })

    describe('D MMMM', function () {
      it('returns a day and a month in the genitive case', function () {
        var months = [
          'студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня',
          'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'
        ]
        var formatters = {
          D: function () {
            return 5
          }
        }
        months.forEach(function (month, index) {
          assert(buildFormatLocale().formatters['D MMMM'](new Date(2015, index, 5), formatters) === '5 ' + month)
        })
      })
    })

    describe('D MMM', function () {
      it('returns a day and a month in a shortened form in the genitive case ', function () {
        var months = [
          'студз', 'лют', 'сак', 'крас', 'мая', 'чэрв',
          'ліп', 'жн', 'вер', 'кастр', 'ліст', 'снеж'
        ]
        var formatters = {
          D: function () {
            return 5
          }
        }
        months.forEach(function (month, index) {
          assert(buildFormatLocale().formatters['D MMM'](new Date(2015, index, 5), formatters) === '5 ' + month)
        })
      })
    })

    describe('Do MMMM', function () {
      it('returns an ordinal day and a month in the genitive case', function () {
        var months = [
          'студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня',
          'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'
        ]
        var formatters = {
          D: function () {
            return 3
          }
        }
        months.forEach(function (month, index) {
          assert(buildFormatLocale().formatters['Do MMMM'](new Date(2016, index, 3), formatters) === '3-га ' + month)
        })
      })
    })

    describe('Do MMM', function () {
      it('returns an ordinal day and a month in a shortened form in the genitive case', function () {
        var months = [
          'студз', 'лют', 'сак', 'крас', 'мая', 'чэрв',
          'ліп', 'жн', 'вер', 'кастр', 'ліст', 'снеж'
        ]
        var formatters = {
          D: function () {
            return 3
          }
        }
        months.forEach(function (month, index) {
          assert(buildFormatLocale().formatters['Do MMM'](new Date(2016, index, 3), formatters) === '3-га ' + month)
        })
      })
    })

    describe('DD MMMM', function () {
      it('returns a day and a month in the genitive case', function () {
        var months = [
          'студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня',
          'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'
        ]
        var formatters = {
          DD: function () {
            return '07'
          }
        }
        months.forEach(function (month, index) {
          assert(buildFormatLocale().formatters['DD MMMM'](new Date(2016, index, 7), formatters) === '07 ' + month)
        })
      })
    })

    describe('DD MMM', function () {
      it('returns a day and a month in the genitive case', function () {
        var months = [
          'студз', 'лют', 'сак', 'крас', 'мая', 'чэрв',
          'ліп', 'жн', 'вер', 'кастр', 'ліст', 'снеж'
        ]
        var formatters = {
          DD: function () {
            return '07'
          }
        }
        months.forEach(function (month, index) {
          assert(buildFormatLocale().formatters['DD MMM'](new Date(2016, index, 7), formatters) === '07 ' + month)
        })
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
