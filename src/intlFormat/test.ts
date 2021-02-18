// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import intlFormat from '.'

// Before Node version 13.0.0, only the locale data for en-US is available by default.
const hasFullICU = () => {
  try {
    const january = new Date(9e8)
    const spanish = new Intl.DateTimeFormat('es', { month: 'long' })
    return spanish.format(january) === 'enero'
  } catch (err) {
    return false
  }
}

const fullICUOnly = hasFullICU() ? it : it.skip

const getOperationSystemLocale = () => {
  if (typeof process !== 'undefined') {
    const ENV = process.env
    const language = ENV.LC_ALL || ENV.LC_MESSAGES || ENV.LANG || ENV.LANGUAGE
    return language?.split('.')[0].replace('_', '-')
  } else {
    return (
      // @ts-expect-error
      window.navigator.userLanguage ||
      window.navigator.language ||
      (window.navigator.languages || [])[0]
    )
  }
}

describe('intlFormat', () => {
  describe('formats date', function () {
    fullICUOnly(
      "should work without format's options and locale's options",
      function () {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
        const result = intlFormat(date)
        const localeResult = intlFormat(date, {
          locale: getOperationSystemLocale(),
        })

        assert(result === localeResult)
      }
    )

    fullICUOnly("should work with only format's options", function () {
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
      const localeResult = intlFormat(date, formatOptions, {
        locale: getOperationSystemLocale(),
      })

      assert(result === localeResult)
    })

    fullICUOnly("should work with only locale's options", function () {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      // Korean uses year-month-day order
      const localeOptions = {
        locale: 'ko-KR',
      }

      const result = intlFormat(date, localeOptions)

      assert(result === '2019. 10. 4.')
    })

    fullICUOnly(
      "should work with format's options and locale's options",
      function () {
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
      }
    )
  })

  it('throws RangeError if the date value is invalid', () => {
    assert.throws(intlFormat.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(intlFormat.bind(null), TypeError)
  })
})
