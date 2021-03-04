// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import formatDistanceToNow from '.'

describe('formatDistanceToNow', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(1986, 3, 4, 10, 32, 0).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  describe('seconds', () => {
    describe('when the includeSeconds option is true', () => {
      it('less than 5 seconds', () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 58), {
          includeSeconds: true,
        })
        assert(result === 'less than 5 seconds')
      })

      it('less than 10 seconds', () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 52), {
          includeSeconds: true,
        })
        assert(result === 'less than 10 seconds')
      })

      it('less than 20 seconds', () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 45), {
          includeSeconds: true,
        })
        assert(result === 'less than 20 seconds')
      })

      it('half a minute', () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
          includeSeconds: true,
        })
        assert(result === 'half a minute')
      })

      it('less than a minute', () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 15), {
          includeSeconds: true,
        })
        assert(result === 'less than a minute')
      })

      it('1 minute', () => {
        const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 0), {
          includeSeconds: true,
        })
        assert(result === '1 minute')
      })
    })
  })

  describe('minutes', () => {
    it('less than a minute', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 40))
      assert(result === 'less than a minute')
    })

    it('1 minute', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 10))
      assert(result === '1 minute')
    })

    it('n minutes', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 29, 10))
      assert(result === '3 minutes')
    })
  })

  describe('hours', () => {
    it('about 1 hour', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 9, 32, 0))
      assert(result === 'about 1 hour')
    })

    it('about n hours', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 7, 32, 0))
      assert(result === 'about 3 hours')
    })
  })

  describe('days', () => {
    it('1 day', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 3, 10, 32, 0))
      assert(result === '1 day')
    })

    it('n days', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 1, 10, 32, 0))
      assert(result === '3 days')
    })
  })

  describe('months', () => {
    it('about 1 month', () => {
      const result = formatDistanceToNow(new Date(1986, 2, 4, 10, 32, 0))
      assert(result === 'about 1 month')
    })

    it('n months', () => {
      const result = formatDistanceToNow(new Date(1986, 0, 4, 10, 32, 0))
      assert(result === '3 months')
    })
  })

  describe('years', () => {
    it('about 1 year', () => {
      const result = formatDistanceToNow(new Date(1985, 3, 4, 10, 32, 0))
      assert(result === 'about 1 year')
    })

    it('over 1 year', () => {
      const result = formatDistanceToNow(new Date(1984, 10, 4, 10, 32, 0))
      assert(result === 'over 1 year')
    })

    it('almost n years', () => {
      const result = formatDistanceToNow(new Date(1983, 4, 4, 10, 32, 0))
      assert(result === 'almost 3 years')
    })

    it('about n years', () => {
      const result = formatDistanceToNow(new Date(1983, 3, 4, 10, 32, 0))
      assert(result === 'about 3 years')
    })

    it('over n years', () => {
      const result = formatDistanceToNow(new Date(1982, 10, 4, 10, 32, 0))
      assert(result === 'over 3 years')
    })
  })

  it('accepts a timestamp', () => {
    const result = formatDistanceToNow(
      new Date(1986, 3, 4, 10, 31, 40).getTime()
    )
    assert(result === 'less than a minute')
  })

  describe('when the addSuffix option is true', () => {
    it('adds a past suffix', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
        includeSeconds: true,
        addSuffix: true,
      })
      assert(result === 'half a minute ago')
    })

    it('adds a future suffix', () => {
      const result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
      })
      assert(result === 'in about 1 hour')
    })
  })

  describe('implicit conversion of options', () => {
    it('`options.includeSeconds`', () => {
      const result = formatDistanceToNow(
        new Date(1986, 3, 4, 10, 31, 52),
        // $ExpectedMistake
        { includeSeconds: 1 }
      )
      assert(result === 'less than 10 seconds')
    })

    it('`options.addSuffix`', () => {
      const result = formatDistanceToNow(
        new Date(1986, 3, 4, 11, 32, 0),
        // $ExpectedMistake
        { addSuffix: 1 }
      )
      assert(result === 'in about 1 hour')
    })
  })

  describe('custom locale', () => {
    it('can be passed to the function', () => {
      function localizeDistance(token, count, options) {
        assert(token === 'aboutXHours')
        assert(count === 1)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      const customLocale = {
        formatDistance: localizeDistance,
      }

      const result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
        // $ExpectedMistake
        locale: customLocale,
      })

      assert(result === 'It works!')
    })

    describe('does not contain `distanceInWords` property', () => {
      it('throws `RangeError`', function () {
        const customLocale = {}
        const block = formatDistanceToNow.bind(
          null,
          // $ExpectedMistake
          new Date(1986, 3, 4, 10, 32, 0),
          { includeSeconds: true, locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  it('throws RangeError if the passed date is `Invalid Date`', function () {
    assert.throws(formatDistanceToNow.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(formatDistanceToNow.bind(null), TypeError)
  })
})
