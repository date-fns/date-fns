// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('nb locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'mindre enn ett sekund')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 12) === 'mindre enn tolv sekunder')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 13) === 'mindre enn 13 sekunder')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === 'ett sekund')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 12) === 'tolv sekunder')
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
      assert(formatDistance('halfAMinute') === 'et halvt minutt')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'et halvt minutt')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'mindre enn ett minutt')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 12) === 'mindre enn tolv minutter')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 13) === 'mindre enn 13 minutter')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === 'ett minutt')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 12) === 'tolv minutter')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 13) === '13 minutter')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'omtrent en time')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 12) === 'omtrent tolv timer')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 13) === 'omtrent 13 timer')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === 'en time')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 12) === 'tolv timer')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 13) === '13 timer')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === 'en dag')
      })
    })

    context('when the count equals 11', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 11) === 'elleve dager')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 13) === '13 dager')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'omtrent en måned')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 12) === 'omtrent tolv måneder')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 13) === 'omtrent 13 måneder')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === 'en måned')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 13) === '13 måneder')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'omtrent ett år')
      })
    })

    context('when the count equals 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 12) === 'omtrent tolv år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 13) === 'omtrent 13 år')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === 'ett år')
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
        assert(formatDistance('overXYears', 1) === 'over ett år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 13) === 'over 13 år')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'nesten ett år')
      })
    })

    context('when the count is more than 12', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 13) === 'nesten 13 år')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `siden` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'omtrent ett år siden')
    })
  })

  context('with a future suffix', function () {
    it('adds `om` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'om et halvt minutt')
    })
  })
})
