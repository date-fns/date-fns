// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var buildDistanceInWordsLocale = require('./')

describe('be locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    assert(typeof buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    assert(typeof buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'менш секунды')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'менш 2 секунд')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 секунда')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 секунд(-ы)')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute') === 'паўхвіліны')
    })

    it('ignores the second argument', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'паўхвіліны')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'менш хвіліны')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'менш 2 хвілін')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 хвіліна')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 хвілін(-ы)')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'каля 1 гадзіны')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'каля 2 гадзін')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 1) === '1 гадзіна')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 2) === '2 гадзін(-ы)')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 1) === '1 дзень')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 2) === '2 дні (дзён)')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'каля 1 месяца')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'каля 2 месяцаў')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 1) === '1 месяц')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 2) === '2 месяцы(-аў)')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'каля 1 года')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'каля 2 гадоў')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 1) === '1 год')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 2) === '2 гады(гадоў)')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 1) === 'больш 1 года')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 2) === 'больш 2 гадоў')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 1) === 'амаль 1 год')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 2) === 'амаль 2 гады(-оў)')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'каля 1 года таму')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'у/праз паўхвіліны')
    })
  })
})
