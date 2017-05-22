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
    assert(result === 'last Tuesday at 12:00 a.m.')
  })

  it('yesterday', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate)
    assert(result === 'yesterday at 10:22 p.m.')
  })

  it('today', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate)
    assert(result === 'today at 4:50 p.m.')
  })

  it('tomorrow', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate)
    assert(result === 'tomorrow at 7:30 a.m.')
  })

  it('next week', function () {
    var result = formatRelative(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate)
    assert(result === 'Sunday at 12:00 p.m.')
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
    it('can be passed to the function', function () {
      var formatters = {
        'ABC': function (date) {
          return 'It'
        },

        'EFG': function (date, options) {
          return options.locale.localize.efg(date)
        }
      }

      var localize = {
        efg: function (date) {
          return 'works'
        }
      }

      var formattingTokensRegExp = /(\[[^[]*])|(\\)?(ABC|EFG|.)/g

      var formatLong = function (token) {
        if (token === 'LTS') {
          return 'ABC'
        } else {
          return '[Nothing]'
        }
      }

      var localizeFormatRelative = function (token) {
        if (token === 'other') {
          return 'LTS EFG[!]'
        } else {
          return "[It doesn't work!]"
        }
      }

      var customLocale = {
        // $ExpectedMistake
        localize: localize,
        formatLong: formatLong,
        formatRelative: localizeFormatRelative,
        formatters: formatters,
        formattingTokensRegExp: formattingTokensRegExp
      }

      // $ExpectedMistake
      var result = formatRelative(new Date(2017, 0 /* Jan */, 1), baseDate, {locale: customLocale})
      assert(result === 'It works!')
    })

    context('does not contain `localize` property', function () {
      it('throws `RangeError`', function () {
        var customLocale = {formatLong: function () {}, formatRelative: function () {}}
        // $ExpectedMistake
        var block = formatRelative.bind(null, new Date(2017, 0 /* Jan */, 1), baseDate, {locale: customLocale})
        assert.throws(block, RangeError)
      })
    })

    context('does not contain `formatLong` property', function () {
      it('throws `RangeError`', function () {
        // $ExpectedMistake
        var customLocale = {localize: {}, formatRelative: function () {}}
        // $ExpectedMistake
        var block = formatRelative.bind(null, new Date(2017, 0 /* Jan */, 1), baseDate, {locale: customLocale})
        assert.throws(block, RangeError)
      })
    })

    context('does not contain `formatRelative` property', function () {
      it('throws `RangeError`', function () {
        // $ExpectedMistake
        var customLocale = {localize: {}, formatLong: function () {}}
        // $ExpectedMistake
        var block = formatRelative.bind(null, new Date(2017, 0 /* Jan */, 1), baseDate, {locale: customLocale})
        assert.throws(block, RangeError)
      })
    })

    context('does not contain `format` property', function () {
      it('works correctly', function () {
        var localize = {
          month: function (date) {
            return 'foobar'
          }
        }

        var localizeFormatRelative = function (token) {
          if (token === 'today') {
            return 'MMMM'
          } else {
            return '[qwerty]'
          }
        }

        var customLocale = {localize: localize, formatLong: function () {}, formatRelative: localizeFormatRelative}
        // $ExpectedMistake
        assert(formatRelative(new Date(1986, 3 /* Apr */, 4), baseDate, {locale: customLocale}) === 'foobar')
      })
    })

    context('does not contain `format.formattingTokensRegExp` property', function () {
      it('uses default `formattingTokensRegExp`', function () {
        var formatters = {
          'MMMM': function (date, options) {
            return options.locale.localize.month(date)
          },

          'YYYY': function (date) {
            return 'works'
          }
        }

        var localize = {
          month: function (date) {
            return 'It'
          }
        }

        var localizeFormatRelative = function () {
          return 'MMMM YYYY [correctly!] GGGG'
        }

        var customLocale = {
          formatLong: function () {},
          formatRelative: localizeFormatRelative,
          localize: localize,
          formatters: formatters
        }

        // $ExpectedMistake
        var result = formatRelative(new Date(2017, 6 /* Jul */, 2), baseDate, {locale: customLocale})
        assert(result === 'It works correctly! 2017')
      })
    })
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = formatRelative.bind(null, new Date(2017, 0, 1), baseDate, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })
})
