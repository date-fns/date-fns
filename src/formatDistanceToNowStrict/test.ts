/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import { FormatDistanceFn } from '../locale/types'
import formatDistanceToNowStrict from '.'

describe('formatDistanceToNowStrict', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(1986, 3, 4, 10, 32, 0).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  describe('seconds', () => {
    describe('when no unit is set', () => {
      it('0 seconds', () => {
        var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 32, 0))
        assert(result === '0 seconds')
      })

      it('5 seconds', () => {
        var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 32, 5))
        assert(result === '5 seconds')
      })
    })
  })

  describe('minutes', () => {
    it('1 minute', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 0))
      assert(result === '1 minute')
    })

    it('n minutes', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 35, 0))
      assert(result === '3 minutes')
    })
  })

  describe('hours', () => {
    it('1 hour', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 11, 32, 0))
      assert(result === '1 hour')
    })

    it('n hours', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 13, 32, 0))
      assert(result === '3 hours')
    })
  })

  describe('days', () => {
    it('1 day', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 5, 10, 32, 0))
      assert(result === '1 day')
    })

    it('n days', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 7, 10, 32, 0))
      assert(result === '3 days')
    })
  })

  describe('months', () => {
    it('1 month', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 4, 4, 10, 32, 0))
      assert(result === '1 month')
    })

    it('n months', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 6, 4, 10, 32, 0))
      assert(result === '3 months')
    })
  })

  describe('years', () => {
    it('1 year', () => {
      var result = formatDistanceToNowStrict(new Date(1987, 3, 4, 10, 32, 0))
      assert(result === '1 year')
    })

    it('n years', () => {
      var result = formatDistanceToNowStrict(new Date(1991, 3, 4, 10, 32, 0))
      assert(result === '5 years')
    })
  })

  describe('when the unit option is supplied', () => {
    describe('second', () => {
      it('0 seconds', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'second' }
        )
        assert(result === '0 seconds')
      })

      it('5 seconds', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 5),
          { unit: 'second' }
        )
        assert(result === '5 seconds')
      })

      it('120 seconds', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 34, 0),
          { unit: 'second' }
        )
        assert(result === '120 seconds')
      })
    })

    describe('minute', () => {
      it('0 minutes', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'minute' }
        )
        assert(result === '0 minutes')
      })

      it('5 minutes', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 37, 0),
          { unit: 'minute' }
        )
        assert(result === '5 minutes')
      })

      it('120 minutes', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 12, 32, 0),
          { unit: 'minute' }
        )
        assert(result === '120 minutes')
      })
    })

    describe('hour', () => {
      it('0 hours', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'hour' }
        )
        assert(result === '0 hours')
      })

      it('5 hours', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 15, 32, 0),
          { unit: 'hour' }
        )
        assert(result === '5 hours')
      })

      it('48 hours', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 6, 10, 32, 0),
          { unit: 'hour' }
        )
        assert(result === '48 hours')
      })
    })

    describe('day', () => {
      it('0 days', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'day' }
        )
        assert(result === '0 days')
      })

      it('5 days', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 9, 10, 32, 0),
          { unit: 'day' }
        )
        assert(result === '5 days')
      })

      it('60 days', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 5, 3, 10, 32, 0),
          { unit: 'day' }
        )
        assert(result === '60 days')
      })
    })
    describe('month', () => {
      it('0 months', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'month' }
        )
        assert(result === '0 months')
      })

      it('5 months', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 7, 4, 10, 32, 0),
          { unit: 'month' }
        )
        assert(result === '4 months')
      })

      it('24 months', () => {
        var result = formatDistanceToNowStrict(
          new Date(1988, 3, 4, 10, 32, 0),
          { unit: 'month' }
        )
        assert(result === '24 months')
      })
    })

    describe('year', () => {
      it('returns `1 year` - see issue 2388', () => {
        const result = formatDistanceToNowStrict(
          new Date(1985, 3, 4, 10, 32, 0)
        )
        assert(result === '1 year')
      })

      it('returns `2 years` - see issue 2388', () => {
        const result = formatDistanceToNowStrict(
          new Date(1984, 3, 4, 10, 32, 0)
        )
        assert(result === '2 years')
      })

      it('0 years', () => {
        var result = formatDistanceToNowStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'year' }
        )
        assert(result === '0 years')
      })

      it('5 years', () => {
        var result = formatDistanceToNowStrict(
          new Date(1991, 3, 4, 15, 32, 0),
          { unit: 'year' }
        )
        assert(result === '5 years')
      })
    })
  })

  it('accepts timestamps', () => {
    var result = formatDistanceToNowStrict(
      new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === '1 hour')
  })

  describe('when the addSuffix option is true', () => {
    it('adds a past suffix', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 31, 35), {
        addSuffix: true,
      })
      assert(result === '25 seconds ago')
    })

    it('adds a future suffix', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
      })
      assert(result === 'in 1 hour')
    })
  })

  describe('when the roundingMethod option is supplied', () => {
    it('default is "round"', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 59))
      assert(result === '2 minutes')
    })

    it('"floor"', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 59), {
        roundingMethod: 'floor',
      })
      assert(result === '1 minute')
    })

    it('"ceil"', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 1), {
        roundingMethod: 'ceil',
      })
      assert(result === '2 minutes')
    })

    it('"round" (down)', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 29), {
        roundingMethod: 'round',
      })
      assert(result === '1 minute')
    })

    it('"round" (up)', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 30), {
        roundingMethod: 'round',
      })
      assert(result === '2 minutes')
    })
  })

  describe('implicit conversion of options', () => {
    it('`options.unit`', () => {
      // eslint-disable-next-line no-new-wrappers
      var unit = new String('year')

      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 32, 0), {
        // @ts-expect-error
        unit: unit,
      })
      assert(result === '0 years')
    })

    it('`options.addSuffix`', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 31, 35), {
        // @ts-expect-error
        addSuffix: 1,
      })
      assert(result === '25 seconds ago')
    })

    it('`options.ceil`', () => {
      // eslint-disable-next-line no-new-wrappers
      var roundingMethod = new String('ceil')

      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 1), {
        // @ts-expect-error
        roundingMethod: roundingMethod,
      })
      assert(result === '2 minutes')
    })
  })

  describe('custom locale', () => {
    it('can be passed to the function', () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        assert(token === 'xSeconds')
        assert(count === 15)
        assert(options!.addSuffix === true)
        assert(options!.comparison! < 0)
        return 'It works!'
      }

      var customLocale = {
        formatDistance: localizeDistance,
      }

      var result = formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 31, 45), {
        addSuffix: true,
        locale: customLocale,
      })

      assert(result === 'It works!')
    })

    describe('does not contain `formatDistance` property', () => {
      it('throws `RangeError`', () => {
        var customLocale = {}
        var block = formatDistanceToNowStrict.bind(
          null,
          new Date(1986, 3, 4, 10, 37, 0),
          { unit: 'minute', locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  describe('edge cases', () => {
    it('detects unit correctly for short months', () => {
      var result = formatDistanceToNowStrict(new Date(1986, 2 /* Mar */, 7))
      assert(result === '28 days')
    })
  })

  it('throws `RangeError` if the date is `Invalid Date`', () => {
    assert.throws(
      formatDistanceToNowStrict.bind(null, new Date(NaN)),
      RangeError
    )
  })

  it("throws `RangeError` if `options.roundingMethod` is not 'floor', 'ceil', 'round' or undefined", () => {
    var block = () =>
      formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 29), {
        // @ts-expect-error
        roundingMethod: 'foobar',
      })
    assert.throws(block, RangeError)
  })

  it("throws `RangeError` if `options.unit` is not 's', 'm', 'h', 'd', 'M', 'Y' or undefined", () => {
    var block = () =>
      formatDistanceToNowStrict(new Date(1986, 3, 4, 10, 33, 29), {
        // @ts-expect-error
        unit: 'foobar',
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 arguments', () => {
    // @ts-expect-error
    assert.throws(formatDistanceToNowStrict.bind(null), TypeError)
  })
})
