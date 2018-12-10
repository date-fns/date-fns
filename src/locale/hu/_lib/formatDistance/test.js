// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('hu locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 1) === 'kevesebb mint 1 másodperc'
        )
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 2) === 'kevesebb mint 2 másodperc'
        )
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === '1 másodperc')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 2) === '2 másodperc')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'fél perc')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'fél perc')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'kevesebb mint 1 perc')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 2) === 'kevesebb mint 2 perc')
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === '1 perc')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 2) === '2 perc')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'körülbelül 1 óra')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 2) === 'körülbelül 2 óra')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === '1 óra')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 2) === '2 óra')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === '1 nap')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 2) === '2 nap')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'körülbelül 1 hónap')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 2) === 'körülbelül 2 hónap')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === '1 hónap')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 2) === '2 hónap')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'körülbelül 1 év')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 2) === 'körülbelül 2 év')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === '1 év')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 2) === '2 év')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'több mint 1 év')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 2) === 'több mint 2 év')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'majdnem 1 év')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 2) === 'majdnem 2 év')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `ezelőtt` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'körülbelül 1 évvel ezelőtt')
    })
  })

  context('with a future suffix', function() {
    it('adds `múlva` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'fél perc múlva')
    })
  })
})
