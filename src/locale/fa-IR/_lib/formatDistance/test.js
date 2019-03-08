// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('fa-IR locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 1) === 'کمتر از یک ثانیه')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 2) === 'کمتر از 2 ثانیه')
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === '1 ثانیه')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 2) === '2 ثانیه')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'نیم دقیقه')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'نیم دقیقه')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'کمتر از یک دقیقه')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 2) === 'کمتر از 2 دقیقه')
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === '1 دقیقه')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 2) === '2 دقیقه')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'حدود 1 ساعت')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 2) === 'حدود 2 ساعت')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === '1 ساعت')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 2) === '2 ساعت')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === '1 روز')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 2) === '2 روز')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'حدود 1 ماه')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 2) === 'حدود 2 ماه')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === '1 ماه')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 2) === '2 ماه')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'حدود 1 سال')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 2) === 'حدود 2 سال')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === '1 سال')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 2) === '2 سال')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'بیشتر از 1 سال')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 2) === 'بیشتر از 2 سال')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'نزدیک 1 سال')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 2) === 'نزدیک 2 سال')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `ago` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'حدود 1 سال قبل')
    })
  })

  context('with a future suffix', function() {
    it('adds `in` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'در نیم دقیقه')
    })
  })
})
