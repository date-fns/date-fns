// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('he locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'פחות משנייה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'פחות משתי שניות')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 3) === 'פחות מ־3 שניות')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === 'שנייה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === 'שתי שניות')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 3) === '3 שניות')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'חצי דקה')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'חצי דקה')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'פחות מדקה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === 'פחות משתי דקות')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 3) === 'פחות מ־3 דקות')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === 'דקה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === 'שתי דקות')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 3) === '3 דקות')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'בערך שעה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'בערך שעתיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 3) === 'בערך 3 שעות')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === 'שעה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === 'שעתיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 3) === '3 שעות')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === 'יום')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === 'יומיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 3) === '3 ימים')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'בערך חודש')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'בערך חודשיים')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 3) === 'בערך 3 חודשים')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === 'חודש')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === 'חודשיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 3) === '3 חודשים')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'בערך שנה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'בערך שנתיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 3) === 'בערך 3 שנים')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === 'שנה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === 'שנתיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 3) === '3 שנים')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === 'יותר משנה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === 'יותר משנתיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 3) === 'יותר מ־3 שנים')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'כמעט שנה')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'כמעט שנתיים')
      })
    })

    context('when the count is more than 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 3) === 'כמעט 3 שנים')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'לפני בערך שנה')
    })

    it('returns word instead of `one day ago`', function () {
      var result = formatDistance('xDays', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'אתמול')
    })

    it('returns word instead of `2 days ago`', function () {
      var result = formatDistance('xDays', 2, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'שלשום')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'בעוד חצי דקה')
    })

    it('returns word instead of `in one day`', function () {
      var result = formatDistance('xDays', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'מחר')
    })

    it('returns word instead of `in 2 days`', function () {
      var result = formatDistance('xDays', 2, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'מחרתיים')
    })
  })
})
