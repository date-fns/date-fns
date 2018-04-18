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
          assert(formatDistance('lessThanXSeconds', 1) === 'vähem kui üks sekund')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 2) === 'vähem kui 2 sekundit')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 1, optionsWithSuffix) === 'vähem kui ühe sekundi pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXSeconds', 2, optionsWithSuffix) === 'vähem kui 2 sekundi pärast')
        })
      })
    })
  })

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 1) === 'üks sekund')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 2) === '2 sekundit')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 1, optionsWithSuffix) === 'ühe sekundi pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xSeconds', 2, optionsWithSuffix) === '2 sekundi pärast')
        })
      })
    })
  })

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute') === 'pool minutit')
      })
    })

    describe('past or future suffix', function () {
      it('returns a proper string', function () {
        assert(formatDistance('halfAMinute', null, optionsWithSuffix) === 'poole minuti pärast')
      })

      it('ignores the second argument', function () {
        assert(formatDistance('halfAMinute', 123, optionsWithSuffix) === 'poole minuti pärast')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1) === 'vähem kui üks minut')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 2) === 'vähem kui 2 minutit')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 1, optionsWithSuffix) === 'vähem kui ühe minuti pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('lessThanXMinutes', 2, optionsWithSuffix) === 'vähem kui 2 minuti pärast')
        })
      })
    })
  })

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1) === 'üks minut')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 2) === '2 minutit')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 1, optionsWithSuffix) === 'ühe minuti pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMinutes', 2, optionsWithSuffix) === '2 minuti pärast')
        })
      })
    })
  })

  describe('aboutXHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1) === 'umbes üks tund')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 2) === 'umbes 2 tundi')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 1, optionsWithSuffix) === 'umbes ühe tunni pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXHours', 2, optionsWithSuffix) === 'umbes 2 tunni pärast')
        })
      })
    })
  })

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1) === 'üks tund')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 2) === '2 tundi')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 1, optionsWithSuffix) === 'ühe tunni pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xHours', 2, optionsWithSuffix) === '2 tunni pärast')
        })
      })
    })
  })

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 1) === 'üks päev')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xDays', 2) === '2 päeva')
        })
      })

      describe('past or future suffix', function () {
        context('when the count equals 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('xDays', 1, optionsWithSuffix) === 'ühe päeva pärast')
          })
        })

        context('when the count is more than 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('xDays', 2, optionsWithSuffix) === '2 päeva pärast')
          })
        })
      })
    })

    describe('aboutXMonths', function () {
      describe('no suffix', function () {
        context('when the count equals 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 1) === 'umbes üks kuu')
          })
        })

        context('when the count is more than 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 2) === 'umbes 2 kuud')
          })
        })
      })

      describe('past or future suffix', function () {
        context('when the count equals 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 1, optionsWithSuffix) === 'umbes ühe kuu pärast')
          })
        })

        context('when the count is more than 1', function () {
          it('returns a proper string', function () {
            assert(formatDistance('aboutXMonths', 2, optionsWithSuffix) === 'umbes 2 kuu pärast')
          })
        })
      })
    })
  })

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1) === 'üks kuu')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 2) === '2 kuud')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 1, optionsWithSuffix) === 'ühe kuu pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xMonths', 2, optionsWithSuffix) === '2 kuu pärast')
        })
      })
    })
  })

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1) === 'umbes üks aasta')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 2) === 'umbes 2 aastat')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 1, optionsWithSuffix) === 'umbes ühe aasta pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('aboutXYears', 2, optionsWithSuffix) === 'umbes 2 aasta pärast')
        })
      })
    })
  })

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1) === 'üks aasta')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 2) === '2 aastat')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 1, optionsWithSuffix) === 'ühe aasta pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('xYears', 2, optionsWithSuffix) === '2 aasta pärast')
        })
      })
    })
  })

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1) === 'rohkem kui üks aasta')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 2) === 'rohkem kui 2 aastat')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 1, optionsWithSuffix) === 'rohkem kui ühe aasta pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('overXYears', 2, optionsWithSuffix) === 'rohkem kui 2 aasta pärast')
        })
      })
    })
  })

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 1) === 'peaaegu üks aasta')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 2) === 'peaaegu 2 aastat')
        })
      })
    })

    describe('past or future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 1, optionsWithSuffix) === 'peaaegu ühe aasta pärast')
        })
      })

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          assert(formatDistance('almostXYears', 2, optionsWithSuffix) === 'peaaegu 2 aasta pärast')
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
      assert(result === 'umbes üks aasta')
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'umbes ühe aasta eest')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'poole minuti pärast')
    })
  })
})
