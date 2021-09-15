/* eslint-env mocha */

import assert from 'assert'
import formatDistance from '.'

describe('formatDistance', function () {
  describe('seconds', function () {
    describe('when the includeSeconds option is true', function () {
      it('less than 5 seconds', function () {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true }
        )
        assert(result === 'less than 5 seconds')
      })

      it('less than 10 seconds', function () {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true }
        )
        assert(result === 'less than 10 seconds')
      })

      it('less than 20 seconds', function () {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true }
        )
        assert(result === 'less than 20 seconds')
      })

      it('half a minute', function () {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true }
        )
        assert(result === 'half a minute')
      })

      it('less than a minute', function () {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true }
        )
        assert(result === 'less than a minute')
      })

      it('1 minute', function () {
        const result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true }
        )
        assert(result === '1 minute')
      })
    })
  })

  describe('minutes', function () {
    it('less than a minute', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 20)
      )
      assert(result === 'less than a minute')
    })

    it('1 minute', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 50)
      )
      assert(result === '1 minute')
    })

    it('n minutes', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 34, 50)
      )
      assert(result === '3 minutes')
    })
  })

  describe('hours', function () {
    it('about 1 hour', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 11, 32, 0)
      )
      assert(result === 'about 1 hour')
    })

    it('about n hours', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 13, 32, 0)
      )
      assert(result === 'about 3 hours')
    })
  })

  describe('days', function () {
    it('1 day', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 5, 10, 32, 0)
      )
      assert(result === '1 day')
    })

    it('n days', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 7, 10, 32, 0)
      )
      assert(result === '3 days')
    })
  })

  describe('months', function () {
    it('about 1 month', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 4, 4, 10, 32, 0)
      )
      assert(result === 'about 1 month')
    })

    it('n months', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 6, 4, 10, 32, 0)
      )
      assert(result === '3 months')
    })
  })

  describe('years', function () {
    it('about 1 year', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 1 year')
    })

    it('over 1 year', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1987, 9, 4, 10, 32, 0)
      )
      assert(result === 'over 1 year')
    })

    it('almost n years', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 2, 4, 10, 32, 0)
      )
      assert(result === 'almost 3 years')
    })

    it('about n years', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 3, 4, 10, 32, 0)
      )
      assert(result === 'about 3 years')
    })

    it('over n years', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1989, 9, 4, 10, 32, 0)
      )
      assert(result === 'over 3 years')
    })
  })

  it('accepts timestamps', function () {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === 'about 1 hour')
  })

  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true }
      )
      assert(result === 'half a minute ago')
    })

    it('adds a future suffix', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true }
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('implicit conversion of options', function () {
    it('`options.includeSeconds`', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 10, 32, 7),
        // @ts-expect-error
        { includeSeconds: 1 }
      )
      assert(result === 'less than 10 seconds')
    })

    it('`options.addSuffix`', function () {
      const result = formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 10, 32, 0),
        // @ts-expect-error
        { addSuffix: 1 }
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      function localizeDistance(token, count, options) {
        assert(token === 'lessThanXSeconds')
        assert(count === 5)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      const customLocale = {
        formatDistance: localizeDistance,
      }

      const result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 3),
        new Date(1986, 3, 4, 10, 32, 0),
        { includeSeconds: true, addSuffix: true, locale: customLocale }
      )

      assert(result === 'It works!')
    })

    describe('does not contain `formatDistance` property', function () {
      it('throws `RangeError`', function () {
        const customLocale = {}
        const block = formatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true, locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  it('throws RangeError if the first date is `Invalid Date`', function () {
    assert.throws(
      formatDistance.bind(null, new Date(NaN), new Date(1986, 3, 7, 10, 32, 0)),
      RangeError
    )
  })

  it('throws RangeError if the second date is `Invalid Date`', function () {
    assert.throws(
      formatDistance.bind(null, new Date(1986, 3, 4, 10, 32, 0), new Date(NaN)),
      RangeError
    )
  })

  it('throws RangeError if the both dates are `Invalid Date`', function () {
    assert.throws(
      formatDistance.bind(null, new Date(NaN), new Date(NaN)),
      RangeError
    )
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(formatDistance.bind(null), TypeError)
    assert.throws(formatDistance.bind(null, 1), TypeError)
  })
})
