// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('es locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns `Jan` for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'ene')
      })

      it('returns `Feb` for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'feb')
      })

      it('returns `Mar` for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'mar')
      })

      it('returns `Apr` for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'abr')
      })

      it('returns `May` for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'may')
      })

      it('returns `Jun` for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'jun')
      })

      it('returns `Jul` for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'jul')
      })

      it('returns `Aug` for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'ago')
      })

      it('returns `Sep` for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'sep')
      })

      it('returns `Oct` for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'oct')
      })

      it('returns `Nov` for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'nov')
      })

      it('returns `Dec` for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'dic')
      })
    })

    describe('MMMM', function () {
      it('returns `January` for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'enero')
      })

      it('returns `February` for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'febrero')
      })

      it('returns `March` for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'marzo')
      })

      it('returns `April` for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'abril')
      })

      it('returns `May` for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'mayo')
      })

      it('returns `June` for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'junio')
      })

      it('returns `July` for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'julio')
      })

      it('returns `August` for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'agosto')
      })

      it('returns `September` for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'septiembre')
      })

      it('returns `October` for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'octubre')
      })

      it('returns `November` for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'noviembre')
      })

      it('returns `December` for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'diciembre')
      })
    })

    describe('dd', function () {
      it('returns `Su` for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'do')
      })

      it('returns `Mo` for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'lu')
      })

      it('returns `Tu` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'ma')
      })

      it('returns `We` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'mi')
      })

      it('returns `Th` for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'ju')
      })

      it('returns `Fr` for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'vi')
      })

      it('returns `Sa` for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'sa')
      })
    })

    describe('ddd', function () {
      it('returns `Sun` for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'dom')
      })

      it('returns `Mon` for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'lun')
      })

      it('returns `Tue` for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'mar')
      })

      it('returns `Wed` for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'mie')
      })

      it('returns `Thu` for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'jue')
      })

      it('returns `Fri` for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'vie')
      })

      it('returns `Sat` for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'sab')
      })
    })

    describe('dddd', function () {
      it('returns `Sunday` for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'domingo')
      })

      it('returns `Monday` for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'lunes')
      })

      it('returns `Tuesday` for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'martes')
      })

      it('returns `Wednesday` for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'miércoles')
      })

      it('returns `Thursday` for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'jueves')
      })

      it('returns `Friday` for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'viernes')
      })

      it('returns `Saturday` for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'sábado')
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
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}), '1º')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}), '2º')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}), '3º')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}), '11º')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}), '101º')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}), '111º')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}), '1º')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}), '2º')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}), '3º')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}), '11º')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}), '101º')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}), '111º')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}), '1º')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}), '2º')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}), '3º')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}), '11º')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}), '101º')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}), '111º')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}), '1º')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}), '2º')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}), '3º')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}), '11º')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}), '101º')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}), '111º')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}), '1º')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}), '2º')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}), '3º')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}), '11º')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}), '101º')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}), '111º')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}), '1º')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}), '2º')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}), '3º')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}), '11º')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}), '101º')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}), '111º')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
