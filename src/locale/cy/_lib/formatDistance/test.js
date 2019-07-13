// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('cy locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 1) === 'llai na eiliad')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 2) === 'llai na 2 eiliad')
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === '1 eiliad')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 2) === '2 eiliad')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'hanner munud')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'hanner munud')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'llai na munud')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 2) === 'llai na 2 funud')
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === '1 funud')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 2) === '2 funud')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'tua 1 awr')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 2) === 'tua 2 awr')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === '1 awr')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 2) === '2 awr')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === '1 diwrnod')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 2) === '2 diwrnod')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'tua 1 mis')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 2) === 'tua 2 fis')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === '1 mis')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 2) === '2 fis')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'tua 1 flwyddyn')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 2) === 'tua 2 flynedd')
      })
    })

    context('when the count is more than 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 3) === 'tua 3 mlynedd')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === '1 flwyddyn')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 2) === '2 flynedd')
      })
    })

    context('when the count is more than 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 3) === '3 mlynedd')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'dros 1 flwyddyn')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 2) === 'dros 2 flynedd')
      })
    })

    context('when the count is more than 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 3) === 'dros 3 mlynedd')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'bron 1 flwyddyn')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 2) === 'bron 2 flynedd')
      })
    })

    context('when the count is more than 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 3) === 'bron 3 mlynedd')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `ago` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'tua 1 flwyddyn yn ôl')
    })
  })

  context('with a future suffix', function() {
    it('adds `in` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'mewn hanner munud')
    })
  })
})
