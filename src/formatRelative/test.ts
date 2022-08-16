/* eslint-env mocha */

import assert from 'assert'
import formatRelative from './index'

describe('formatRelative', () => {
  const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  it('accepts a timestamp', () => {
    const date = new Date(2014, 3 /* Apr */, 4)
    assert(formatRelative(date.getTime(), baseDate.getTime()) === '04/04/2014')
  })

  it('before the last week', () => {
    const result = formatRelative(
      new Date(1986, 2 /* Mar */, 28, 16, 50),
      baseDate
    )
    assert(result === '03/28/1986')
  })

  it('last week', () => {
    const result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate)
    assert(result === 'last Tuesday at 12:00 AM')
  })

  it('yesterday', () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 3, 22, 22),
      baseDate
    )
    assert(result === 'yesterday at 10:22 PM')
  })

  it('today', () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 4, 16, 50),
      baseDate
    )
    assert(result === 'today at 4:50 PM')
  })

  it('tomorrow', () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 5, 7, 30),
      baseDate
    )
    assert(result === 'tomorrow at 7:30 AM')
  })

  it('next week', () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 6, 12, 0),
      baseDate
    )
    assert(result === 'Sunday at 12:00 PM')
  })

  it('after the next week', () => {
    const result = formatRelative(
      new Date(1986, 3 /* Apr */, 11, 16, 50),
      baseDate
    )
    assert(result === '04/11/1986')
  })

  describe('edge cases', () => {
    it("throws RangeError if the date isn't valid", () => {
      assert.throws(
        formatRelative.bind(null, new Date(NaN), baseDate),
        RangeError
      )
    })

    it("throws RangeError if the base date isn't valid", () => {
      assert.throws(
        formatRelative.bind(
          null,
          new Date(2017, 0 /* Jan */, 1),
          new Date(NaN)
        ),
        RangeError
      )
    })

    it("throws RangeError if both dates aren't valid", () => {
      assert.throws(
        formatRelative.bind(null, new Date(NaN), new Date(NaN)),
        RangeError
      )
    })

    it('handles dates before 100 AD', () => {
      const date = new Date(0)
      date.setFullYear(7, 11 /* Dec */, 31)
      date.setHours(0, 0, 0, 0)
      assert(formatRelative(date, baseDate) === '12/31/0007')
    })
  })

  describe('custom locale', () => {
    it('allows to pass a custom locale', () => {
      const customLocale = {
        localize: {
          month: () => {
            return 'works'
          },
        },
        formatLong: {
          date: () => {
            return "'It' MMMM"
          },
        },
        formatRelative: () => {
          return "P 'perfectly!'"
        },
      }
      const result = formatRelative(
        new Date(1986, 2 /* Mar */, 28, 16, 50),
        baseDate,
        {
          // @ts-expect-error
          locale: customLocale,
        }
      )
      assert(result === 'It works perfectly!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", () => {
      const customLocale = {
        formatLong: {},
        formatRelative: () => {
          return ''
        },
      }
      const block = () =>
        formatRelative(new Date(2017, 0, 1), baseDate, {
          // @ts-expect-error
          locale: customLocale,
        })
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", () => {
      const customLocale = {
        localize: {},
        formatRelative: () => {
          return ''
        },
      }
      const block = () =>
        formatRelative(new Date(2017, 0, 1), baseDate, {
          // @ts-expect-error
          locale: customLocale,
        })
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatRelative` property", () => {
      const customLocale = {
        localize: {},
        formatLong: {},
      }
      const block = () =>
        formatRelative(new Date(2017, 0, 1), baseDate, {
          // @ts-expect-error
          locale: customLocale,
        })
      assert.throws(block, RangeError)
    })
  })
})
