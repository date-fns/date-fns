// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

var optionsWithSuffix = { addSuffix: true, comparison: 1 }

describe('de locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 1) === 'weniger als eine Sekunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 2) === 'weniger als 2 Sekunden')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 1, optionsWithSuffix) === 'in weniger als einer Sekunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 2, optionsWithSuffix) === 'in weniger als 2 Sekunden')
        })
      })
    })
  })

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 1) === 'eine Sekunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 2) === '2 Sekunden')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 1, optionsWithSuffix) === 'in einer Sekunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 2, optionsWithSuffix) === 'in 2 Sekunden')
        })
      })
    })
  })

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute') === 'eine halbe Minute')
      })
    })

    describe('past or future suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute', null, optionsWithSuffix) === 'in einer halben Minute')
      })

      it('ignores the second argument', function () {
        assert(formatDistance('halfAMinute', 123, optionsWithSuffix) === 'in einer halben Minute')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1) === 'weniger als eine Minute')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 2) === 'weniger als 2 Minuten')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1, optionsWithSuffix) === 'in weniger als einer Minute')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 2, optionsWithSuffix) === 'in weniger als 2 Minuten')
        })
      })
    })
  })

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1) === 'eine Minute')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 2) === '2 Minuten')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1, optionsWithSuffix) === 'in einer Minute')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 2, optionsWithSuffix) === 'in 2 Minuten')
        })
      })
    })
  })

  describe('aboutXHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1) === 'etwa eine Stunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 2) === 'etwa 2 Stunden')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1, optionsWithSuffix) === 'in etwa einer Stunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 2, optionsWithSuffix) === 'in etwa 2 Stunden')
        })
      })
    })
  })

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1) === 'eine Stunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 2) === '2 Stunden')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1, optionsWithSuffix) === 'in einer Stunde')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 2, optionsWithSuffix) === 'in 2 Stunden')
        })
      })
    })
  })

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 1) === 'ein Tag')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 2) === '2 Tage')
        })
      })

      describe('past or future suffix', function () {
        context('when the count equals 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('xDays', 1, optionsWithSuffix) === 'in einem Tag')
          })
        })

        context('when the count is more than 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('xDays', 2, optionsWithSuffix) === 'in 2 Tagen')
          })
        })
      })
    })

    describe('aboutXMonths', function () {
      describe('no suffix', function () {
        context('when the count equals 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 1) === 'etwa ein Monat')
          })
        })

        context('when the count is more than 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 2) === 'etwa 2 Monate')
          })
        })
      })

      describe('past or future suffix', function () {
        context('when the count equals 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 1, optionsWithSuffix) === 'in etwa einem Monat')
          })
        })

        context('when the count is more than 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 2, optionsWithSuffix) === 'in etwa 2 Monaten')
          })
        })
      })
    })
  })

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1) === 'ein Monat')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 2) === '2 Monate')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1, optionsWithSuffix) === 'in einem Monat')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 2, optionsWithSuffix) === 'in 2 Monaten')
        })
      })
    })
  })

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1) === 'etwa ein Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 2) === 'etwa 2 Jahre')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1, optionsWithSuffix) === 'in etwa einem Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 2, optionsWithSuffix) === 'in etwa 2 Jahren')
        })
      })
    })
  })

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1) === 'ein Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 2) === '2 Jahre')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1, optionsWithSuffix) === 'in einem Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 2, optionsWithSuffix) === 'in 2 Jahren')
        })
      })
    })
  })

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1) === 'mehr als ein Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 2) === 'mehr als 2 Jahre')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1, optionsWithSuffix) === 'in mehr als einem Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 2, optionsWithSuffix) === 'in mehr als 2 Jahren')
        })
      })
    })
  })

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 1) === 'fast ein Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 2) === 'fast 2 Jahre')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 1, optionsWithSuffix) === 'in fast einem Jahr')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 2, optionsWithSuffix) === 'in fast 2 Jahren')
        })
      })
    })
  })

  context('with no suffix', function () {
    it('returns a plain version of the string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: false,
        comparison: -1
      })
      assert(result === 'etwa ein Jahr')
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'vor etwa einem Jahr')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'in einer halben Minute')
    })
  })
})
