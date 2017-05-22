// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('fil locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'mas maliit sa isang segundo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'mas maliit sa 2 segundo')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === '1 segundo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === '2 segundo')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'kalahating minuto')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'kalahating minuto')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'mas maliit sa isang minuto')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === 'mas maliit sa 2 minuto')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === '1 minuto')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === '2 minuto')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'mga 1 oras')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'mga 2 oras')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === '1 oras')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === '2 oras')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === '1 araw')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === '2 araw')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'mga 1 buwan')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'mga 2 buwan')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === '1 buwan')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === '2 buwan')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'mga 1 taon')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'mga 2 taon')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === '1 taon')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === '2 taon')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === 'higit sa 1 taon')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === 'higit sa 2 taon')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'halos 1 taon')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'halos 2 taon')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'mga 1 taon ang nakalipas')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'sa loob ng kalahating minuto')
    })
  })
})
