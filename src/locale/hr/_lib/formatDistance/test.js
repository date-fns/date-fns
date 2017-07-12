// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('hr locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'manje od 1 sekunde')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'manje od 2 sekunde')
        assert(formatDistance('lessThanXSeconds', 22) === 'manje od 22 sekunde')
        assert(formatDistance('lessThanXSeconds', 32) === 'manje od 32 sekunde')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 12) === 'manje od 12 sekundi')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === '1 sekunda')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === '2 sekunde')
        assert(formatDistance('xSeconds', 22) === '22 sekunde')
        assert(formatDistance('xSeconds', 32) === '32 sekunde')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 12) === '12 sekundi')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'pola minute')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'pola minute')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'manje od 1 minute')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === 'manje od 2 minute')
        assert(formatDistance('lessThanXMinutes', 22) === 'manje od 22 minute')
        assert(formatDistance('lessThanXMinutes', 32) === 'manje od 32 minute')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 12) === 'manje od 12 minuta')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === '1 minuta')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === '2 minute')
        assert(formatDistance('xMinutes', 22) === '22 minute')
        assert(formatDistance('xMinutes', 32) === '32 minute')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 12) === '12 minuta')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'oko 1 sat')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'oko 2 sata')
        assert(formatDistance('aboutXHours', 22) === 'oko 22 sata')
        assert(formatDistance('aboutXHours', 32) === 'oko 32 sata')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 12) === 'oko 12 sati')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === '1 sat')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === '2 sata')
        assert(formatDistance('xHours', 22) === '22 sata')
        assert(formatDistance('xHours', 32) === '32 sata')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 12) === '12 sati')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === '1 dan')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === '2 dana')
        assert(formatDistance('xDays', 12) === '12 dana')
        assert(formatDistance('xDays', 22) === '22 dana')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'oko 1 mjesec')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'oko 2 mjeseca')
        assert(formatDistance('aboutXMonths', 22) === 'oko 22 mjeseca')
        assert(formatDistance('aboutXMonths', 32) === 'oko 32 mjeseca')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 12) === 'oko 12 mjeseci')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === '1 mjesec')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === '2 mjeseca')
        assert(formatDistance('xMonths', 22) === '22 mjeseca')
        assert(formatDistance('xMonths', 32) === '32 mjeseca')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 12) === '12 mjeseci')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'oko 1 godinu')
      })
    })

    context('when the count is 2-4, 22-24, 32-34', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'oko 2 godine')
        assert(formatDistance('aboutXYears', 22) === 'oko 22 godine')
        assert(formatDistance('aboutXYears', 32) === 'oko 32 godine')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 12) === 'oko 12 godina')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === '1 godina')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === '2 godine')
        assert(formatDistance('xYears', 22) === '22 godine')
        assert(formatDistance('xYears', 32) === '32 godine')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 12) === '12 godina')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === 'preko 1 godinu')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === 'preko 2 godine')
        assert(formatDistance('overXYears', 22) === 'preko 22 godine')
        assert(formatDistance('overXYears', 32) === 'preko 32 godine')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 12) === 'preko 12 godina')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'gotovo 1 godinu')
      })
    })

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'gotovo 2 godine')
        assert(formatDistance('almostXYears', 22) === 'gotovo 22 godine')
        assert(formatDistance('almostXYears', 32) === 'gotovo 32 godine')
      })
    })

    context('when the count is other', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 12) === 'gotovo 12 godina')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'prije manje od 1 minute')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'za manje od 1 minutu')
    })
  })
})
