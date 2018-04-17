// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import format from '.'

describe('format', function () {
  var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123)

  var offset = date.getTimezoneOffset()
  var absoluteOffset = Math.abs(offset)
  var hours = Math.floor(absoluteOffset / 60)
  var hoursLeadingZero = hours < 10 ? '0' : ''
  var minutes = absoluteOffset % 60
  var minutesLeadingZero = minutes < 10 ? '0' : ''
  var sign = offset > 0 ? '-' : '+'

  var timezone = sign + hoursLeadingZero + hours + ':' + minutesLeadingZero + minutes
  var timezoneShort = timezone.replace(':', '')
  var timezoneWithOptionalMinutesShort = minutes === 0 ? sign + hoursLeadingZero + hours : timezoneShort

  var timezoneWithZ = offset === 0 ? 'Z' : timezone
  var timezoneWithZShort = offset === 0 ? 'Z' : timezoneShort
  var timezoneWithOptionalMinutesAndZShort = offset === 0 ? 'Z' : timezoneWithOptionalMinutesShort

  var timezoneGMTShort = minutes === 0
    ? 'GMT' + sign + hours
    : 'GMT' + sign + hours + ':' + minutesLeadingZero + minutes
  var timezoneGMT = 'GMT' + timezone

  var timestamp = date.getTime().toString()
  var secondsTimestamp = Math.floor(date.getTime() / 1000).toString()

  it('accepts a string', function () {
    var date = new Date(2014, 3, 4).toISOString()
    assert(format(date, 'yyyy-MM-dd') === '2014-04-04')
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 3, 4).getTime()
    assert(format(date, 'yyyy-MM-dd') === '2014-04-04')
  })

  it('escapes characters between the single quote characters', function () {
    var result = format(date, "'yyyy-'MM-dd'THH:mm:ss.SSSX' yyyy-'MM-dd'")
    assert(result === 'yyyy-04-04THH:mm:ss.SSSX 1986-MM-dd')
  })

  it('two single quote characters are transformed into a "real" single quote', function () {
    var date = new Date(2014, 3, 4, 5)
    assert(format(date, "''h 'o''clock'''") === "'5 o'clock'")
  })

  describe('ordinal numbers', function () {
    it('ordinal day of an ordinal month', function () {
      var result = format(date, "do 'day of the' Mo 'month' of YYYY")
      assert(result === '4th day of the 4th month of 1986')
    })

    it('should return a correct ordinal number', function () {
      var result = []
      for (var i = 1; i <= 31; i++) {
        result.push(format(new Date(2015, 0, i), 'do'))
      }
      var expected = [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
        '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
        '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'
      ]
      assert.deepEqual(result, expected)
    })
  })

  it('era', function () {
    var result = format(date, 'G GG GGG GGGG GGGGG')
    assert(result === 'AD AD AD Anno Domini A')
  })

  describe('year', function () {
    describe('regular year', function () {
      it('works as expected', function () {
        var result = format(date, 'y yo yy yyy yyyy yyyyy')
        assert(result === '1986 1986th 86 1986 1986 01986')
      })

      it('1 BC formats as 1', function () {
        var date = new Date(0, 0 /* Jan */, 1)
        date.setFullYear(0)
        var result = format(date, 'y')
        assert(result === '1')
      })

      it('2 BC formats as 2', function () {
        var date = new Date(0, 0 /* Jan */, 1)
        date.setFullYear(-1)
        var result = format(date, 'y')
        assert(result === '2')
      })
    })

    describe('local week-numbering year', function () {
      it('works as expected', function () {
        var result = format(date, 'Y Yo YY YYY YYYY YYYYY')
        assert(result === '1986 1986th 86 1986 1986 01986')
      })

      it('the first week of the next year', function () {
        var result = format(new Date(2013, 11 /* Dec */, 29), 'YYYY')
        assert(result === '2014')
      })

      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
        var result = format(new Date(2013, 11 /* Dec */, 29), 'YYYY', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        })
        assert(result === '2013')
      })

      it('the first week of year', function () {
        var result = format(new Date(2016, 0 /* Jan */, 1), 'YYYY')
        assert(result === '2016')
      })

      it('1 BC formats as 1', function () {
        var date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(0)
        var result = format(date, 'Y')
        assert(result === '1')
      })

      it('2 BC formats as 2', function () {
        var date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(-1)
        var result = format(date, 'Y')
        assert(result === '2')
      })
    })

    describe('ISO week-numbering year', function () {
      it('works as expected', function () {
        var result = format(date, 'R RR RRR RRRR RRRRR')
        assert(result === '1986 1986 1986 1986 01986')
      })

      it('the first week of the next year', function () {
        var result = format(new Date(2013, 11 /* Dec */, 30), 'RRRR')
        assert(result === '2014')
      })

      it('the last week of the previous year', function () {
        var result = format(new Date(2016, 0 /* Jan */, 1), 'RRRR')
        assert(result === '2015')
      })

      it('1 BC formats as 0', function () {
        var date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(0)
        var result = format(date, 'R')
        assert(result === '0')
      })

      it('2 BC formats as -1', function () {
        var date = new Date(0, 6 /* Jul */, 2)
        date.setFullYear(-1)
        var result = format(date, 'R')
        assert(result === '-1')
      })
    })

    describe('extended year', function () {
      it('works as expected', function () {
        var result = format(date, 'u uu uuu uuuu uuuuu')
        assert(result === '1986 1986 1986 1986 01986')
      })

      it('1 BC formats as 0', function () {
        var date = new Date(0, 0, 1)
        date.setFullYear(0)
        var result = format(date, 'u')
        assert(result === '0')
      })

      it('2 BC formats as -1', function () {
        var date = new Date(0, 0, 1)
        date.setFullYear(-1)
        var result = format(date, 'u')
        assert(result === '-1')
      })
    })
  })

  describe('quarter', function () {
    it('formatting quarter', function () {
      var result = format(date, 'Q Qo QQ QQQ QQQQ QQQQQ')
      assert(result === '2 2nd 02 Q2 2nd quarter 2')
    })

    it('stand-alone quarter', function () {
      var result = format(date, 'q qo qq qqq qqqq qqqqq')
      assert(result === '2 2nd 02 Q2 2nd quarter 2')
    })

    it('returns a correct quarter for each month', function () {
      var result = []
      for (var i = 0; i <= 11; i++) {
        result.push(format(new Date(1986, i, 1), 'Q'))
      }
      var expected = ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4']
      assert.deepEqual(result, expected)
    })
  })

  describe('month', function () {
    it('formatting month', function () {
      var result = format(date, 'M Mo MM MMM MMMM MMMMM')
      assert(result === '4 4th 04 Apr April A')
    })

    it('stand-alone month', function () {
      var result = format(date, 'L Lo LL LLL LLLL LLLLL')
      assert(result === '4 4th 04 Apr April A')
    })
  })

  describe('week', function () {
    describe('local week of year', function () {
      it('works as expected', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'w wo ww')
        assert(result === '15 15th 15')
      })

      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'w wo ww', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        })
        assert(result === '14 14th 14')
      })
    })

    it('ISO week of year', function () {
      var date = new Date(1986, 3 /* Apr */, 6)
      var result = format(date, 'I Io II')
      assert(result === '14 14th 14')
    })
  })

  describe('day', function () {
    it('date', function () {
      var result = format(date, 'd do dd')
      assert(result === '4 4th 04')
    })

    describe('day of year', function () {
      it('works as expected', function () {
        var result = format(date, 'D Do DD DDD DDDDD')
        assert(result === '94 94th 94 094 00094')
      })

      it('returns a correct day number for the last day of a leap year', function () {
        var result = format(new Date(1992, 11 /* Dec */, 31, 23, 59, 59, 999), 'D')
        assert(result === '366')
      })
    })
  })

  describe('week day', function () {
    describe('day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'E EE EEE EEEE EEEEE EEEEEE')
        assert(result === 'Fri Fri Fri Friday F Fr')
      })
    })

    describe('ISO day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'i io ii iii iiii iiiii iiiiii')
        assert(result === '5 5th 05 Fri Friday F Fr')
      })

      it('returns a correct day of an ISO week', function () {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'i'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })

    describe('formatting day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'e eo ee eee eeee eeeee eeeeee')
        assert(result === '6 6th 06 Fri Friday F Fr')
      })

      it('by default, 1 is Sunday, 2 is Monday, ...', function () {
        var result = []
        for (var i = 7; i <= 13; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'e'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })

      it('allows to specify which day is the first day of the week', function () {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'e', {weekStartsOn: 1}))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })

    describe('stand-alone day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'c co cc ccc cccc ccccc cccccc')
        assert(result === '6 6th 06 Fri Friday F Fr')
      })

      it('by default, 1 is Sunday, 2 is Monday, ...', function () {
        var result = []
        for (var i = 7; i <= 13; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'c'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })

      it('allows to specify which day is the first day of the week', function () {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'c', {weekStartsOn: 1}))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })
  })

  describe('day period and hour', function () {
    it('hour [1-12]', function () {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'h ho hh')
      assert(result === '12 12th 12')
    })

    it('hour [0-23]', function () {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'H Ho HH')
      assert(result === '0 0th 00')
    })

    it('hour [0-11]', function () {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'K Ko KK')
      assert(result === '0 0th 00')
    })

    it('hour [1-24]', function () {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'k ko kk')
      assert(result === '24 24th 24')
    })

    describe('AM, PM', function () {
      it('works as expected', function () {
        var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'a aa aaa aaaa aaaaa')
        assert(result === 'AM AM AM a.m. a')
      })

      it('12 PM', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'h H K k a') === '12 12 0 12 PM')
      })

      it('12 AM', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'h H K k a') === '12 0 0 24 AM')
      })
    })

    describe('AM, PM, noon, midnight', function () {
      it('works as expected', function () {
        var result = format(new Date(1986, 3 /* Apr */, 6, 2, 0, 0, 900), 'b bb bbb bbbb bbbbb')
        assert(result === 'AM AM AM a.m. a')
      })

      it('12 PM', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'b bb bbb bbbb bbbbb') === 'noon noon noon noon n')
      })

      it('12 AM', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'b bb bbb bbbb bbbbb') === 'midnight midnight midnight midnight mi')
      })
    })

    describe('flexible day periods', function () {
      it('works as expected', function () {
        var result = format(date, 'B, BB, BBB, BBBB, BBBBB')
        assert(result === 'in the morning, in the morning, in the morning, in the morning, in the morning')
      })

      it('12 PM', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'h B') === '12 in the afternoon')
      })

      it('5 PM', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 17, 0, 0, 900)
        assert(format(date, 'h B') === '5 in the evening')
      })

      it('12 AM', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'h B') === '12 at night')
      })

      it('4 AM', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 4, 0, 0, 900)
        assert(format(date, 'h B') === '4 in the morning')
      })
    })
  })

  it('minute', function () {
    var result = format(date, 'm mo mm')
    assert(result === '32 32nd 32')
  })

  describe('second', function () {
    it('second', function () {
      var result = format(date, 's so ss')
      assert(result === '55 55th 55')
    })

    it('fractional seconds', function () {
      var result = format(date, 'S SS SSS SSSS')
      assert(result === '1 12 123 1230')
    })
  })

  describe('time zone', function () {
    it('should toDate the given date in a local timezone', function () {
      assert(format('2015-01-01', 'yyyy-MM-dd') === '2015-01-01')
    })
    it('ISO-8601 with Z', function () {
      var result = format(date, 'X XX XXX XXXX XXXXX')
      var expectedResult = [
        timezoneWithOptionalMinutesAndZShort,
        timezoneWithZShort,
        timezoneWithZ,
        timezoneWithZShort,
        timezoneWithZ
      ].join(' ')
      assert(result === expectedResult)
    })

    it('ISO-8601 without Z', function () {
      var result = format(date, 'x xx xxx xxxx xxxxx')
      var expectedResult = [
        timezoneWithOptionalMinutesShort,
        timezoneShort,
        timezone,
        timezoneShort,
        timezone
      ].join(' ')
      assert(result === expectedResult)
    })

    it('GMT', function () {
      var result = format(date, 'O OO OOO OOOO')
      var expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT
      ].join(' ')
      assert(result === expectedResult)
    })

    it('Specific non-location', function () {
      var result = format(date, 'z zz zzz zzzz')
      var expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT
      ].join(' ')
      assert(result === expectedResult)
    })
  })

  describe('timestamp', function () {
    it('seconds timestamp', function () {
      var result = format(date, 't')
      assert(result === secondsTimestamp)
    })

    it('milliseconds timestamp', function () {
      var result = format(date, 'T')
      assert(result === timestamp)
    })
  })

  describe('long format', function () {
    it('short date', function () {
      var result = format(date, 'P')
      assert(result === '04/04/1986')
    })

    it('medium date', function () {
      var result = format(date, 'PP')
      assert(result === 'Apr 4, 1986')
    })

    it('long date', function () {
      var result = format(date, 'PPP')
      assert(result === 'April 4th, 1986')
    })

    it('full date', function () {
      var result = format(date, 'PPPP')
      assert(result === 'Friday, April 4th, 1986')
    })

    it('short time', function () {
      var result = format(date, 'p')
      assert(result === '10:32 AM')
    })

    it('medium time', function () {
      var result = format(date, 'pp')
      assert(result === '10:32:55 AM')
    })

    it('long time', function () {
      var result = format(date, 'ppp')
      assert(result === '10:32:55 AM ' + timezoneGMTShort)
    })

    it('full time', function () {
      var result = format(date, 'pppp')
      assert(result === '10:32:55 AM ' + timezoneGMT)
    })

    it('short date + time', function () {
      var result = format(date, 'Pp')
      assert(result === '04/04/1986, 10:32 AM')
    })

    it('medium date + time', function () {
      var result = format(date, 'PPpp')
      assert(result === 'Apr 4, 1986, 10:32:55 AM')
    })

    it('long date + time', function () {
      var result = format(date, 'PPPppp')
      assert(result === 'April 4th, 1986 at 10:32:55 AM ' + timezoneGMTShort)
    })

    it('full date + time', function () {
      var result = format(date, 'PPPPpppp')
      assert(result === 'Friday, April 4th, 1986 at 10:32:55 AM ' + timezoneGMT)
    })

    it('allows arbitrary combination of date and time', function () {
      var result = format(date, 'Ppppp')
      assert(result === '04/04/1986, 10:32:55 AM ' + timezoneGMT)
    })
  })

  describe('edge cases', function () {
    it("returns String('Invalid Date') if the date isn't valid", function () {
      assert(format(new Date(NaN), 'MMMM d, yyyy') === 'Invalid Date')
    })

    it('handles dates before 100 AD', function () {
      var initialDate = new Date(0)
      initialDate.setFullYear(7, 11 /* Dec */, 31)
      initialDate.setHours(0, 0, 0, 0)
      assert(format(initialDate, 'Y ww i') === '8 01 1')
    })
  })

  it('implicitly converts `formatString`', function () {
    // eslint-disable-next-line no-new-wrappers
    var formatString = new String('yyyy-MM-dd')

    var date = new Date(2014, 3, 4)

    // $ExpectedMistake
    assert(format(date, formatString) === '2014-04-04')
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
            return "'It' MMMM!"
          }
        }
      }
      // $ExpectedMistake
      var result = format(date, 'PPPP', {locale: customLocale})
      assert(result === 'It works!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      var customLocale = {
        formatLong: {}
      }
      // $ExpectedMistake
      var block = format.bind(null, date, 'yyyy-MM-dd', {locale: customLocale})
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      var customLocale = {
        // $ExpectedMistake
        localize: {}
      }
      // $ExpectedMistake
      var block = format.bind(null, date, 'yyyy-MM-dd', {locale: customLocale})
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // $ExpectedMistake
    var block = format.bind(null, new Date(2007, 11 /* Dec */, 31), 'yyyy', {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    // $ExpectedMistake
    var block = format.bind(null, new Date(2007, 11 /* Dec */, 31), 'yyyy', {firstWeekContainsDate: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = format.bind(null, date, 'yyyy-MM-dd', {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(format.bind(null), TypeError)
    assert.throws(format.bind(null, 1), TypeError)
  })
})
