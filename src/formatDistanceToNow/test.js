// @flow
/* eslint-env mocha */

import assert from 'power-assert'
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
    context('when the includeSeconds option is true', () => {
      it('less than 5 seconds', () => {
        var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 58), {
          includeSeconds: true
        })
        assert(result === 'less than 5 seconds')
      })

      it('less than 10 seconds', () => {
        var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 52), {
          includeSeconds: true
        })
        assert(result === 'less than 10 seconds')
      })

      it('less than 20 seconds', () => {
        var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 45), {
          includeSeconds: true
        })
        assert(result === 'less than 20 seconds')
      })

      it('half a minute', () => {
        var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
          includeSeconds: true
        })
        assert(result === 'half a minute')
      })

      it('less than a minute', () => {
        var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 15), {
          includeSeconds: true
        })
        assert(result === 'less than a minute')
      })

      it('1 minute', () => {
        var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 0), {
          includeSeconds: true
        })
        assert(result === '1 minute')
      })
    })
  })

  describe('minutes', () => {
    it('less than a minute', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 40))
      assert(result === 'less than a minute')
    })

    it('1 minute', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 10))
      assert(result === '1 minute')
    })

    it('n minutes', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 29, 10))
      assert(result === '3 minutes')
    })
  })

  describe('hours', () => {
    it('about 1 hour', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 9, 32, 0))
      assert(result === 'about 1 hour')
    })

    it('about n hours', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 7, 32, 0))
      assert(result === 'about 3 hours')
    })
  })

  describe('days', () => {
    it('1 day', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 3, 10, 32, 0))
      assert(result === '1 day')
    })

    it('n days', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 1, 10, 32, 0))
      assert(result === '3 days')
    })
  })

  describe('months', () => {
    it('about 1 month', () => {
      var result = formatDistanceToNow(new Date(1986, 2, 4, 10, 32, 0))
      assert(result === 'about 1 month')
    })

    it('n months', () => {
      var result = formatDistanceToNow(new Date(1986, 0, 4, 10, 32, 0))
      assert(result === '3 months')
    })
  })

  describe('years', () => {
    it('about 1 year', () => {
      var result = formatDistanceToNow(new Date(1985, 3, 4, 10, 32, 0))
      assert(result === 'about 1 year')
    })

    it('over 1 year', () => {
      var result = formatDistanceToNow(new Date(1984, 10, 4, 10, 32, 0))
      assert(result === 'over 1 year')
    })

    it('almost n years', () => {
      var result = formatDistanceToNow(new Date(1983, 4, 4, 10, 32, 0))
      assert(result === 'almost 3 years')
    })

    it('about n years', () => {
      var result = formatDistanceToNow(new Date(1983, 3, 4, 10, 32, 0))
      assert(result === 'about 3 years')
    })

    it('over n years', () => {
      var result = formatDistanceToNow(new Date(1982, 10, 4, 10, 32, 0))
      assert(result === 'over 3 years')
    })
  })

  it('accepts a timestamp', () => {
    var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 40).getTime())
    assert(result === 'less than a minute')
  })

  describe('when the addSuffix option is true', () => {
    it('adds a past suffix', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
        includeSeconds: true,
        addSuffix: true
      })
      assert(result === 'half a minute ago')
    })

    it('adds a future suffix', () => {
      var result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true
      })
      assert(result === 'in about 1 hour')
    })
  })

  describe('implicit conversion of options', () => {
    it('`options.includeSeconds`', () => {
      var result = formatDistanceToNow(
        new Date(1986, 3, 4, 10, 31, 52),
        // $ExpectedMistake
        { includeSeconds: 1 }
      )
      assert(result === 'less than 10 seconds')
    })

    it('`options.addSuffix`', () => {
      var result = formatDistanceToNow(
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

      var customLocale = {
        formatDistance: localizeDistance
      }

      var result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
        locale: customLocale
      })

      assert(result === 'It works!')
    })

    context('does not contain `distanceInWords` property', () => {
      it('throws `RangeError`', function() {
        var customLocale = {}
        var block = formatDistanceToNow.bind(
          null,
          new Date(1986, 3, 4, 10, 32, 0),
          // $ExpectedMistake
          { includeSeconds: true, locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  it('throws RangeError if the passed date is `Invalid Date`', function() {
    assert.throws(formatDistanceToNow.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(formatDistanceToNow.bind(null), TypeError)
  })
})
