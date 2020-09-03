// @flow
/* eslint-env mocha */
import assert from 'assert'

import parseISO from '.'


describe('parseISO', () => {
  describe('string argument', () => {
    describe('centuries', () => {
      it('parses YY', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('20')
        assert.deepEqual(result, new Date(2000, 0 /* Jan */, 1))
      })
    })

    describe('years', () => {
      it('parses YYYY', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
      })
    })

    describe('months', () => {
      it('parses YYYY-MM', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
      })
    })

    describe('weeks', () => {
      it('parses YYYY-Www', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-W02')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 6))
      })

      it('parses YYYYWww', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014W02')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 6))
      })
    })

    describe('calendar dates', () => {
      it('parses YYYY-MM-DD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11')
        assert.deepEqual(result, new Date(2014, 1, /* Feb */ 11))
      })

      it('parses YYYYMMDD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('20140211')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11))
      })
    })

    describe('week dates', () => {
      it('parses YYYY-Www-D', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-W02-7')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 12))
      })

      it('parses YYYYWwwD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014W027')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 12))
      })

      it('correctly handles years in which 4 January is Sunday', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2009-W01-1')
        assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29))
      })
    })

    describe('ordinal dates', () => {
      it('parses YYYY-DDD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-026')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 26))
      })

      it('parses YYYYDDD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014026')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 26))
      })
    })

    describe('date and time combined', () => {
      it('parses YYYY-MM-DDThh:mm', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T11:30')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })

      it('parses YYYY-MM-DDThhmm', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T1130')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })
    })

    describe('extended century representation', () => {
      it('parses century 101 BC - 2 BC', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('-0001')
        const date = new Date(-100, 0 /* Jan */, 1)
        date.setFullYear(-100)
        assert.deepEqual(result, date)
      })

      it('parses century 1 BC - 99 AD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('00')
        const date = new Date(0, 0 /* Jan */, 1)
        date.setFullYear(0)
        assert.deepEqual(result, date)
      })

      it('parses centuries after 9999 AD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('+0123')
        assert.deepEqual(result, new Date(12300, 0 /* Jan */, 1))
      })

      it('allows to specify the number of additional digits', () => {
        const result = parseISO('-20', { additionalDigits: 0 })
        const date = new Date(-2000, 0 /* Jan */, 1)
        date.setFullYear(-2000)
        assert.deepEqual(result, date)
      })
    })

    describe('extended year representation', () => {
      it('correctly parses years from 1 AD to 99 AD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('0095-07-02')
        const date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(95)
        assert.deepEqual(result, date)
      })

      it('parses years after 9999 AD', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('+012345-07-02')
        assert.deepEqual(result, new Date(12345, 6 /* Jul */, 2))
      })

      it('allows to specify the number of additional digits', () => {
        const result = parseISO('+12340702', { additionalDigits: 0 })
        assert.deepEqual(result, new Date(1234, 6 /* Jul */, 2))
      })

      it('parses year 1 BC', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('0000-07-02')
        const date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(0)
        assert.deepEqual(result, date)
      })

      it('parses years less than 1 BC', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('-000001-07-02')
        const date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(-1)
        assert.deepEqual(result, date)
      })
    })

    describe('float time', () => {
      it('parses float hours', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T11.5')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })

      it('parses float minutes', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T11:30.5')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30, 30))
      })

      it('parses float seconds', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T11:30:30.768')
        assert.deepEqual(
          result,
          new Date(2014, 1 /* Feb */, 11, 11, 30, 30, 768)
        )
      })

      it('parses , as decimal mark', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T11,5')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })
    })

    describe('timezones', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
      context('when the date and the time are specified', () => {
        it('parses Z', () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          const result = parseISO('2014-10-25T06:46:20Z')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })

        it('parses ±hh:mm', () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          const result = parseISO('2014-10-25T13:46:20+07:00')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })

        it('parses ±hhmm', () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          const result = parseISO('2014-10-25T03:46:20-0300')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })

        it('parses ±hh', () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          const result = parseISO('2014-10-25T13:46:20+07')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })
      })
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'context'.
      context('when the year and the month are specified', () => {
        it('sets timezone correctly on yyyy-MMZ format', () => {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          const result = parseISO('2012-01Z')
          assert.deepEqual(result, new Date('2012-01-01T00:00:00+00:00'))
        })
      })
    })

    describe('failure', () => {
      it('returns `Invalid Date` if the string is not an ISO formatted date', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO(new Date(2014, 8 /* Sep */, 1, 11).toString())
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })
  })

  describe('validation', () => {
    describe('months', () => {
      it('returns `Invalid Date` for invalid month', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-00')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })

    describe('weeks', () => {
      it('returns `Invalid Date` for invalid week', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-W00')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for 54th week', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-W54')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })

    describe('calendar dates', () => {
      it('returns `Invalid Date` for invalid day of the month', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2012-02-30')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for 29th of February of non-leap year', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-29')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('parses 29th of February of leap year', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2012-02-29')
        assert.deepEqual(result, new Date(2012, 1, /* Feb */ 29))
      })
    })

    describe('week dates', () => {
      it('returns `Invalid Date` for invalid day of the week', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-W02-0')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })

    describe('ordinal dates', () => {
      it('returns `Invalid Date` for invalid day of the year', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2012-000')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for 366th day of non-leap year', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-366')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('parses 366th day of leap year', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2012-366')
        assert.deepEqual(result, new Date(2012, 11, /* Dec */ 31))
      })
    })

    describe('date', () => {
      it('returns `Invalid Date` when it contains spaces after the date', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11  basketball')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })

    describe('time', () => {
      it('parses 24:00 as midnight of the next day', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T24:00')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 12, 0, 0))
      })

      it('returns `Invalid Date` for anything after 24:00', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T24:01')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for invalid hours', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T25')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for invalid minutes', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T21:60')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for invalid seconds', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T21:59:60')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for invalid time', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T21:basketball')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })

      it('returns `Invalid Date` when it contains spaces after the time', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T21:59:00  basketball')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })

    describe('timezones', () => {
      it('returns `Invalid Date` for invalid timezone minutes', () => {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
        const result = parseISO('2014-02-11T21:35:45+04:60')
        assert(result instanceof Date)
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
        assert(isNaN(result))
      })
    })
  })

  describe('invalid argument', () => {
    it('returns Invalid Date for date argument', () => {
      // $ExpectedMistake
      const date = new Date(2016, 0, 1)
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(date)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date for timestamp argument', () => {
      const timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime()
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(timestamp)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is non-date string', () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO('abc')
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is non-date string containing a colon', () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO('00:00')
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is NaN', () => {
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(NaN)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is Invalid Date', () => {
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(new Date(NaN))
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is null', () => {
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(null)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is undefined', () => {
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(undefined)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is false', () => {
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(false)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is true', () => {
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(true)
      assert(result instanceof Date)
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
      assert(isNaN(result))
    })
  })

  describe('argument conversion', () => {
    it('implicitly converts instance of String into a string', () => {
      // eslint-disable-next-line no-new-wrappers
      const dateString = new String('2014-02-11')
      // $ExpectedMistake
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const result = parseISO(dateString)
      assert.deepEqual(result, new Date(2014, 1, /* Feb */ 11))
    })

    it('implicitly converts options', () => {
      // $ExpectedMistake
      const result = parseISO('+12340702', { additionalDigits: '0' })
      assert.deepEqual(result, new Date(1234, 6 /* Jul */, 2))
    })

    it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', () => {
      // $ExpectedMistake
      const block = parseISO.bind(null, '+12340702', { additionalDigits: 3 })
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(parseISO.bind(null), TypeError)
  })
})
