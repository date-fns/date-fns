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

describe('cs locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 1) === 'méně než vteřina')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'méně než ' + number + ' vteřiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'méně než ' + number + ' vteřin')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 1, PAST_OPTIONS) === 'před méně než vteřinou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, PAST_OPTIONS)
            assert(result === 'před méně než ' + number + ' vteřinami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, PAST_OPTIONS)
            assert(result === 'před méně než ' + number + ' vteřinami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 1, FUTURE_OPTIONS) === 'za méně než vteřinu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za méně než ' + number + ' vteřiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za méně než ' + number + ' vteřin')
          })
        })
      })
    })
  })

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 1) === 'vteřina')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' vteřiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' vteřin')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 1, PAST_OPTIONS) === 'před vteřinou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xSeconds', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' vteřinami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xSeconds', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' vteřinami')
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
          assert(formatDistance('xSeconds', 1, FUTURE_OPTIONS) === 'za vteřinu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' vteřiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xSeconds', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' vteřin')
          })
        })
      })
    })
  })

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute', 0) === 'půl minuty')
      })

      it('ignores the second argument', function () {
        assert(formatDistance('halfAMinute', 123) === 'půl minuty')
      })
    })

    describe('past suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute', 0, PAST_OPTIONS) === 'před půl minutou')
      })

      it('ignores the second argument', function () {
        assert(formatDistance('halfAMinute', 123, PAST_OPTIONS) === 'před půl minutou')
      })
    })

    describe('future suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute', 0, FUTURE_OPTIONS) === 'za půl minuty')
      })

      it('ignores the second argument', function () {
        assert(formatDistance('halfAMinute', 123, FUTURE_OPTIONS) === 'za půl minuty')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1) === 'méně než minuta')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'méně než ' + number + ' minuty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'méně než ' + number + ' minut')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1, PAST_OPTIONS) === 'před méně než minutou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, PAST_OPTIONS)
            assert(result === 'před méně než ' + number + ' minutami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, PAST_OPTIONS)
            assert(result === 'před méně než ' + number + ' minutami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1, FUTURE_OPTIONS) === 'za méně než minutu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za méně než ' + number + ' minuty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za méně než ' + number + ' minut')
          })
        })
      })
    })
  })

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1) === 'minuta')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' minuty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' minut')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1, PAST_OPTIONS) === 'před minutou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xMinutes', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' minutami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xMinutes', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' minutami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1, FUTURE_OPTIONS) === 'za minutu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' minuty')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xMinutes', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' minut')
          })
        })
      })
    })
  })

  describe('aboutXHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1) === 'přibližně hodina')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXHours', number)
            assert(result === 'přibližně ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXHours', number)
            assert(result === 'přibližně ' + number + ' hodin')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1, PAST_OPTIONS) === 'přibližně před hodinou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXHours', number, PAST_OPTIONS)
            assert(result === 'přibližně před ' + number + ' hodinami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXHours', number, PAST_OPTIONS)
            assert(result === 'přibližně před ' + number + ' hodinami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1, FUTURE_OPTIONS) === 'přibližně za hodinu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXHours', number, FUTURE_OPTIONS)
            assert(result === 'přibližně za ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXHours', number, FUTURE_OPTIONS)
            assert(result === 'přibližně za ' + number + ' hodin')
          })
        })
      })
    })
  })

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1) === 'hodina')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' hodin')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1, PAST_OPTIONS) === 'před hodinou')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xHours', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' hodinami')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xHours', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' hodinami')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1, FUTURE_OPTIONS) === 'za hodinu')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xHours', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' hodiny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xHours', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' hodin')
          })
        })
      })
    })
  })

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 1) === 'den')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' dni')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' dní')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 1, PAST_OPTIONS) === 'před dnem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xDays', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' dny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xDays', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' dny')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 1, FUTURE_OPTIONS) === 'za den')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xDays', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' dny')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xDays', number, FUTURE_OPTIONS)
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
          assert(formatDistance('aboutXMonths', 1) === 'přibližně měsíc')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'přibližně ' + number + ' měsíce')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'přibližně ' + number + ' měsíců')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXMonths', 1, PAST_OPTIONS) === 'přibližně před měsícem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, PAST_OPTIONS)
            assert(result === 'přibližně před ' + number + ' měsíci')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, PAST_OPTIONS)
            assert(result === 'přibližně před ' + number + ' měsíci')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXMonths', 1, FUTURE_OPTIONS) === 'přibližně za měsíc')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, FUTURE_OPTIONS)
            assert(result === 'přibližně za ' + number + ' měsíce')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, FUTURE_OPTIONS)
            assert(result === 'přibližně za ' + number + ' měsíců')
          })
        })
      })
    })
  })

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1) === 'měsíc')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' měsíce')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' měsíců')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1, PAST_OPTIONS) === 'před měsícem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xMonths', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' měsíci')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xMonths', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' měsíci')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1, FUTURE_OPTIONS) === 'za měsíc')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xMonths', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' měsíce')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xMonths', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' měsíců')
          })
        })
      })
    })
  })

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1) === 'přibližně rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'přibližně ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'přibližně ' + number + ' roků')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1, PAST_OPTIONS) === 'přibližně před rokem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXYears', number, PAST_OPTIONS)
            assert(result === 'přibližně před ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXYears', number, PAST_OPTIONS)
            assert(result === 'přibližně před ' + number + ' roky')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1, FUTURE_OPTIONS) === 'přibližně za rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXYears', number, FUTURE_OPTIONS)
            assert(result === 'přibližně za ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('aboutXYears', number, FUTURE_OPTIONS)
            assert(result === 'přibližně za ' + number + ' roků')
          })
        })
      })
    })
  })

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1) === 'rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' roků')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1, PAST_OPTIONS) === 'před rokem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xYears', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xYears', number, PAST_OPTIONS)
            assert(result === 'před ' + number + ' roky')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1, FUTURE_OPTIONS) === 'za rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('xYears', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('xYears', number, FUTURE_OPTIONS)
            assert(result === 'za ' + number + ' roků')
          })
        })
      })
    })
  })

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1) === 'více než rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'více než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'více než ' + number + ' roků')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1, PAST_OPTIONS) === 'před více než rokem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('overXYears', number, PAST_OPTIONS)
            assert(result === 'před více než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('overXYears', number, PAST_OPTIONS)
            assert(result === 'před více než ' + number + ' roky')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1, FUTURE_OPTIONS) === 'za více než rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('overXYears', number, FUTURE_OPTIONS)
            assert(result === 'za více než ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('overXYears', number, FUTURE_OPTIONS)
            assert(result === 'za více než ' + number + ' roků')
          })
        })
      })
    })
  })

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 1) === 'skoro rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'skoro ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'skoro ' + number + ' roků')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 1, PAST_OPTIONS) === 'skoro před rokem')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('almostXYears', number, PAST_OPTIONS)
            assert(result === 'skoro před ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('almostXYears', number, PAST_OPTIONS)
            assert(result === 'skoro před ' + number + ' roky')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('almostXYears', 1, FUTURE_OPTIONS)
          assert(result === 'skoro za rok')
        })
      })

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = formatDistance('almostXYears', number, FUTURE_OPTIONS)
            assert(result === 'skoro za ' + number + ' roky')
          })
        })
      })

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = formatDistance('almostXYears', number, FUTURE_OPTIONS)
            assert(result === 'skoro za ' + number + ' roků')
          })
        })
      })
    })
  })
})
