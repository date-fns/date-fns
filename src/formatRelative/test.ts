/* eslint-env mocha */

import assert from 'assert'
import formatRelative from '.'

describe('formatRelative', function () {
  const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  it('accepts a timestamp', function () {
    const date = new Date(2014, 3 /* Apr */, 4)
    assert(formatRelative(date.getTime(), baseDate.getTime()) === '04/04/2014')
  })

  it('before the last week', function () {
    const result = formatRelative(
      new Date(1986, 2 /* Mar */, 28, 16, 50),
      baseDate
    )
    assert(result === '03/28/1986')
  })

  it('last week', function () {
    const result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate)
    assert(result === 'last Tuesday at 12:00 AM')
  })

  it('yesterday', function () {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 3, 22, 22),
      baseDate
    )
    assert(result === 'yesterday at 10:22 PM')
  })

  it('today', function () {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 4, 16, 50),
      baseDate
    )
    assert(result === 'today at 4:50 PM')
  })

  it('tomorrow', function () {
    const result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate)
    assert(result === 'tomorrow at 7:30 AM')
  })

  it('next week', function () {
    const result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate)
    assert(result === 'Sunday at 12:00 PM')
  })

  it('after the next week', function () {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 11, 16, 50),
      baseDate
    )
    assert(result === '04/11/1986')
  })

  describe('edge cases', function () {
    it("throws RangeError if the date isn't valid", function () {
      assert.throws(
        formatRelative.bind(null, new Date(NaN), baseDate),
        RangeError
      )
    })

    it("throws RangeError if the base date isn't valid", function () {
      assert.throws(
        formatRelative.bind(
          null,
          new Date(2017, 0 /* Jan */, 1),
          new Date(NaN)
        ),
        RangeError
      )
    })

    it("throws RangeError if both dates aren't valid", function () {
      assert.throws(
        formatRelative.bind(null, new Date(NaN), new Date(NaN)),
        RangeError
      )
    })

    it('handles dates before 100 AD', function () {
      const date = new Date(0)
      date.setFullYear(7, 11 /* Dec */, 31)
      date.setHours(0, 0, 0, 0)
      assert(formatRelative(date, baseDate) === '12/31/0007')
    })
  })

  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      const customLocale = {
        localize: {
          month: function () {
            return 'works'
          }
        },
        formatLong: {
          date: function () {
            return "'It' MMMM"
          }
        },
        formatRelative: function () {
          return "P 'perfectly!'"
        }
      }
      const result = formatRelative(
        new Date(1986, 2 /* Mar */, 28, 16, 50),
        baseDate,
        // @ts-expect-error
        { locale: customLocale }
      )
      assert(result === 'It works perfectly!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      const customLocale = {
        formatLong: {},
        formatRelative: function () {
          return ''
        }
      }
      // @ts-expect-error
      const block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {
        locale: customLocale
      })
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      const customLocale = {
        localize: {},
        formatRelative: function () {
          return ''
        }
      }
      // @ts-expect-error
      const block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {
        locale: customLocale
      })
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatRelative` property", function () {
      const customLocale = {
        localize: {},
        formatLong: {}
      }
      // @ts-expect-error
      const block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {
        locale: customLocale
      })
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(formatRelative.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(formatRelative.bind(null, 1), TypeError)
  })
})
