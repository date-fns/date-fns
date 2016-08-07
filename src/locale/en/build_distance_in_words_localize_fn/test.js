/* eslint-env mocha */

var assert = require('power-assert')
var buildDistanceInWordsLocalizeFn = require('./')

describe('en locale > buildDistanceInWordsLocalizeFn', function () {
  it('returns a function', function () {
    assert(typeof buildDistanceInWordsLocalizeFn() === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('lessThanXSeconds', 1) === 'less than a second')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('lessThanXSeconds', 2) === 'less than 2 seconds')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(buildDistanceInWordsLocalizeFn()('halfAMinute') === 'half a minute')
    })

    it('ignores the second argument', function () {
      assert(buildDistanceInWordsLocalizeFn()('halfAMinute', 123) === 'half a minute')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('lessThanXMinutes', 1) === 'less than a minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('lessThanXMinutes', 2) === 'less than 2 minutes')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('xMinutes', 1) === '1 minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('xMinutes', 2) === '2 minutes')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('aboutXHours', 1) === 'about 1 hour')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('aboutXHours', 2) === 'about 2 hours')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('xDays', 1) === '1 day')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('xDays', 2) === '2 days')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('aboutXMonths', 1) === 'about 1 month')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('aboutXMonths', 2) === 'about 2 months')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('xMonths', 1) === '1 month')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('xMonths', 2) === '2 months')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('aboutXYears', 1) === 'about 1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('aboutXYears', 2) === 'about 2 years')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('overXYears', 1) === 'over 1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('overXYears', 2) === 'over 2 years')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('almostXYears', 1) === 'almost 1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocalizeFn()('almostXYears', 2) === 'almost 2 years')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = buildDistanceInWordsLocalizeFn()('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'about 1 year ago')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = buildDistanceInWordsLocalizeFn()('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'in half a minute')
    })
  })
})
