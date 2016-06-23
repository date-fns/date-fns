/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatFormatters = require('./')

describe('buildFormatFormatters', function () {
  it('returns an object', function () {
    assert(typeof buildFormatFormatters() === 'object')
  })

  describe('MMM', function () {
    it('returns Jan for January', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 0)) === 'Jan')
    })

    it('returns Feb for February', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 1)) === 'Feb')
    })

    it('returns Mar for March', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 2)) === 'Mar')
    })

    it('returns Apr for April', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 3)) === 'Apr')
    })

    it('returns May for May', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 4)) === 'May')
    })

    it('returns Jun for June', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 5)) === 'Jun')
    })

    it('returns Jul for July', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 6)) === 'Jul')
    })

    it('returns Aug for August', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 7)) === 'Aug')
    })

    it('returns Sep for September', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 8)) === 'Sep')
    })

    it('returns Oct for October', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 9)) === 'Oct')
    })

    it('returns Nov for November', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 10)) === 'Nov')
    })

    it('returns Dec for December', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 11)) === 'Dec')
    })
  })

  describe('MMMM', function () {
    it('returns January for January', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 0)) === 'January')
    })

    it('returns February for February', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 1)) === 'February')
    })

    it('returns March for March', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 2)) === 'March')
    })

    it('returns April for April', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 3)) === 'April')
    })

    it('returns May for May', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 4)) === 'May')
    })

    it('returns June for June', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 5)) === 'June')
    })

    it('returns July for July', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 6)) === 'July')
    })

    it('returns August for August', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 7)) === 'August')
    })

    it('returns September for September', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 8)) === 'September')
    })

    it('returns October for October', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 9)) === 'October')
    })

    it('returns November for November', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 10)) === 'November')
    })

    it('returns December for December', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 11)) === 'December')
    })
  })

  describe('dd', function () {
    it('returns Su for Sunday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 7)) === 'Su')
    })

    it('returns Mo for Monday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 1)) === 'Mo')
    })

    it('returns Tu for Tuesday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 2)) === 'Tu')
    })

    it('returns We for Wednesday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 3)) === 'We')
    })

    it('returns Th for Thursday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 4)) === 'Th')
    })

    it('returns Fr for Friday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 5)) === 'Fr')
    })

    it('returns Sa for Saturday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 6)) === 'Sa')
    })
  })

  describe('ddd', function () {
    it('returns Sun for Sunday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 7)) === 'Sun')
    })

    it('returns Mon for Monday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 1)) === 'Mon')
    })

    it('returns Tue for Tuesday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 2)) === 'Tue')
    })

    it('returns Wed for Wednesday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 3)) === 'Wed')
    })

    it('returns Thu for Thursday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 4)) === 'Thu')
    })

    it('returns Fri for Friday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 5)) === 'Fri')
    })

    it('returns Sat for Saturday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 6)) === 'Sat')
    })
  })

  describe('dddd', function () {
    it('returns Sunday for Sunday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 7)) === 'Sunday')
    })

    it('returns Monday for Monday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 1)) === 'Monday')
    })

    it('returns Tuesday for Tuesday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 2)) === 'Tuesday')
    })

    it('returns Wednesday for Wednesday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 3)) === 'Wednesday')
    })

    it('returns Thursday for Thursday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 4)) === 'Thursday')
    })

    it('returns Friday for Friday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 5)) === 'Friday')
    })

    it('returns Saturday for Saturday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 6)) === 'Saturday')
    })
  })

  describe('Mo', function () {
    it('returns ordinal result of M formatter', function () {
      assert(buildFormatFormatters().Mo(null, {M: function () { return 1 }}), '1st')
      assert(buildFormatFormatters().Mo(null, {M: function () { return 2 }}), '2nd')
      assert(buildFormatFormatters().Mo(null, {M: function () { return 3 }}), '3rd')
    })
  })

  describe('Do', function () {
    it('returns ordinal result of D formatter', function () {
      assert(buildFormatFormatters().Do(null, {D: function () { return 1 }}), '1st')
      assert(buildFormatFormatters().Do(null, {D: function () { return 2 }}), '2nd')
      assert(buildFormatFormatters().Do(null, {D: function () { return 3 }}), '3rd')
    })
  })

  describe('DDDo', function () {
    it('returns ordinal result of DDD formatter', function () {
      assert(buildFormatFormatters().DDDo(null, {DDD: function () { return 1 }}), '1st')
      assert(buildFormatFormatters().DDDo(null, {DDD: function () { return 2 }}), '2nd')
      assert(buildFormatFormatters().DDDo(null, {DDD: function () { return 3 }}), '3rd')
    })
  })

  describe('do', function () {
    it('returns ordinal result of d formatter', function () {
      assert(buildFormatFormatters().do(null, {d: function () { return 1 }}), '1st')
      assert(buildFormatFormatters().do(null, {d: function () { return 2 }}), '2nd')
      assert(buildFormatFormatters().do(null, {d: function () { return 3 }}), '3rd')
    })
  })

  describe('Qo', function () {
    it('returns ordinal result of Q formatter', function () {
      assert(buildFormatFormatters().Qo(null, {Q: function () { return 1 }}), '1st')
      assert(buildFormatFormatters().Qo(null, {Q: function () { return 2 }}), '2nd')
      assert(buildFormatFormatters().Qo(null, {Q: function () { return 3 }}), '3rd')
    })
  })

  describe('Wo', function () {
    it('returns ordinal result of W formatter', function () {
      assert(buildFormatFormatters().Wo(null, {W: function () { return 1 }}), '1st')
      assert(buildFormatFormatters().Wo(null, {W: function () { return 2 }}), '2nd')
      assert(buildFormatFormatters().Wo(null, {W: function () { return 3 }}), '3rd')
    })
  })
})
