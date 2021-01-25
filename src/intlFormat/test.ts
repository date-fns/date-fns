// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import intlFormat from '.'

describe('intlFormat', () => {
  describe('formats date', function () {
    it("should work without format's options and locale's options", function () {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)

      const result = intlFormat(date)

      assert(result === '04/10/2019')
    })

    it("should work with only format's options", function () {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const formatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'America/Los_Angeles',
      }

      const result = intlFormat(date, formatOptions)

      assert(result === '04/10/2019, 02:30:13')
    })

    it("should work with only locale's options", function () {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      // Korean uses year-month-day order
      const localeOptions = {
        locale: 'ko-KR',
      }

      const result = intlFormat(date, localeOptions)

      assert(result === '2019. 10. 4.')
    })

    it("should work with format's options and locale's options", function () {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const formatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const localeOptions = {
        locale: 'de-DE',
      }

      const result = intlFormat(date, formatOptions, localeOptions)

      assert(result === 'Freitag, 4. Oktober 2019')
    })
  })

  it('throws RangeError if the date value is invalid', () => {
    assert.throws(intlFormat.bind(null, new Date(NaN)), RangeError)
  })
})
