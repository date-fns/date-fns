// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatRelative from '.'

describe('formatRelative', function () {
  var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  it('accepts a string', function () {
    var date = new Date(2014, 3 /* Apr */, 4)
    assert(formatRelative(date.toISOString(), baseDate.toISOString()) === '04/04/2014')
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 3 /* Apr */, 4)
    assert(formatRelative(date.getTime(), baseDate.getTime()) === '04/04/2014')
  })

  it('before the last week', function () {
    var result = formatRelative(new Date(1986, 2 /* Mar */, 28, 16, 50), baseDate)
    assert(result === '03/28/1986')
  })

  it('last week', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate)
    assert(result === 'last Tuesday at 12:00 AM')
  })

  it('yesterday', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate)
    assert(result === 'yesterday at 10:22 PM')
  })

  it('today', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate)
    assert(result === 'today at 4:50 PM')
  })

  it('tomorrow', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate)
    assert(result === 'tomorrow at 7:30 AM')
  })

  it('next week', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate)
    assert(result === 'Sunday at 12:00 PM')
  })

  it('after the next week', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate)
    assert(result === '04/11/1986')
  })

  describe('edge cases', function () {
    it("returns String('Invalid Date') if the date isn't valid", function () {
      assert(formatRelative(new Date(NaN), baseDate) === 'Invalid Date')
    })

    it("returns String('Invalid Date') if the base date isn't valid", function () {
      assert(formatRelative(new Date(2017, 0 /* Jan */, 1), new Date(NaN)) === 'Invalid Date')
    })

    it("returns String('Invalid Date') if both dates aren't valid", function () {
      assert(formatRelative(new Date(NaN), new Date(NaN)) === 'Invalid Date')
    })

    it('handles dates before 100 AD', function () {
      var date = new Date(0)
      date.setFullYear(7, 11 /* Dec */, 31)
      date.setHours(0, 0, 0, 0)
      assert(formatRelative(date, baseDate) === '12/31/0007')
    })
  })

  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      var customLocale = {
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
      // $ExpectedMistake
      var result = formatRelative(new Date(1986, 2 /* Mar */, 28, 16, 50), baseDate, {locale: customLocale})
      assert(result === 'It works perfectly!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      var customLocale = {
        formatLong: {},
        formatRelative: function () {
          return ''
        }
      }
      // $ExpectedMistake
      var block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {locale: customLocale})
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      var customLocale = {
        // $ExpectedMistake
        localize: {},
        formatRelative: function () {
          return ''
        }
      }
      // $ExpectedMistake
      var block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {locale: customLocale})
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatRelative` property", function () {
      var customLocale = {
        // $ExpectedMistake
        localize: {},
        formatLong: {}
      }
      // $ExpectedMistake
      var block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {locale: customLocale})
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(formatRelative.bind(null), TypeError)
    assert.throws(formatRelative.bind(null, 1), TypeError)
  })
})
