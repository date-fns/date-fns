// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatLocale = require('./')

describe('en locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 0)) === 'Ian')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 1)) === 'Feb')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 2)) === 'Mar')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2015, 3)) === 'Apr')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 4)) === 'Mai')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 5)) === 'Iun')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 6)) === 'Iul')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 7)) === 'Aug')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 8)) === 'Sep')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 9)) === 'Oct')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 10)) === 'Noi')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(2016, 11)) === 'Dec')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 0)) === 'Ianuarie')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 1)) === 'Februarie')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 2)) === 'Martie')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2015, 3)) === 'Aprilie')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 4)) === 'Mai')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 5)) === 'Iunie')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 6)) === 'Iulie')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 7)) === 'August')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 8)) === 'Septembrie')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 9)) === 'Octombrie')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 10)) === 'Noiembrie')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(2016, 11)) === 'Decembrie')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 7)) === 'Du')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 1)) === 'Lu')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 2)) === 'Ma')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 3)) === 'Mi')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 4)) === 'Jo')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 5)) === 'Vi')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(2016, 1 /* Feb */, 6)) === 'Sâ')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 7)) === 'Dum')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 1)) === 'Lun')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 2)) === 'Mar')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 3)) === 'Mie')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 4)) === 'Joi')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 5)) === 'Vin')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(2016, 1 /* Feb */, 6)) === 'Sâm')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 7)) === 'Duminică')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 1)) === 'Luni')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 2)) === 'Marți')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 3)) === 'Miercuri')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 4)) === 'Joi')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 5)) === 'Vineri')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(2016, 1 /* Feb */, 6)) === 'Sâmbăta')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 1)) === 'AM')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 0)) === 'AM')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 13)) === 'PM')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(2016, 1 /* Feb */, 11, 12)) === 'PM')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 1)) === 'am')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 0)) === 'am')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 13)) === 'pm')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(2016, 1 /* Feb */, 11, 12)) === 'pm')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 1)) === 'a.m.')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 0)) === 'a.m.')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 13)) === 'p.m.')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(2016, 1 /* Feb */, 11, 12)) === 'p.m.')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})
