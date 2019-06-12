// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('nn locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 1) === 'mindre enn eitt sekund'
        )
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 12) === 'mindre enn tolv sekund'
        )
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 13) === 'mindre enn 13 sekund'
        )
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === 'eitt sekund')
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 12) === 'tolv sekund')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 13) === '13 sekund')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'eit halvt minutt')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'eit halvt minutt')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXMinutes', 1) === 'mindre enn eitt minutt'
        )
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXMinutes', 12) === 'mindre enn tolv minutt'
        )
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXMinutes', 13) === 'mindre enn 13 minutt'
        )
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === 'eitt minutt')
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 12) === 'tolv minutt')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 13) === '13 minutt')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'omtrent ein time')
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 12) === 'omtrent tolv timar')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 13) === 'omtrent 13 timar')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === 'ein time')
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 12) === 'tolv timar')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 13) === '13 timar')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === 'ein dag')
      })
    })

    context('when the count equals 11', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 11) === 'elleve dagar')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 13) === '13 dagar')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'omtrent ein månad')
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 12) === 'omtrent tolv månader')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 13) === 'omtrent 13 månader')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === 'ein månad')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 13) === '13 månader')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'omtrent eitt år')
      })
    })

    context('when the count equals 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 12) === 'omtrent tolv år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 13) === 'omtrent 13 år')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === 'eitt år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 13) === '13 år')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'over eitt år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 13) === 'over 13 år')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'nesten eitt år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 13) === 'nesten 13 år')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `sidan` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'omtrent eitt år sidan')
    })
  })

  context('with a future suffix', function() {
    it('adds `om` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'om eit halvt minutt')
    })
  })
})
