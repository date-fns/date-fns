// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('formatDistance', function () {
  describe('seconds', function () {
    context('when the includeSeconds option is true', function () {
      it('less than 5 seconds', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          {includeSeconds: true}
        )
        assert(result === 'less than 5 seconds')
      })

      it('less than 10 seconds', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7),
          {includeSeconds: true}
        )
        assert(result === 'less than 10 seconds')
      })

      it('less than 20 seconds', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15),
          {includeSeconds: true}
        )
        assert(result === 'less than 20 seconds')
      })

      it('half a minute', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          {includeSeconds: true}
        )
        assert(result === 'half a minute')
      })

      it('less than a minute', function () {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45),
          {includeSeconds: true}
        )
        assert(result === 'less than a minute')
      })

      it('1 minute', function () {
        var result = formatDistance(
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
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20)
      )
      assert(result === 'less than a minute')
    })

    it('1 minute', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50)
      )
      assert(result === '1 minute')
    })

    it('n minutes', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50)
      )
      assert(result === '3 minutes')
    })
  })

  describe('hours', function () {
    it('about 1 hour', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0)
      )
      assert(result === 'about 1 hour')
    })

    it('about n hours', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0)
      )
      assert(result === 'about 3 hours')
    })
  })

  describe('days', function () {
    it('1 day', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0)
      )
      assert(result === '1 day')
    })

    it('n days', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0)
      )
      assert(result === '3 days')
    })
  })

  describe('months', function () {
    it('about 1 month', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0)
      )
      assert(result === 'about 1 month')
    })

    it('n months', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0)
      )
      assert(result === '3 months')
    })
  })

  describe('years', function () {
    it('about 1 year', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 1 year')
    })

    it('over 1 year', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0)
      )
      assert(result === 'over 1 year')
    })

    it('almost n years', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0)
      )
      assert(result === 'almost 3 years')
    })

    it('about n years', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 3 years')
    })

    it('over n years', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0)
      )
      assert(result === 'over 3 years')
    })
  })

  it('accepts strings', function () {
    var result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0).toISOString(),
      new Date(1986, 3, 4, 11, 32, 0).toISOString()
    )
    assert(result === 'about 1 hour')
  })

  it('accepts timestamps', function () {
    var result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === 'about 1 hour')
  })

  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        {includeSeconds: true, addSuffix: true}
      )
      assert(result === 'half a minute ago')
    })

    it('adds a future suffix', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        {addSuffix: true}
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('implicit conversion of options', function () {
    it('`options.includeSeconds`', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 7),
        // $ExpectedMistake
        {includeSeconds: 1}
      )
      assert(result === 'less than 10 seconds')
    })

    it('`options.addSuffix`', function () {
      var result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        {addSuffix: 1}
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      function localizeDistance (token, count, options) {
        assert(token === 'lessThanXSeconds')
        assert(count === 5)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      var customLocale = {
        formatDistance: localizeDistance
      }

      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 3),
        new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        {includeSeconds: true, addSuffix: true, locale: customLocale}
      )

      assert(result === 'It works!')
    })

    context('does not contain `formatDistance` property', function () {
      it('throws `RangeError`', function () {
        var customLocale = {}
        var block = formatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          // $ExpectedMistake
          {includeSeconds: true, locale: customLocale}
        )
        assert.throws(block, RangeError)
      })
    })
  })

  it("returns String('Invalid Date') if the first date is `Invalid Date`", function () {
    var result = formatDistance(
      new Date(NaN),
      new Date(1986, 3, 7, 10, 32, 0)
    )
    assert(result === 'Invalid Date')
  })

  it("returns String('Invalid Date') if the second date is `Invalid Date`", function () {
    var result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0),
      new Date(NaN)
    )
    assert(result === 'Invalid Date')
  })

  it("returns String('Invalid Date') if the both dates are `Invalid Date`", function () {
    var result = formatDistance(
      new Date(NaN),
      new Date(NaN)
    )
    assert(result === 'Invalid Date')
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = formatDistance.bind(
      this,
      new Date(1986, 3, 4, 10, 32, 0),
      new Date(1986, 3, 4, 10, 32, 3),
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(formatDistance.bind(null), TypeError)
    assert.throws(formatDistance.bind(null, 1), TypeError)
  })
})
