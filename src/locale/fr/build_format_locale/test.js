// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('fr locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns `janv.` for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'janv.')
      })

      it('returns `févr.` for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'févr.')
      })

      it('returns `mars` for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mars')
      })

      it('returns `avr.` for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'avr.')
      })

      it('returns `mai` for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'mai')
      })

      it('returns `juin` for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'juin')
      })

      it('returns `juill.` for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'juill.')
      })

      it('returns `août` for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'août')
      })

      it('returns `sept.` for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'sept.')
      })

      it('returns `oct.` for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'oct.')
      })

      it('returns `nov.` for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov.')
      })

      it('returns `déc.` for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'déc.')
      })
    })

    describe('MMMM', function () {
      it('returns `janvier` for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'janvier')
      })

      it('returns `février` for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'février')
      })

      it('returns `mars` for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'mars')
      })

      it('returns `avril` for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'avril')
      })

      it('returns `mai` for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'mai')
      })

      it('returns `juin` for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'juin')
      })

      it('returns `juillet` for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'juillet')
      })

      it('returns `août` for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'août')
      })

      it('returns `septembre` for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'septembre')
      })

      it('returns `octobre` for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'octobre')
      })

      it('returns `novembre` for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'novembre')
      })

      it('returns `décembre` for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'décembre')
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

      it('returns `je` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'je')
      })

      it('returns `ve` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 've')
      })

      it('returns `sa` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sa')
      })
    })

    describe('ddd', function () {
      it('returns `dim.` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dim.')
      })

      it('returns `lun.` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'lun.')
      })

      it('returns `mar.` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'mar.')
      })

      it('returns `mer.` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'mer.')
      })

      it('returns `jeu.` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'jeu.')
      })

      it('returns `ven.` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'ven.')
      })

      it('returns `sam.` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sam.')
      })
    })

    describe('dddd', function () {
      it('returns `dimanche` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'dimanche')
      })

      it('returns `lundi` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'lundi')
      })

      it('returns `mardi` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'mardi')
      })

      it('returns `mercredi` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'mercredi')
      })

      it('returns `jeudi` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'jeudi')
      })

      it('returns `vendredi` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'vendredi')
      })

      it('returns `samedi` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'samedi')
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
      it('returns `du matin` for 12 a.m. to 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'du matin')
      })

      it('returns `de l’après-midi` for 1-4 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'de l’après-midi')
      })

      it('returns `du soir` for 5-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 17)) === 'du soir')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}), '1er')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}), '2e')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}), '1er')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}), '2e')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}), '1er')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}), '2e')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}), '1er')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}), '2e')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}), '1er')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}), '2e')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}), '1er')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}), '2e')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
