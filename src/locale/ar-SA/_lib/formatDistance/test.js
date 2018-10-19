// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('sa-AR locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 1) === 'أقل من ثانية واحدة')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 5) === 'أقل من 5 ثواني')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 20) === 'أقل من 20 ثانية')
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === 'ثانية واحدة')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 5) === '5 ثواني')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 20) === '20 ثانية')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'نصف دقيقة')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'نصف دقيقة')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'أقل من دقيقة')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 5) === 'أقل من 5 دقائق')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 20) === 'أقل من 20 دقيقة')
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === 'دقيقة واحدة')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 5) === '5 دقائق')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 20) === '20 دقيقة')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'ساعة واحدة تقريباً')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 5) === '5 ساعات تقريباً')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 20) === '20 ساعة تقريباً')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === 'ساعة واحدة')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 5) === '5 ساعات')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 20) === '20 ساعة')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === 'يوم واحد')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 5) === '5 أيام')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 20) === '20 يوم')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'شهر واحد تقريباً')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 5) === '5 أشهر تقريباً')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 20) === '20 شهر تقريباً')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === 'شهر واحد')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 5) === '5 أشهر')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 20) === '20 شهر')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'عام واحد تقريباً')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 5) === '5 أعوام تقريباً')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 20) === '20 عام تقريباً')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === 'عام واحد')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 5) === '5 أعوام')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 20) === '20 عام')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'أكثر من عام')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 5) === 'أكثر من 5 أعوام')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 20) === 'أكثر من 20 عام')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'عام واحد تقريباً')
      })
    })

    context('when the count is betweem three and ten', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 5) === '5 أعوام تقريباً')
      })
    })

    context('when the count is more than 10', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 20) === '20 عام تقريباً')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `ago` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'منذ عام واحد تقريباً')
    })
  })

  context('with a future suffix', function() {
    it('adds `in` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'في خلال نصف دقيقة')
    })
  })
})
