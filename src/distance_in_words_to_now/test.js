// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var distanceInWordsToNow = require('./')

describe('distanceInWordsToNow', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(1986, 3, 4, 10, 32, 0).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  describe('seconds', function () {
    context('when the includeSeconds option is true', function () {
      it('less than 5 seconds', function () {
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 10, 31, 58),
          {includeSeconds: true}
        )
        assert(result === 'less than 5 seconds')
      })

      it('less than 10 seconds', function () {
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 10, 31, 52),
          {includeSeconds: true}
        )
        assert(result === 'less than 10 seconds')
      })

      it('less than 20 seconds', function () {
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 10, 31, 45),
          {includeSeconds: true}
        )
        assert(result === 'less than 20 seconds')
      })

      it('half a minute', function () {
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 10, 31, 35),
          {includeSeconds: true}
        )
        assert(result === 'half a minute')
      })

      it('less than a minute', function () {
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 10, 31, 15),
          {includeSeconds: true}
        )
        assert(result === 'less than a minute')
      })

      it('1 minute', function () {
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 10, 31, 0),
          {includeSeconds: true}
        )
        assert(result === '1 minute')
      })
    })
  })

  describe('minutes', function () {
    it('less than a minute', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 10, 31, 40)
      )
      assert(result === 'less than a minute')
    })

    it('1 minute', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 10, 31, 10)
      )
      assert(result === '1 minute')
    })

    it('n minutes', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 10, 29, 10)
      )
      assert(result === '3 minutes')
    })
  })

  describe('hours', function () {
    it('about 1 hour', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 9, 32, 0)
      )
      assert(result === 'about 1 hour')
    })

    it('about n hours', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 7, 32, 0)
      )
      assert(result === 'about 3 hours')
    })
  })

  describe('days', function () {
    it('1 day', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 3, 10, 32, 0)
      )
      assert(result === '1 day')
    })

    it('n days', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 1, 10, 32, 0)
      )
      assert(result === '3 days')
    })
  })

  describe('months', function () {
    it('about 1 month', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 2, 4, 10, 32, 0)
      )
      assert(result === 'about 1 month')
    })

    it('n months', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 0, 4, 10, 32, 0)
      )
      assert(result === '3 months')
    })
  })

  describe('years', function () {
    it('about 1 year', function () {
      var result = distanceInWordsToNow(
        new Date(1985, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 1 year')
    })

    it('over 1 year', function () {
      var result = distanceInWordsToNow(
        new Date(1984, 10, 4, 10, 32, 0)
      )
      assert(result === 'over 1 year')
    })

    it('almost n years', function () {
      var result = distanceInWordsToNow(
        new Date(1983, 4, 4, 10, 32, 0)
      )
      assert(result === 'almost 3 years')
    })

    it('about n years', function () {
      var result = distanceInWordsToNow(
        new Date(1983, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 3 years')
    })

    it('over n years', function () {
      var result = distanceInWordsToNow(
        new Date(1982, 10, 4, 10, 32, 0)
      )
      assert(result === 'over 3 years')
    })
  })

  it('accepts a string', function () {
    var result = distanceInWordsToNow(
      new Date(1986, 3, 4, 10, 31, 40).toISOString()
    )
    assert(result === 'less than a minute')
  })

  it('accepts a timestamp', function () {
    var result = distanceInWordsToNow(
      new Date(1986, 3, 4, 10, 31, 40).getTime()
    )
    assert(result === 'less than a minute')
  })

  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 10, 31, 35),
        {includeSeconds: true, addSuffix: true}
      )
      assert(result === 'half a minute ago')
    })

    it('adds a future suffix', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 11, 32, 0),
        {addSuffix: true}
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('implicit conversion of options', function () {
    it('`options.includeSeconds`', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 10, 31, 52),
        // $ExpectedMistake
        {includeSeconds: 1}
      )
      assert(result === 'less than 10 seconds')
    })

    it('`options.addSuffix`', function () {
      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 11, 32, 0),
        // $ExpectedMistake
        {addSuffix: 1}
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      function localize (token, count, options) {
        assert(token === 'aboutXHours')
        assert(count === 1)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      var customLocale = {
        distanceInWords: {
          localize: localize
        }
      }

      var result = distanceInWordsToNow(
        new Date(1986, 3, 4, 11, 32, 0),
        {addSuffix: true, locale: customLocale}
      )

      assert(result === 'It works!')
    })

    context('does not contain `distanceInWords` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {}
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 11, 32, 0),
          {addSuffix: true, locale: customLocale}
        )
        assert(result === 'in about 1 hour')
      })
    })

    context('does not contain `distanceInWords.localize` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {distanceInWords: {}}
        var result = distanceInWordsToNow(
          new Date(1986, 3, 4, 11, 32, 0),
          {addSuffix: true, locale: customLocale}
        )
        assert(result === 'in about 1 hour')
      })
    })
  })
})
