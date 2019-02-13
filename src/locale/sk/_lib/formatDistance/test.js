// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

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

describe('sk locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('lessThanXSeconds', 1) === 'menej než sekunda')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'menej než ' + number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'menej než ' + number + ' sekúnd')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('lessThanXSeconds', 1, PAST_OPTIONS) ===
              'pred menej než sekundou'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXSeconds',
              number,
              PAST_OPTIONS
            )
            assert(result === 'pred menej než ' + number + ' sekundami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXSeconds',
              number,
              PAST_OPTIONS
            )
            assert(result === 'pred menej než ' + number + ' sekundami')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('lessThanXSeconds', 1, FUTURE_OPTIONS) ===
              'o menej než sekundu'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXSeconds',
              number,
              FUTURE_OPTIONS
            )
            assert(result === 'o menej než ' + number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXSeconds',
              number,
              FUTURE_OPTIONS
            )
            assert(result === 'o menej než ' + number + ' sekúnd')
          })
        })
      })
    })
  })

  describe('xSeconds', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xSeconds', 1) === 'sekunda')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' sekúnd')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('xSeconds', 1, PAST_OPTIONS) === 'pred sekundou'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xSeconds', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' sekundami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xSeconds', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' sekundami')
          })
        })
      })
    })

    describe('future suffix', function() {
      beforeEach(function() {
        this.options = FUTURE_OPTIONS
      })

      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xSeconds', 1, FUTURE_OPTIONS) === 'o sekundu')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xSeconds', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' sekundy')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xSeconds', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' sekúnd')
          })
        })
      })
    })
  })

  describe('halfAMinute', function() {
    describe('no suffix', function() {
      it('returns a proper string', function() {
        assert(formatDistance('halfAMinute', 0) === 'pol minúty')
      })

      it('ignores the second argument', function() {
        assert(formatDistance('halfAMinute', 123) === 'pol minúty')
      })
    })

    describe('past suffix', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('halfAMinute', 0, PAST_OPTIONS) === 'pred pol minútou'
        )
      })

      it('ignores the second argument', function() {
        assert(
          formatDistance('halfAMinute', 123, PAST_OPTIONS) ===
            'pred pol minútou'
        )
      })
    })

    describe('future suffix', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('halfAMinute', 0, FUTURE_OPTIONS) === 'o pol minúty'
        )
      })

      it('ignores the second argument', function() {
        assert(
          formatDistance('halfAMinute', 123, FUTURE_OPTIONS) === 'o pol minúty'
        )
      })
    })
  })

  describe('lessThanXMinutes', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('lessThanXMinutes', 1) === 'menej než minúta')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'menej než ' + number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'menej než ' + number + ' minút')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('lessThanXMinutes', 1, PAST_OPTIONS) ===
              'pred menej než minútou'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXMinutes',
              number,
              PAST_OPTIONS
            )
            assert(result === 'pred menej než ' + number + ' minútami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXMinutes',
              number,
              PAST_OPTIONS
            )
            assert(result === 'pred menej než ' + number + ' minútami')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('lessThanXMinutes', 1, FUTURE_OPTIONS) ===
              'o menej než minútu'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXMinutes',
              number,
              FUTURE_OPTIONS
            )
            assert(result === 'o menej než ' + number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance(
              'lessThanXMinutes',
              number,
              FUTURE_OPTIONS
            )
            assert(result === 'o menej než ' + number + ' minút')
          })
        })
      })
    })
  })

  describe('xMinutes', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xMinutes', 1) === 'minúta')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' minút')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xMinutes', 1, PAST_OPTIONS) === 'pred minútou')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xMinutes', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' minútami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xMinutes', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' minútami')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xMinutes', 1, FUTURE_OPTIONS) === 'o minútu')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xMinutes', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' minúty')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xMinutes', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' minút')
          })
        })
      })
    })
  })

  describe('aboutXHours', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('aboutXHours', 1) === 'približne hodina')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXHours', number)
            assert(result === 'približne ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXHours', number)
            assert(result === 'približne ' + number + ' hodín')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('aboutXHours', 1, PAST_OPTIONS) ===
              'približne pred hodinou'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXHours', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' hodinami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXHours', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' hodinami')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('aboutXHours', 1, FUTURE_OPTIONS) ===
              'približne o hodinu'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXHours', number, FUTURE_OPTIONS)
            assert(result === 'približne o ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXHours', number, FUTURE_OPTIONS)
            assert(result === 'približne o ' + number + ' hodín')
          })
        })
      })
    })
  })

  describe('xHours', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xHours', 1) === 'hodina')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' hodín')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xHours', 1, PAST_OPTIONS) === 'pred hodinou')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xHours', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' hodinami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xHours', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' hodinami')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xHours', 1, FUTURE_OPTIONS) === 'o hodinu')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xHours', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xHours', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' hodín')
          })
        })
      })
    })
  })

  describe('xDays', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xDays', 1) === 'deň')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' dni')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' dní')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xDays', 1, PAST_OPTIONS) === 'pred dňom')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xDays', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' dňami')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xDays', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' dňami')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xDays', 1, FUTURE_OPTIONS) === 'o deň')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xDays', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' dni')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xDays', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' dní')
          })
        })
      })
    })
  })

  describe('aboutXMonths', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('aboutXMonths', 1) === 'približne mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'približne ' + number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'približne ' + number + ' mesiacov')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('aboutXMonths', 1, PAST_OPTIONS) ===
              'približne pred mesiacom'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' mesiacmi')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' mesiacmi')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('aboutXMonths', 1, FUTURE_OPTIONS) ===
              'približne o mesiac'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, FUTURE_OPTIONS)
            assert(result === 'približne o ' + number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, FUTURE_OPTIONS)
            assert(result === 'približne o ' + number + ' mesiacov')
          })
        })
      })
    })
  })

  describe('xMonths', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xMonths', 1) === 'mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' mesiacov')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xMonths', 1, PAST_OPTIONS) === 'pred mesiacom')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xMonths', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' mesiacmi')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xMonths', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' mesiacmi')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xMonths', 1, FUTURE_OPTIONS) === 'o mesiac')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xMonths', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' mesiace')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xMonths', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' mesiacov')
          })
        })
      })
    })
  })

  describe('aboutXYears', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('aboutXYears', 1) === 'približne rok')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'približne ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'približne ' + number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('aboutXYears', 1, PAST_OPTIONS) ===
              'približne pred rokom'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXYears', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXYears', number, PAST_OPTIONS)
            assert(result === 'približne pred ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('aboutXYears', 1, FUTURE_OPTIONS) ===
              'približne o rok'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXYears', number, FUTURE_OPTIONS)
            assert(result === 'približne o ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('aboutXYears', number, FUTURE_OPTIONS)
            assert(result === 'približne o ' + number + ' rokov')
          })
        })
      })
    })
  })

  describe('xYears', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xYears', 1) === 'rok')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xYears', 1, PAST_OPTIONS) === 'pred rokom')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xYears', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xYears', number, PAST_OPTIONS)
            assert(result === 'pred ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('xYears', 1, FUTURE_OPTIONS) === 'o rok')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('xYears', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('xYears', number, FUTURE_OPTIONS)
            assert(result === 'o ' + number + ' rokov')
          })
        })
      })
    })
  })

  describe('overXYears', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('overXYears', 1) === 'viac než rok')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'viac než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'viac než ' + number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('overXYears', 1, PAST_OPTIONS) ===
              'pred viac než rokom'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('overXYears', number, PAST_OPTIONS)
            assert(result === 'pred viac než ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('overXYears', number, PAST_OPTIONS)
            assert(result === 'pred viac než ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('overXYears', 1, FUTURE_OPTIONS) === 'o viac než rok'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('overXYears', number, FUTURE_OPTIONS)
            assert(result === 'o viac než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('overXYears', number, FUTURE_OPTIONS)
            assert(result === 'o viac než ' + number + ' rokov')
          })
        })
      })
    })
  })

  describe('almostXYears', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(formatDistance('almostXYears', 1) === 'takmer rok')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'takmer ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'takmer ' + number + ' rokov')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          assert(
            formatDistance('almostXYears', 1, PAST_OPTIONS) ===
              'takmer pred rokom'
          )
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('almostXYears', number, PAST_OPTIONS)
            assert(result === 'takmer pred ' + number + ' rokmi')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('almostXYears', number, PAST_OPTIONS)
            assert(result === 'takmer pred ' + number + ' rokmi')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('almostXYears', 1, FUTURE_OPTIONS)
          assert(result === 'takmer o rok')
        })
      })

      context('when the count is more than 1, less than 5', function() {
        it('returns a proper string', function() {
          TWO_FOUR_RANGE.forEach(function(number) {
            var result = formatDistance('almostXYears', number, FUTURE_OPTIONS)
            assert(result === 'takmer o ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function() {
        it('returns a proper string', function() {
          OTHER_RANGE.forEach(function(number) {
            var result = formatDistance('almostXYears', number, FUTURE_OPTIONS)
            assert(result === 'takmer o ' + number + ' rokov')
          })
        })
      })
    })
  })
})
