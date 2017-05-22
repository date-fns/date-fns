// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('tr locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'bir saniyeden az')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === '2 saniyeden az')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === '1 saniye')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === '2 saniye')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'yarım dakika')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'yarım dakika')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'bir dakikadan az')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === '2 dakikadan az')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === '1 dakika')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === '2 dakika')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'yaklaşık 1 saat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'yaklaşık 2 saat')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === '1 saat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === '2 saat')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === '1 gün')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === '2 gün')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'yaklaşık 1 ay')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'yaklaşık 2 ay')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === '1 ay')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === '2 ay')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'yaklaşık 1 yıl')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'yaklaşık 2 yıl')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === '1 yıl')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === '2 yıl')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === '1 yıldan fazla')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === '2 yıldan fazla')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'neredeyse 1 yıl')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'neredeyse 2 yıl')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `önce` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'yaklaşık 1 yıl önce')
    })

    it('adds `bir süre önce` to lessThanXSeconds', function () {
      var result = formatDistance('lessThanXSeconds', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'bir saniyeden az bir süre önce')
    })

    it('adds `bir süre önce` to lessThanXMinutes', function () {
      var result = formatDistance('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'bir dakikadan az bir süre önce')
    })

    it('adds `bir süre önce` to overXYears', function () {
      var result = formatDistance('overXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === '1 yıldan fazla bir süre önce')
    })
  })

  context('with a future suffix', function () {
    it('adds `içinde` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'yarım dakika içinde')
    })

    it('adds `bir süre içinde` to lessThanXSeconds', function () {
      var result = formatDistance('lessThanXSeconds', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'bir saniyeden az bir süre içinde')
    })

    it('adds `bir süre içinde` to lessThanXMinutes', function () {
      var result = formatDistance('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'bir dakikadan az bir süre içinde')
    })

    it('adds `bir süre içinde` to overXYears', function () {
      var result = formatDistance('overXYears', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === '1 yıldan fazla bir süre içinde')
    })
  })
})
