/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('eo locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns `jan` for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'jan')
      })

      it('returns `feb` for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'feb')
      })

      it('returns `mar` for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mar')
      })

      it('returns `apr` for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 3)) === 'apr')
      })

      it('returns `maj` for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'maj')
      })

      it('returns `jun` for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'jun')
      })

      it('returns `jul` for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'jul')
      })

      it('returns `aŭg` for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'aŭg')
      })

      it('returns `sep` for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'sep')
      })

      it('returns `okt` for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'okt')
      })

      it('returns `nov` for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov')
      })

      it('returns `dec` for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'dec')
      })
    })

    describe('MMMM', function () {
      it('returns `januaro` for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'januaro')
      })

      it('returns `februaro` for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'februaro')
      })

      it('returns `marto` for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'marto')
      })

      it('returns `aprilo` for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 3)) === 'aprilo')
      })

      it('returns `majo` for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'majo')
      })

      it('returns `junio` for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'junio')
      })

      it('returns `julio` for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'julio')
      })

      it('returns `aŭgusto` for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'aŭgusto')
      })

      it('returns `septembro` for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'septembro')
      })

      it('returns `oktobro` for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'oktobro')
      })

      it('returns `novembro` for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'novembro')
      })

      it('returns `decembro` for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'decembro')
      })
    })

    describe('dd', function () {
      it('returns `di` for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'di')
      })

      it('returns `lu` for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'lu')
      })

      it('returns `ma` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'ma')
      })

      it('returns `me` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'me')
      })

      it('returns `ĵa` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'ĵa')
      })

      it('returns `ve` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 've')
      })

      it('returns `sa` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sa')
      })
    })

    describe('ddd', function () {
      it('returns `dim` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dim')
      })

      it('returns `lun` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'lun')
      })

      it('returns `mar` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'mar')
      })

      it('returns `mer` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'mer')
      })

      it('returns `ĵaŭ` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'ĵaŭ')
      })

      it('returns `ven` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'ven')
      })

      it('returns `sab` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sab')
      })
    })

    describe('dddd', function () {
      it('returns `dimanĉo` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'dimanĉo')
      })

      it('returns `lundo` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'lundo')
      })

      it('returns `mardo` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'mardo')
      })

      it('returns `merkredo` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'merkredo')
      })

      it('returns `ĵaŭdo` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'ĵaŭdo')
      })

      it('returns `vendredo` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'vendredo')
      })

      it('returns `sabato` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'sabato')
      })
    })

    describe('A', function () {
      it('returns `A.T.M.` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'A.T.M.')
      })

      it('returns `A.T.M.` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'A.T.M.')
      })

      it('returns `P.T.M.` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'P.T.M.')
      })

      it('returns `P.T.M.` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'P.T.M.')
      })
    })

    describe('a', function () {
      it('returns `a.t.m.` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'a.t.m.')
      })

      it('returns `a.t.m.` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'a.t.m.')
      })

      it('returns `p.t.m.` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'p.t.m.')
      })

      it('returns `p.t.m.` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'p.t.m.')
      })
    })

    describe('aa', function () {
      it('returns `antaŭtagmeze` for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'antaŭtagmeze')
      })

      it('returns `antaŭtagmeze` for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'antaŭtagmeze')
      })

      it('returns `posttagmeze` for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'posttagmeze')
      })

      it('returns `posttagmeze` for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'posttagmeze')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}), '1-a')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}), '2-a')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}), '3-a')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}), '1-a')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}), '2-a')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}), '3-a')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}), '1-a')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}), '2-a')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}), '3-a')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}), '1-a')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}), '2-a')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}), '3-a')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}), '1-a')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}), '2-a')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}), '3-a')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}), '1-a')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}), '2-a')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}), '3-a')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
