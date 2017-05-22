// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

var FUTURE_OPTIONS = {
  addSuffix: true,
  comparison: 1
}

describe('fi locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'alle sekunti')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'alle 2 sekuntia')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 1) === 'sekunti')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xSeconds', 2) === '2 sekuntia')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(formatDistance('halfAMinute') === 'puoli minuuttia')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'puoli minuuttia')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'alle minuutti')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('lessThanXMinutes', 2) === 'alle 2 minuuttia')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 1) === 'minuutti')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMinutes', 2) === '2 minuuttia')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 1) === 'noin tunti')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXHours', 2) === 'noin 2 tuntia')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 1) === 'tunti')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xHours', 2) === '2 tuntia')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 1) === 'päivä')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xDays', 2) === '2 päivää')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 1) === 'noin kuukausi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXMonths', 2) === 'noin 2 kuukautta')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 1) === 'kuukausi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xMonths', 2) === '2 kuukautta')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 1) === 'noin vuosi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('aboutXYears', 2) === 'noin 2 vuotta')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 1) === 'vuosi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('xYears', 2) === '2 vuotta')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 1) === 'yli vuosi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('overXYears', 2) === 'yli 2 vuotta')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 1) === 'lähes vuosi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(formatDistance('almostXYears', 2) === 'lähes 2 vuotta')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `sitten` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'noin vuosi sitten')
    })
  })

  describe('future suffix', function () {
    context('when the context is `xSeconds`', function () {
      it('returns a proper string', function () {
        var result = formatDistance('xSeconds', 40, FUTURE_OPTIONS)
        assert(result === '40 sekunnin kuluttua')
      })
    })

    context('when the context is `lessThanXMinutes`', function () {
      it('returns a proper string', function () {
        var result = formatDistance('lessThanXMinutes', 1, FUTURE_OPTIONS)
        assert(result === 'alle minuutin kuluttua')
      })
    })

    context('when the context is `aboutXHours`', function () {
      it('returns a proper string', function () {
        var result = formatDistance('aboutXHours', 1, FUTURE_OPTIONS)
        assert(result === 'noin tunnin kuluttua')
      })
    })

    context('when the context is `xDays`', function () {
      it('returns a proper string', function () {
        var result = formatDistance('xDays', 1, FUTURE_OPTIONS)
        assert(result === 'päivän kuluttua')
      })
    })

    context('when the context is `aboutXMonths`', function () {
      it('returns a proper string', function () {
        var result = formatDistance('aboutXMonths', 1, FUTURE_OPTIONS)
        assert(result === 'noin kuukauden kuluttua')
      })
    })

    context('when the context is `almostXYears`', function () {
      it('returns a proper string', function () {
        var result = formatDistance('almostXYears', 1, FUTURE_OPTIONS)
        assert(result === 'lähes vuoden kuluttua')
      })
    })
  })
})
