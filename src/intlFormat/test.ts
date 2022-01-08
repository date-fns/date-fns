/* eslint-env mocha */

import assert from 'assert'
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
  // https://stackoverflow.com/questions/46072248/node-js-how-to-detect-user-language/46072415
  return Intl.DateTimeFormat().resolvedOptions().locale
}

describe('intlFormat', () => {
  describe('formats date', () => {
    fullICUOnly(
      "should work without format's options and locale's options",
      () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
        const result = intlFormat(date)
        const localeResult = intlFormat(date, {
          locale: getOperationSystemLocale(),
        })

        assert(result === localeResult)
      }
    )

    fullICUOnly("should work with only format's options", () => {
      const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
      const formatOptions: Intl.DateTimeFormatOptions = {
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

    fullICUOnly("should work with only locale's options", () => {
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
      () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456)
        const formatOptions: Intl.DateTimeFormatOptions = {
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
    assert.throws(() => intlFormat(new Date(NaN)), RangeError)
  })
})
