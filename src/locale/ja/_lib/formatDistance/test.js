// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('ja locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === '1秒未満')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === '2秒未満')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === '1秒')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === '2秒')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === '30秒')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === '30秒')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === '1分未満')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === '2分未満')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === '1分')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === '2分')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === '約1時間')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === '約2時間')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === '1時間')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === '2時間')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === '1日')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === '2日')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === '約1か月')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === '約2か月')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === '1か月')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === '2か月')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === '約1年')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === '約2年')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === '1年')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === '2年')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === '1年以上')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === '2年以上')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === '1年近く')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === '2年近く')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === '約1年前')
    })

    context('and locale data has `oneWithSuffix`', function () {
      it('adds `ago` to a `oneWithSuffix`', function () {
        var result = formatDistance('almostXYears', 1, {
          addSuffix: true,
          comparison: -1
        })
        assert(result === '1年近く前')
      })
    })

    context('and locale data has `otherWithSuffix`', function () {
      it('adds `ago` to a `otherWithSuffix`', function () {
        var result = formatDistance('almostXYears', 2, {
          addSuffix: true,
          comparison: -1
        })
        assert(result === '2年近く前')
      })
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === '30秒後')
    })
  })
})
