// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('ms locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'kurang dari 1 saat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'kurang dari 2 saat')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === '1 saat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === '2 saat')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'setengah minit')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'setengah minit')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'kurang dari 1 minit')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === 'kurang dari 2 minit')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === '1 minit')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === '2 minit')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'sekitar 1 jam')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'sekitar 2 jam')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === '1 jam')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === '2 jam')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === '1 hari')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === '2 hari')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'sekitar 1 bulan')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'sekitar 2 bulan')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === '1 bulan')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === '2 bulan')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'sekitar 1 tahun')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'sekitar 2 tahun')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === '1 tahun')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === '2 tahun')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === 'lebih dari 1 tahun')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === 'lebih dari 2 tahun')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'hampir 1 tahun')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'hampir 2 tahun')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'sekitar 1 tahun yang lalu')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'dalam masa setengah minit')
    })
  })
})
