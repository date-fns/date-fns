// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildDistanceInWordsLocale = require('./')

describe('sl locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    assert(typeof buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    assert(typeof buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'manj kot sekunda')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'manj kot 2 sekundi')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 3) === 'manj kot 3 sekunde')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 4) === 'manj kot 4 sekunde')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 5) === 'manj kot 5 sekund')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 sekunda')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 sekundi')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 3) === '3 sekunde')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 4) === '4 sekunde')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 5) === '5 sekund')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute') === 'pol minute')
    })

    it('ignores the second argument', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'pol minute')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'manj kot minuta')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'manj kot 2 minuti')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 3) === 'manj kot 3 minute')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 4) === 'manj kot 4 minute')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 5) === 'manj kot 5 minut')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 minuta')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 minuti')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 3) === '3 minute')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 4) === '4 minute')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 5) === '5 minut')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'približno 1 ura')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'približno 2 uri')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 3) === 'približno 3 ure')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 4) === 'približno 4 ure')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 5) === 'približno 5 ur')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 1) === '1 ura')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 2) === '2 uri')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 3) === '3 ure')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 4) === '4 ure')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 5) === '5 ur')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 1) === '1 dan')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 2) === '2 dni')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 3) === '3 dni')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 4) === '4 dni')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 5) === '5 dni')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'približno 1 mesec')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'približno 2 meseca')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 3) === 'približno 3 mesece')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 4) === 'približno 4 mesece')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 5) === 'približno 5 mesecev')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 1) === '1 mesec')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 2) === '2 meseca')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 3) === '3 meseci')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 4) === '4 meseci')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 5) === '5 mesecev')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'približno 1 leto')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'približno 2 leti')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 3) === 'približno 3 leta')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 4) === 'približno 4 leta')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 5) === 'približno 5 let')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 1) === '1 leto')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 2) === '2 leti')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 3) === '3 leta')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 4) === '4 leta')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 5) === '5 let')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 1) === 'več kot 1 leto')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 2) === 'več kot 2 leti')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 3) === 'več kot 3 leta')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 4) === 'več kot 4 leta')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 5) === 'več kot 5 let')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 1) === 'skoraj 1 leto')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 2) === 'skoraj 2 leti')
      })
    })

    context('when the count equals 3', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 3) === 'skoraj 3 leta')
      })
    })

    context('when the count equals 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 4) === 'skoraj 4 leta')
      })
    })

    context('when the count is more than 4', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 5) === 'skoraj 5 let')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` -> `nazaj` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'približno 1 leto nazaj')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` -> `čez` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'čez pol minute')
    })
  })

  context('correct second declination with a future suffix', function () {
    it('adds `in` -> `čez` to a string and corrects the second declination', function () {
      var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'čez manj kot sekundo')
    })
  })

  context('correct minute declination with a future suffix', function () {
    it('adds `in` -> `čez` to a string and corrects the minute declination', function () {
      var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'čez manj kot minuto')
    })
  })

  context('correct hour declination with a future suffix', function () {
    it('adds `in` -> `čez` to a string and corrects the hour declination', function () {
      var result = buildDistanceInWordsLocale().localize('aboutXHours', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'čez približno 1 uro')
    })
  })

  context('correct month declination with a future suffix', function () {
    it('adds `in` -> `čez` to a string and corrects the month declination', function () {
      var result = buildDistanceInWordsLocale().localize('xMonths', 3, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'čez 3 mesece')
    })
  })
})
