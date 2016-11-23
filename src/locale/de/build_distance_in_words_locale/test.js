// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildDistanceInWordsLocale = require('./')

describe('de locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    assert(typeof buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    assert(typeof buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'weniger als einer Sekunde')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'weniger als 2 Sekunden')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 Sekunde')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 Sekunden')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute') === 'einer halben Minute')
    })

    it('ignores the second argument', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'einer halben Minute')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'weniger als einer Minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'weniger als 2 Minuten')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 Minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 Minuten')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'etwa 1 Stunde')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'etwa 2 Stunden')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 1) === '1 Stunde')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 2) === '2 Stunden')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 1) === '1 Tag')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 2) === '2 Tagen')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'etwa 1 Monat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'etwa 2 Monaten')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 1) === '1 Monat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 2) === '2 Monaten')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'etwa 1 Jahr')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'etwa 2 Jahren')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 1) === '1 Jahr')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 2) === '2 Jahren')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 1) === 'mehr als 1 Jahr')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 2) === 'mehr als 2 Jahren')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 1) === 'fast 1 Jahr')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 2) === 'fast 2 Jahren')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'vor etwa 1 Jahr')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'in einer halben Minute')
    })
  })
})
