// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import toDate from '.'

describe('toDate', () => {
  describe('date argument', () => {
    it('returns a clone of the given date', () => {
      const date = new Date(2016, 0, 1)
      const dateClone = toDate(date)
      dateClone.setFullYear(2015)
      assert.deepEqual(date, new Date(2016, 0, 1))
    })
  })

  describe('timestamp argument', () => {
    it('creates a date from the timestamp', () => {
      const timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime()
      const result = toDate(timestamp)
      assert.deepEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123))
    })
  })

  describe('string argument', () => {
    describe('centuries', () => {
      it('parses YY', () => {
        const result = toDate('20')
        assert.deepEqual(result, new Date(2000, 0 /* Jan */, 1))
      })
    })

    describe('years', () => {
      it('parses YYYY', () => {
        const result = toDate('2014')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
      })
    })

    describe('months', () => {
      it('parses YYYY-MM', () => {
        const result = toDate('2014-02')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
      })
    })

    describe('weeks', () => {
      it('parses YYYY-Www', () => {
        const result = toDate('2014-W02')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 6))
      })

      it('parses YYYYWww', () => {
        const result = toDate('2014W02')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 6))
      })
    })

    describe('calendar dates', () => {
      it('parses YYYY-MM-DD', () => {
        const result = toDate('2014-02-11')
        assert.deepEqual(result, new Date(2014, 1, /* Feb */ 11))
      })

      it('parses YYYYMMDD', () => {
        const result = toDate('20140211')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11))
      })
    })

    describe('week dates', () => {
      it('parses YYYY-Www-D', () => {
        const result = toDate('2014-W02-7')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 12))
      })

      it('parses YYYYWwwD', () => {
        const result = toDate('2014W027')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 12))
      })

      it('correctly handles years in which 4 January is Sunday', () => {
        const result = toDate('2009-W01-1')
        assert.deepEqual(result, new Date(2008, 11 /* Dec */, 29))
      })
    })

    describe('ordinal dates', () => {
      it('parses YYYY-DDD', () => {
        const result = toDate('2014-026')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 26))
      })

      it('parses YYYYDDD', () => {
        const result = toDate('2014026')
        assert.deepEqual(result, new Date(2014, 0 /* Jan */, 26))
      })
    })

    describe('date and time combined', () => {
      it('parses YYYY-MM-DDThh:mm', () => {
        const result = toDate('2014-02-11T11:30')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })

      it('parses YYYY-MM-DDThhmm', () => {
        const result = toDate('2014-02-11T1130')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })

      it('parses 24:00 as midnight', () => {
        const result = toDate('2014-02-11T2400')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 0, 0))
      })
    })

    describe('extended century representation', () => {
      it('parses century 101 BC - 2 BC', () => {
        const result = toDate('-0001')
        const date = new Date(-100, 0 /* Jan */, 1)
        date.setFullYear(-100)
        assert.deepEqual(result, date)
      })

      it('parses century 1 BC - 99 AD', () => {
        const result = toDate('00')
        const date = new Date(0, 0 /* Jan */, 1)
        date.setFullYear(0)
        assert.deepEqual(result, date)
      })

      it('parses centuries after 9999 AD', () => {
        const result = toDate('+0123')
        assert.deepEqual(result, new Date(12300, 0 /* Jan */, 1))
      })

      it('allows to specify the number of additional digits', () => {
        const result = toDate('-20', { additionalDigits: 0 })
        const date = new Date(-2000, 0 /* Jan */, 1)
        date.setFullYear(-2000)
        assert.deepEqual(result, date)
      })
    })

    describe('extended year representation', () => {
      it('correctly parses years from 1 AD to 99 AD', () => {
        const result = toDate('0095-07-02')
        const date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(95)
        assert.deepEqual(result, date)
      })

      it('parses years after 9999 AD', () => {
        const result = toDate('+012345-07-02')
        assert.deepEqual(result, new Date(12345, 6 /* Jul */, 2))
      })

      it('allows to specify the number of additional digits', () => {
        const result = toDate('+12340702', { additionalDigits: 0 })
        assert.deepEqual(result, new Date(1234, 6 /* Jul */, 2))
      })

      it('parses year 1 BC', () => {
        const result = toDate('0000-07-02')
        const date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(0)
        assert.deepEqual(result, date)
      })

      it('parses years less than 1 BC', () => {
        const result = toDate('-000001-07-02')
        const date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(-1)
        assert.deepEqual(result, date)
      })
    })

    describe('float time', () => {
      it('parses float hours', () => {
        const result = toDate('2014-02-11T11.5')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })

      it('parses float minutes', () => {
        const result = toDate('2014-02-11T11:30.5')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30, 30))
      })

      it('parses float seconds', () => {
        const result = toDate('2014-02-11T11:30:30.768')
        assert.deepEqual(
          result,
          new Date(2014, 1 /* Feb */, 11, 11, 30, 30, 768)
        )
      })

      it('parses , as decimal mark', () => {
        const result = toDate('2014-02-11T11,5')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 11, 30))
      })
    })

    describe('timezones', () => {
      context('when the date and the time are specified', () => {
        it('parses Z', () => {
          const result = toDate('2014-10-25T06:46:20Z')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })

        it('parses ±hh:mm', () => {
          const result = toDate('2014-10-25T13:46:20+07:00')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })

        it('parses ±hhmm', () => {
          const result = toDate('2014-10-25T03:46:20-0300')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })

        it('parses ±hh', () => {
          const result = toDate('2014-10-25T13:46:20+07')
          assert.deepEqual(result, new Date('2014-10-25T13:46:20+07:00'))
        })
      })
      context('when the year and the month are specified', () => {
        it('sets timezone correctly on yyyy-MMZ format', () => {
          const result = toDate('2012-01Z')
          assert.deepEqual(result, new Date('2012-01-01T00:00:00+00:00'))
        })
      })
    })

    describe('failure', () => {
      it('returns `Invalid Date` if the string is not an ISO formatted date', () => {
        const result = toDate(new Date(2014, 8 /* Sep */, 1, 11).toString())
        assert(result instanceof Date)
        assert(isNaN(result))
      })
    })
  })

  describe('validation', () => {
    describe('months', () => {
      it('returns `Invalid Date` for invalid month', () => {
        const result = toDate('2014-00')
        assert(result instanceof Date)
        assert(isNaN(result))
      })
    })

    describe('weeks', () => {
      it('returns `Invalid Date` for invalid week', () => {
        const result = toDate('2014-W00')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for 54th week', () => {
        const result = toDate('2014-W54')
        assert(result instanceof Date)
        assert(isNaN(result))
      })
    })

    describe('calendar dates', () => {
      it('returns `Invalid Date` for invalid day of the month', () => {
        const result = toDate('2012-02-30')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for 29th of February of non-leap year', () => {
        const result = toDate('2014-02-29')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('parses 29th of February of leap year', () => {
        const result = toDate('2012-02-29')
        assert.deepEqual(result, new Date(2012, 1, /* Feb */ 29))
      })
    })

    describe('week dates', () => {
      it('returns `Invalid Date` for invalid day of the week', () => {
        const result = toDate('2014-W02-0')
        assert(result instanceof Date)
        assert(isNaN(result))
      })
    })

    describe('ordinal dates', () => {
      it('returns `Invalid Date` for invalid day of the year', () => {
        const result = toDate('2012-000')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for 366th day of non-leap year', () => {
        const result = toDate('2014-366')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('parses 366th day of leap year', () => {
        const result = toDate('2012-366')
        assert.deepEqual(result, new Date(2012, 11, /* Dec */ 31))
      })
    })

    describe('time', () => {
      it('parses 24:00 as midnight', () => {
        const result = toDate('2014-02-11T24:00')
        assert.deepEqual(result, new Date(2014, 1 /* Feb */, 11, 0, 0))
      })

      it('returns `Invalid Date` for invalid hours', () => {
        const result = toDate('2014-02-11T25')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for invalid minutes', () => {
        const result = toDate('2014-02-11T21:60')
        assert(result instanceof Date)
        assert(isNaN(result))
      })

      it('returns `Invalid Date` for invalid seconds', () => {
        const result = toDate('2014-02-11T21:59:60')
        assert(result instanceof Date)
        assert(isNaN(result))
      })
    })

    describe('timezones', () => {
      it('returns `Invalid Date` for invalid timezone minutes', () => {
        const result = toDate('2014-02-11T21:35:45+04:60')
        assert(result instanceof Date)
        assert(isNaN(result))
      })
    })
  })

  describe('invalid argument', () => {
    it('returns Invalid Date if argument is non-date string', () => {
      const result = toDate('abc')
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is NaN', () => {
      const result = toDate(NaN)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is Invalid Date', () => {
      const result = toDate(new Date(NaN))
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is null', () => {
      // $ExpectedMistake
      const result = toDate(null)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is undefined', () => {
      // $ExpectedMistake
      const result = toDate(undefined)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is false', () => {
      // $ExpectedMistake
      const result = toDate(false)
      assert(result instanceof Date)
      assert(isNaN(result))
    })

    it('returns Invalid Date if argument is true', () => {
      // $ExpectedMistake
      const result = toDate(true)
      assert(result instanceof Date)
      assert(isNaN(result))
    })
  })

  describe('argument conversion', () => {
    it('implicitly converts instance of Number into a number', () => {
      // eslint-disable-next-line no-new-wrappers
      const timestamp = new Number(
        new Date(2016, 0, 1, 23, 30, 45, 123).getTime()
      )
      // $ExpectedMistake
      const result = toDate(timestamp)
      assert.deepEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123))
    })

    it('implicitly converts instance of String into a string', () => {
      // eslint-disable-next-line no-new-wrappers
      const dateString = new String('2014-02-11')
      // $ExpectedMistake
      const result = toDate(dateString)
      assert.deepEqual(result, new Date(2014, 1, /* Feb */ 11))
    })

    it('implicitly converts options', () => {
      // $ExpectedMistake
      const result = toDate('+12340702', { additionalDigits: '0' })
      assert.deepEqual(result, new Date(1234, 6 /* Jul */, 2))
    })

    it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', () => {
      // $ExpectedMistake
      const block = toDate.bind(null, '+12340702', { additionalDigits: 3 })
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(toDate.bind(null), TypeError)
  })
})
