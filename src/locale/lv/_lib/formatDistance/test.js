// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('lv locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 1) === 'mazāk par sekundi')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 2) === 'mazāk nekā 2 sekundes'
        )
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === '1 sekunde')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 2) === '2 sekundes')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'pusminūte')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'pusminūte')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'mazāk par minūti')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 2) === 'mazāk nekā 2 minūtes')
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === '1 minūte')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 2) === '2 minūtes')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'apmēram 1 stunda')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 2) === 'apmēram 2 stundas')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === '1 stunda')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 2) === '2 stundas')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === '1 diena')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 2) === '2 dienas')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'apmēram 1 mēnesis')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 2) === 'apmēram 2 mēneši')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === '1 mēnesis')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 2) === '2 mēneši')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'apmēram 1 gads')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 2) === 'apmēram 2 gadi')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === '1 gads')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 2) === '2 gadi')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'ilgāk par 1 gadu')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 2) === 'vairāk nekā 2 gadi')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'gandrīz 1 gads')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 2) === 'vairāk nekā 2 gadi')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `pirms` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'pirms apmēram 1 gada')
    })
  })

  context('with a future suffix', function() {
    it('adds `pēc` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'pēc pusminūtes')
    })
  })
})
