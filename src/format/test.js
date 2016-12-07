// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import format from '.'

describe('format', function () {
  var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  var offset = date.getTimezoneOffset()
  var absoluteOffset = Math.abs(offset)
  var hours = Math.floor(absoluteOffset / 60)
  var hoursLeadingZero = hours < 10 ? '0' : ''
  var minutes = absoluteOffset % 60
  var minutesLeadingZero = minutes < 10 ? '0' : ''
  var sign = offset > 0 ? '-' : '+'
  var timezone = sign + hoursLeadingZero + hours + ':' + minutesLeadingZero + minutes
  var timezoneShort = timezone.replace(':', '')

  var timestamp = date.getTime().toString()
  var secondsTimestamp = Math.floor(date.getTime() / 1000).toString()

  it('accepts a string', function () {
    var date = new Date(2014, 3, 4).toISOString()
    assert(format(date, 'YYYY-MM-DD') === '2014-04-04')
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 3, 4).getTime()
    assert(format(date, 'YYYY-MM-DD') === '2014-04-04')
  })

  it('escapes characters between the square brackets', function () {
    var result = format(date, '[YYYY-]MM-DD[THH:mm:ss.SSSZ] YYYY-[MM-DD]')
    assert(result === 'YYYY-04-04THH:mm:ss.SSSZ 1986-MM-DD')
  })

  describe('ordinal numbers', function () {
    it('an ordinal day of an ordinal month', function () {
      var result = format(date, 'Do of t[h][e] Mo in YYYY')
      assert(result === '4th of the 4th in 1986')
    })

    it('should return a correct ordinal number', function () {
      var result = []
      for (var i = 1; i <= 31; i++) {
        result.push(format(new Date(2015, 0, i), 'Do'))
      }
      var expected = [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
        '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
        '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'
      ]
      assert.deepEqual(result, expected)
    })
  })

  describe('months', function () {
    it('a cardinal number', function () {
      assert(format(date, 'M') === '4')
    })

    it('a cardinal number with a leading zero', function () {
      assert(format(date, 'MM') === '04')
    })

    it('an ordinal number', function () {
      assert(format(date, 'Mo') === '4th')
    })

    it('a short name', function () {
      assert(format(date, 'MMM') === 'Apr')
    })

    it('a full name', function () {
      assert(format(date, 'MMMM') === 'April')
    })

    it('all variants', function () {
      var result = format(date, 'M Mo MM MMM MMMM')
      assert(result === '4 4th 04 Apr April')
    })
  })

  describe('quarters', function () {
    it('returns a correct quarter', function () {
      var result = []
      for (var i = 0; i <= 11; i++) {
        result.push(format(new Date(1986, i, 1), 'Q'))
      }
      var expected = ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4']
      assert.deepEqual(result, expected)
    })

    it('all variants', function () {
      assert(format(date, 'Q Qo') === '2 2nd')
    })
  })

  describe('days of a month', function () {
    it('all variants', function () {
      assert(format(date, 'D Do DD') === '4 4th 04')
    })
  })

  describe('days of a year', function () {
    context('for the first day of a year', function () {
      it('returns a correct day number', function () {
        var result = format(new Date(1992, 0 /* Jan */, 1), 'DDD')
        assert(result === '1')
      })
    })

    context('for the last day of a common year', function () {
      it('returns a correct day number', function () {
        var result = format(new Date(1986, 11 /* Dec */, 31, 23, 59, 59, 999), 'DDD')
        assert(result === '365')
      })
    })

    context('for the last day of a leap year', function () {
      it('returns a correct day number', function () {
        var result = format(new Date(1992, 11 /* Dec */, 31, 23, 59, 59, 999), 'DDD')
        assert(result === '366')
      })
    })

    it('an ordinal number', function () {
      var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDo')
      assert(result === '1st')
    })

    it('a cardinal number with leading zeros', function () {
      var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDD')
      assert(result === '001')
    })
  })

  describe('days of a week', function () {
    it('all variants', function () {
      var result = format(date, 'd do dd ddd dddd')
      assert(result === '5 5th Fr Fri Friday')
    })
  })

  describe('days of an ISO week', function () {
    it('returns a correct day of an ISO week', function () {
      var result = []
      for (var i = 1; i <= 7; i++) {
        result.push(format(new Date(1986, 8 /* Sep */, i), 'E'))
      }
      var expected = ['1', '2', '3', '4', '5', '6', '7']
      assert.deepEqual(result, expected)
    })
  })

  describe('ISO weeks', function () {
    it('a cardinal number with a leading zero', function () {
      var result = format(new Date(1992, 0 /* Jan */, 5), 'WW')
      assert(result === '01')
    })

    it('all variants', function () {
      var result = format(date, 'W Wo WW')
      assert(result === '14 14th 14')
    })
  })

  describe('years', function () {
    it('all variants', function () {
      var result = format(date, 'YY YYYY')
      assert(result === '86 1986')
    })

    it('years less than 100', function () {
      var result = format('0001-01-01', 'YY YYYY')
      assert(result === '01 0001')
    })
  })

  describe('ISO week-numbering years', function () {
    it('the first week of the next year', function () {
      var result = format(new Date(2013, 11 /* Dec */, 30), 'GGGG')
      assert(result === '2014')
    })

    it('the last week of the previous year', function () {
      var result = format(new Date(2016, 0 /* Jan */, 1), 'GGGG')
      assert(result === '2015')
    })

    it('all variants', function () {
      var result = format(date, 'GG GGGG')
      assert(result === '86 1986')
    })
  })

  describe('hours and am/pm', function () {
    it('am/pm', function () {
      assert(format(date, 'hh:mm a') === '10:32 am')
    })

    it('12 pm', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
      assert(format(date, 'hh:mm a') === '12:00 pm')
    })

    it('12 am', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 0, 0, 0, 900)
      assert(format(date, 'h:mm a') === '12:00 am')
    })

    it('12 a.m.', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 0, 0, 0, 900)
      assert(format(date, 'h:mm aa') === '12:00 a.m.')
    })

    it('12 p.m.', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
      assert(format(date, 'hh:mm aa') === '12:00 p.m.')
    })

    it('12PM', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
      assert(format(date, 'hh:mmA') === '12:00PM')
    })

    it('cardinal numbers with leading zeros', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 1, 0, 0, 900)
      assert(format(date, 'HH hh') === '01 01')
    })

    it('all hour variants', function () {
      assert(format(date, 'H HH h hh') === '10 10 10 10')
    })
  })

  describe('minutes', function () {
    it('a cardinal number with a leading zero', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
      assert(format(date, 'mm') === '00')
    })

    it('all variants', function () {
      assert(format(date, 'm mm') === '32 32')
    })
  })

  describe('seconds', function () {
    it('all variants', function () {
      assert(format(date, 's ss') === '0 00')
    })
  })

  describe('fractions of a second', function () {
    it('1/10 of a second', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 859)
      assert(format(date, 'S') === '8')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 0)
      assert(format(date, 'S') === '0')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 1)
      assert(format(date, 'S') === '0')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 10)
      assert(format(date, 'S') === '0')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 100)
      assert(format(date, 'S') === '1')
    })

    it('1/100 of a second', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 859)
      assert(format(date, 'SS') === '85')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 0)
      assert(format(date, 'SS') === '00')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 1)
      assert(format(date, 'SS') === '00')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 10)
      assert(format(date, 'SS') === '01')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 42)
      assert(format(date, 'SS') === '04')
    })

    it('a millisecond', function () {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 859)
      assert(format(date, 'SSS') === '859')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 0)
      assert(format(date, 'SSS') === '000')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 1)
      assert(format(date, 'SSS') === '001')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 10)
      assert(format(date, 'SSS') === '010')
      date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 42)
      assert(format(date, 'SSS') === '042')
    })
  })

  describe('timezones', function () {
    it('should toDate the given date in a local timezone', function () {
      assert(format('2015-01-01', 'YYYY-MM-DD') === '2015-01-01')
    })

    it('all variants', function () {
      var result = format(date, 'Z ZZ')
      assert(result === timezone + ' ' + timezoneShort)
    })
  })

  describe('timestamps', function () {
    it('a unix seconds timestamp', function () {
      assert(format(date, 'X') === secondsTimestamp)
    })

    it('a unix milliseconds timestamp', function () {
      assert(format(date, 'x') === timestamp)
    })
  })

  describe('edge cases', function () {
    it('throws an exception if the date isn\'t valid', function () {
      var block = format.bind(null, new Date(NaN), 'MMMM D, YYYY')
      assert.throws(block)
    })

    it('handles dates before 100 AD', function () {
      var initialDate = new Date(0)
      initialDate.setFullYear(7, 11 /* Dec */, 31)
      initialDate.setHours(0, 0, 0, 0)
      assert(format(initialDate, 'GGGG WW E') === '8 01 1')
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      var currentDate = date

      var formatters = {
        'ABC': function (date) {
          assert.deepEqual(date, currentDate)
          return 'It'
        },

        'EFG': function (date) {
          assert.deepEqual(date, currentDate)
          return 'works'
        }
      }

      var formattingTokensRegExp = /(\[[^[]*])|(\\)?(ABC|EFG|.)/g

      var customLocale = {
        format: {
          formatters: formatters,
          formattingTokensRegExp: formattingTokensRegExp
        }
      }

      var result = format(date, 'ABC EFG [correctly!]', {locale: customLocale})
      assert(result === 'It works correctly!')
    })

    context('does not contain `format` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {}
        assert(format(date, 'MMMM', {locale: customLocale}) === 'April')
      })
    })

    context('does not contain `format.formatters` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {format: {}}
        assert(format(date, 'MMMM', {locale: customLocale}) === 'April')
      })
    })

    context('does not contain `format.formattingTokensRegExp` property', function () {
      it('uses `format.formattingTokensRegExp` of enLocale', function () {
        var currentDate = date

        var formatters = {
          'MMMM': function (date) {
            assert.deepEqual(date, currentDate)
            return 'It'
          },

          'YYYY': function (date) {
            assert.deepEqual(date, currentDate)
            return 'works'
          }
        }

        var customLocale = {
          format: {
            formatters: formatters
          }
        }

        var result = format(date, 'MMMM YYYY [correctly!] GGGG', {locale: customLocale})
        assert(result === 'It works correctly! 1986')
      })
    })
  })
})
