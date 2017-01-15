// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import buildDistanceInWordsLocale from './'

var PAST_OPTIONS = {
  addSuffix: true,
  comparison: -1
}

var FUTURE_OPTIONS = {
  addSuffix: true,
  comparison: 1
}

var TWO_FOUR_RANGE = [2, 3, 4]
var OTHER_RANGE = [5, 6, 7, 8, 9, 10, 100]

describe('sk locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    assert(typeof buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    assert(typeof buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'menej než sekunda')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', number)
            assert(result === 'menej než ' + number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', number)
            assert(result === 'menej než ' + number + ' sekúnd')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, PAST_OPTIONS) === 'pred menej než sekundou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', number, PAST_OPTIONS)
            assert(result === 'pred menej než ' + number + ' sekundami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', number, PAST_OPTIONS)
            assert(result === 'pred menej než ' + number + ' sekundami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, FUTURE_OPTIONS) === 'za menej než sekundu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za menej než ' + number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za menej než ' + number + ' sekúnd')
          })
        })
      })
    })
  })

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xSeconds', 1) === 'sekunda')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xSeconds', number)
            assert(result === number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xSeconds', number)
            assert(result === number + ' sekúnd')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xSeconds', 1, PAST_OPTIONS) === 'pred sekundou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xSeconds', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' sekundami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xSeconds', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' sekundami')
          })
        })
      })
    })

    describe('future suffix', function () {
      beforeEach(function () {
        this.options = FUTURE_OPTIONS
      })

      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xSeconds', 1, FUTURE_OPTIONS) === 'za sekundu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' sekúnd')
          })
        })
      })
    })
  })

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('halfAMinute', 0) === 'pol minúty')
      })

      it('ignores the second argument', function () {
        assert(buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'pol minúty')
      })
    })

    describe('past suffix', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('halfAMinute', 0, PAST_OPTIONS) === 'pred pol minútou')
      })

      it('ignores the second argument', function () {
        assert(buildDistanceInWordsLocale().localize('halfAMinute', 123, PAST_OPTIONS) === 'pred pol minútou')
      })
    })

    describe('future suffix', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('halfAMinute', 0, FUTURE_OPTIONS) === 'za pol minúty')
      })

      it('ignores the second argument', function () {
        assert(buildDistanceInWordsLocale().localize('halfAMinute', 123, FUTURE_OPTIONS) === 'za pol minúty')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'menej než minúta')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', number)
            assert(result === 'menej než ' + number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', number)
            assert(result === 'menej než ' + number + ' minút')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, PAST_OPTIONS) === 'pred menej než minútou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', number, PAST_OPTIONS)
            assert(result === 'pred menej než ' + number + ' minútami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', number, PAST_OPTIONS)
            assert(result === 'pred menej než ' + number + ' minútami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, FUTURE_OPTIONS) === 'za menej než minútu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za menej než ' + number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('lessThanXMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za menej než ' + number + ' minút')
          })
        })
      })
    })
  })

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xMinutes', 1) === 'minúta')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMinutes', number)
            assert(result === number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMinutes', number)
            assert(result === number + ' minút')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xMinutes', 1, PAST_OPTIONS) === 'pred minútou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMinutes', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' minútami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMinutes', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' minútami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xMinutes', 1, FUTURE_OPTIONS) === 'za minútu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' minút')
          })
        })
      })
    })
  })

  describe('aboutXHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'približne hodina')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXHours', number)
            assert(result === 'približne ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXHours', number)
            assert(result === 'približne ' + number + ' hodín')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXHours', 1, PAST_OPTIONS) === 'približne pred hodinou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXHours', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' hodinami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXHours', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' hodinami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXHours', 1, FUTURE_OPTIONS) === 'približne za hodinu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXHours', number, FUTURE_OPTIONS)
            assert(result === 'približne za ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXHours', number, FUTURE_OPTIONS)
            assert(result === 'približne za ' + number + ' hodín')
          })
        })
      })
    })
  })

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xHours', 1) === 'hodina')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xHours', number)
            assert(result === number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xHours', number)
            assert(result === number + ' hodín')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xHours', 1, PAST_OPTIONS) === 'pred hodinou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xHours', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' hodinami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xHours', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' hodinami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xHours', 1, FUTURE_OPTIONS) === 'za hodinu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xHours', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xHours', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' hodín')
          })
        })
      })
    })
  })

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xDays', 1) === 'deň')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xDays', number)
            assert(result === number + ' dni')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xDays', number)
            assert(result === number + ' dní')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xDays', 1, PAST_OPTIONS) === 'pred dňom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xDays', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' dňami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xDays', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' dňami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xDays', 1, FUTURE_OPTIONS) === 'za deň')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xDays', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' dni')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xDays', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' dní')
          })
        })
      })
    })
  })

  describe('aboutXMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'približne mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXMonths', number)
            assert(result === 'približne ' + number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXMonths', number)
            assert(result === 'približne ' + number + ' mesiacov')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1, PAST_OPTIONS) === 'približne pred mesiacom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXMonths', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' mesiacmi')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXMonths', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' mesiacmi')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1, FUTURE_OPTIONS) === 'približne za mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXMonths', number, FUTURE_OPTIONS)
            assert(result === 'približne za ' + number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXMonths', number, FUTURE_OPTIONS)
            assert(result === 'približne za ' + number + ' mesiacov')
          })
        })
      })
    })
  })

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xMonths', 1) === 'mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMonths', number)
            assert(result === number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMonths', number)
            assert(result === number + ' mesiacov')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xMonths', 1, PAST_OPTIONS) === 'pred mesiacom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMonths', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' mesiacmi')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMonths', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' mesiacmi')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xMonths', 1, FUTURE_OPTIONS) === 'za mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMonths', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xMonths', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' mesiacov')
          })
        })
      })
    })
  })

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'približne rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXYears', number)
            assert(result === 'približne ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXYears', number)
            assert(result === 'približne ' + number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXYears', 1, PAST_OPTIONS) === 'približne pred rokom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXYears', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXYears', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('aboutXYears', 1, FUTURE_OPTIONS) === 'približne za rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXYears', number, FUTURE_OPTIONS)
            assert(result === 'približne za ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('aboutXYears', number, FUTURE_OPTIONS)
            assert(result === 'približne za ' + number + ' rokov')
          })
        })
      })
    })
  })

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xYears', 1) === 'rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xYears', number)
            assert(result === number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xYears', number)
            assert(result === number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xYears', 1, PAST_OPTIONS) === 'pred rokom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xYears', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xYears', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('xYears', 1, FUTURE_OPTIONS) === 'za rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xYears', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('xYears', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' rokov')
          })
        })
      })
    })
  })

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('overXYears', 1) === 'viac než rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('overXYears', number)
            assert(result === 'viac než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('overXYears', number)
            assert(result === 'viac než ' + number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('overXYears', 1, PAST_OPTIONS) === 'pred viac než rokom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('overXYears', number, PAST_OPTIONS)
            assert(result === 'pred viac než ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('overXYears', number, PAST_OPTIONS)
            assert(result === 'pred viac než ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('overXYears', 1, FUTURE_OPTIONS) === 'za viac než rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('overXYears', number, FUTURE_OPTIONS)
            assert(result === 'za viac než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('overXYears', number, FUTURE_OPTIONS)
            assert(result === 'za viac než ' + number + ' rokov')
          })
        })
      })
    })
  })

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('almostXYears', 1) === 'takmer rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('almostXYears', number)
            assert(result === 'takmer ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('almostXYears', number)
            assert(result === 'takmer ' + number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(buildDistanceInWordsLocale().localize('almostXYears', 1, PAST_OPTIONS) === 'takmer pred rokom')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('almostXYears', number, PAST_OPTIONS)
            assert(result === 'takmer pred ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('almostXYears', number, PAST_OPTIONS)
            assert(result === 'takmer pred ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = buildDistanceInWordsLocale().localize('almostXYears', 1, FUTURE_OPTIONS)
          assert(result === 'takmer za rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('almostXYears', number, FUTURE_OPTIONS)
            assert(result === 'takmer za ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = buildDistanceInWordsLocale().localize('almostXYears', number, FUTURE_OPTIONS)
            assert(result === 'takmer za ' + number + ' rokov')
          })
        })
      })
    })
  })
})
