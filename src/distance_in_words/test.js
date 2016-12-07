// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import distanceInWords from '.'

describe('distanceInWords', function () {
  describe('seconds', function () {
    context('when the includeSeconds option is true', function () {
      it('less than 5 seconds', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          {includeSeconds: true}
        )
        assert(result === 'less than 5 seconds')
      })

      it('less than 10 seconds', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7),
          {includeSeconds: true}
        )
        assert(result === 'less than 10 seconds')
      })

      it('less than 20 seconds', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15),
          {includeSeconds: true}
        )
        assert(result === 'less than 20 seconds')
      })

      it('half a minute', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          {includeSeconds: true}
        )
        assert(result === 'half a minute')
      })

      it('less than a minute', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45),
          {includeSeconds: true}
        )
        assert(result === 'less than a minute')
      })

      it('1 minute', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 0),
          {includeSeconds: true}
        )
        assert(result === '1 minute')
      })
    })
  })

  describe('minutes', function () {
    it('less than a minute', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20)
      )
      assert(result === 'less than a minute')
    })

    it('1 minute', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50)
      )
      assert(result === '1 minute')
    })

    it('n minutes', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50)
      )
      assert(result === '3 minutes')
    })
  })

  describe('hours', function () {
    it('about 1 hour', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0)
      )
      assert(result === 'about 1 hour')
    })

    it('about n hours', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0)
      )
      assert(result === 'about 3 hours')
    })
  })

  describe('days', function () {
    it('1 day', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0)
      )
      assert(result === '1 day')
    })

    it('n days', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0)
      )
      assert(result === '3 days')
    })
  })

  describe('months', function () {
    it('about 1 month', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0)
      )
      assert(result === 'about 1 month')
    })

    it('n months', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0)
      )
      assert(result === '3 months')
    })
  })

  describe('years', function () {
    it('about 1 year', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 1 year')
    })

    it('over 1 year', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0)
      )
      assert(result === 'over 1 year')
    })

    it('almost n years', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0)
      )
      assert(result === 'almost 3 years')
    })

    it('about n years', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 3 years')
    })

    it('over n years', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0)
      )
      assert(result === 'over 3 years')
    })
  })

  it('accepts strings', function () {
    var result = distanceInWords(
      new Date(1986, 3, 4, 10, 32, 0).toISOString(),
      new Date(1986, 3, 4, 11, 32, 0).toISOString()
    )
    assert(result === 'about 1 hour')
  })

  it('accepts timestamps', function () {
    var result = distanceInWords(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === 'about 1 hour')
  })

  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        {includeSeconds: true, addSuffix: true}
      )
      assert(result === 'half a minute ago')
    })

    it('adds a future suffix', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0),
        {addSuffix: true}
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      function localize (token, count, options) {
        assert(token === 'lessThanXSeconds')
        assert(count === 5)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      var customLocale = {
        distanceInWords: {
          localize: localize
        }
      }

      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 3),
        {includeSeconds: true, addSuffix: true, locale: customLocale}
      )

      assert(result === 'It works!')
    })

    context('does not contain `distanceInWords` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {}
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          {includeSeconds: true, locale: customLocale}
        )
        assert(result === 'less than 5 seconds')
      })
    })

    context('does not contain `distanceInWords.localize` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {distanceInWords: {}}
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          {includeSeconds: true, locale: customLocale}
        )
        assert(result === 'less than 5 seconds')
      })
    })
  })
})
