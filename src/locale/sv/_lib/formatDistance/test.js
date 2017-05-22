// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('sv locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'mindre än en sekund')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'mindre än två sekunder')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 13) === 'mindre än 13 sekunder')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === 'en sekund')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === 'två sekunder')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 13) === '13 sekunder')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'en halv minut')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'en halv minut')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'mindre än en minut')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === 'mindre än två minuter')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 13) === 'mindre än 13 minuter')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === 'en minut')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === 'två minuter')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 13) === '13 minuter')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'ungefär en timme')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'ungefär två timmar')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 13) === 'ungefär 13 timmar')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === 'en timme')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === 'två timmar')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 13) === '13 timmar')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === 'en dag')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === 'två dagar')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 13) === '13 dagar')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'ungefär en månad')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'ungefär två månader')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 13) === 'ungefär 13 månader')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === 'en månad')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === 'två månader')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 13) === '13 månader')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'ungefär ett år')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'ungefär två år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 13) === 'ungefär 13 år')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === 'ett år')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === 'två år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 13) === '13 år')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === 'över ett år')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === 'över två år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 13) === 'över 13 år')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'nästan ett år')
      })
    })

    context('when the count equals 2', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'nästan två år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 13) === 'nästan 13 år')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `sedan` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'ungefär ett år sedan')
    })
  })

  context('with a future suffix', function () {
    it('adds `om` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'om en halv minut')
    })
  })
})
