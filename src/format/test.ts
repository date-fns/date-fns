/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import format from '.'

describe('format', () => {
  var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123)

  var offset = date.getTimezoneOffset()
  var absoluteOffset = Math.abs(offset)
  var hours = Math.floor(absoluteOffset / 60)
  var hoursLeadingZero = hours < 10 ? '0' : ''
  var minutes = absoluteOffset % 60
  var minutesLeadingZero = minutes < 10 ? '0' : ''
  var sign = offset > 0 ? '-' : '+'

  var timezone =
    sign + hoursLeadingZero + hours + ':' + minutesLeadingZero + minutes
  var timezoneShort = timezone.replace(':', '')
  var timezoneWithOptionalMinutesShort =
    minutes === 0 ? sign + hoursLeadingZero + hours : timezoneShort

  var timezoneWithZ = offset === 0 ? 'Z' : timezone
  var timezoneWithZShort = offset === 0 ? 'Z' : timezoneShort
  var timezoneWithOptionalMinutesAndZShort =
    offset === 0 ? 'Z' : timezoneWithOptionalMinutesShort

  var timezoneGMTShort =
    minutes === 0
      ? 'GMT' + sign + hours
      : 'GMT' + sign + hours + ':' + minutesLeadingZero + minutes
  var timezoneGMT = 'GMT' + timezone

  var timestamp = date.getTime().toString()
  var secondsTimestamp = Math.floor(date.getTime() / 1000).toString()

  it('accepts a timestamp', () => {
    var date = new Date(2014, 3, 4).getTime()
    assert(format(date, 'yyyy-MM-dd') === '2014-04-04')
  })

  it('escapes characters between the single quote characters', () => {
    var result = format(date, "'yyyy-'MM-dd'THH:mm:ss.SSSX' yyyy-'MM-dd'")
    assert(result === 'yyyy-04-04THH:mm:ss.SSSX 1986-MM-dd')
  })

  it('two single quote characters are transformed into a "real" single quote', () => {
    var date = new Date(2014, 3, 4, 5)
    assert(format(date, "''h 'o''clock'''") === "'5 o'clock'")
  })

  it('accepts new line charactor', () => {
    var date = new Date(2014, 3, 4, 5)
    assert.equal(format(date, "yyyy-MM-dd'\n'HH:mm:ss"), '2014-04-04\n05:00:00')
  })

  describe('ordinal numbers', () => {
    it('ordinal day of an ordinal month', () => {
      var result = format(date, "do 'day of the' Mo 'month of' yyyy")
      assert(result === '4th day of the 4th month of 1986')
    })

    it('should return a correct ordinal number', () => {
      var result = []
      for (var i = 1; i <= 31; i++) {
        result.push(format(new Date(2015, 0, i), 'do'))
      }
      var expected = [
        '1st',
        '2nd',
        '3rd',
        '4th',
        '5th',
        '6th',
        '7th',
        '8th',
        '9th',
        '10th',
        '11th',
        '12th',
        '13th',
        '14th',
        '15th',
        '16th',
        '17th',
        '18th',
        '19th',
        '20th',
        '21st',
        '22nd',
        '23rd',
        '24th',
        '25th',
        '26th',
        '27th',
        '28th',
        '29th',
        '30th',
        '31st',
      ]
      assert.deepEqual(result, expected)
    })
  })

  it('era', () => {
    var result = format(date, 'G GG GGG GGGG GGGGG')
    assert(result === 'AD AD AD Anno Domini A')

    var bcDate = new Date()
    bcDate.setFullYear(-1, 0 /* Jan */, 1)
    var bcResult = format(bcDate, 'G GG GGG GGGG GGGGG')
    assert(bcResult === 'BC BC BC Before Christ B')
  })

  describe('year', () => {
    describe('regular year', () => {
      it('works as expected', () => {
        var result = format(date, 'y yo yy yyy yyyy yyyyy')
        assert(result === '1986 1986th 86 1986 1986 01986')
      })

      it('1 BC formats as 1', () => {
        var date = new Date(0)
        date.setFullYear(0, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'y')
        assert(result === '1')
      })

      it('2 BC formats as 2', () => {
        var date = new Date(0)
        date.setFullYear(-1, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'y')
        assert(result === '2')
      })

      it('2 BC formats as 2nd', () => {
        var date = new Date()
        date.setFullYear(-1, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'yo')
        assert(result === '2nd')
      })
    })

    describe('local week-numbering year', () => {
      it('works as expected', () => {
        var result = format(date, 'Y Yo YY YYY YYYY YYYYY', {
          useAdditionalWeekYearTokens: true,
        })
        assert(result === '1986 1986th 86 1986 1986 01986')
      })

      it('the first week of the next year', () => {
        var result = format(new Date(2013, 11 /* Dec */, 29), 'YYYY', {
          useAdditionalWeekYearTokens: true,
        })
        assert(result === '2014')
      })

      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', () => {
        var result = format(new Date(2013, 11 /* Dec */, 29), 'YYYY', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
          useAdditionalWeekYearTokens: true,
        })
        assert(result === '2013')
      })

      it('the first week of year', () => {
        var result = format(new Date(2016, 0 /* Jan */, 1), 'YYYY', {
          useAdditionalWeekYearTokens: true,
        })
        assert(result === '2016')
      })

      it('1 BC formats as 1', () => {
        var date = new Date(0)
        date.setFullYear(0, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'Y')
        assert(result === '1')
      })

      it('2 BC formats as 2', () => {
        var date = new Date(0)
        date.setFullYear(-1, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'Y')
        assert(result === '2')
      })
    })

    describe('ISO week-numbering year', () => {
      it('works as expected', () => {
        var result = format(date, 'R RR RRR RRRR RRRRR')
        assert(result === '1986 1986 1986 1986 01986')
      })

      it('the first week of the next year', () => {
        var result = format(new Date(2013, 11 /* Dec */, 30), 'RRRR')
        assert(result === '2014')
      })

      it('the last week of the previous year', () => {
        var result = format(new Date(2016, 0 /* Jan */, 1), 'RRRR')
        assert(result === '2015')
      })

      it('1 BC formats as 0', () => {
        var date = new Date(0)
        date.setFullYear(0, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'R')
        assert(result === '0')
      })

      it('2 BC formats as -1', () => {
        var date = new Date(0)
        date.setFullYear(-1, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'R')
        assert(result === '-1')
      })
    })

    describe('extended year', () => {
      it('works as expected', () => {
        var result = format(date, 'u uu uuu uuuu uuuuu')
        assert(result === '1986 1986 1986 1986 01986')
      })

      it('1 BC formats as 0', () => {
        var date = new Date(0)
        date.setFullYear(0, 0, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'u')
        assert(result === '0')
      })

      it('2 BC formats as -1', () => {
        var date = new Date(0)
        date.setFullYear(-1, 0, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'u')
        assert(result === '-1')
      })
    })
  })

  describe('quarter', () => {
    it('formatting quarter', () => {
      var result = format(date, 'Q Qo QQ QQQ QQQQ QQQQQ')
      assert(result === '2 2nd 02 Q2 2nd quarter 2')
    })

    it('stand-alone quarter', () => {
      var result = format(date, 'q qo qq qqq qqqq qqqqq')
      assert(result === '2 2nd 02 Q2 2nd quarter 2')
    })

    it('returns a correct quarter for each month', () => {
      var result = []
      for (var i = 0; i <= 11; i++) {
        result.push(format(new Date(1986, i, 1), 'Q'))
      }
      var expected = [
        '1',
        '1',
        '1',
        '2',
        '2',
        '2',
        '3',
        '3',
        '3',
        '4',
        '4',
        '4',
      ]
      assert.deepEqual(result, expected)
    })
  })

  describe('month', () => {
    it('formatting month', () => {
      var result = format(date, 'M Mo MM MMM MMMM MMMMM')
      assert(result === '4 4th 04 Apr April A')
    })

    it('stand-alone month', () => {
      var result = format(date, 'L Lo LL LLL LLLL LLLLL')
      assert(result === '4 4th 04 Apr April A')
    })
  })

  describe('week', () => {
    describe('local week of year', () => {
      it('works as expected', () => {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'w wo ww')
        assert(result === '15 15th 15')
      })

      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', () => {
        var date = new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'w wo ww', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
        })
        assert(result === '14 14th 14')
      })
    })

    it('ISO week of year', () => {
      var date = new Date(1986, 3 /* Apr */, 6)
      var result = format(date, 'I Io II')
      assert(result === '14 14th 14')
    })
  })

  describe('day', () => {
    it('date', () => {
      var result = format(date, 'd do dd')
      assert(result === '4 4th 04')
    })

    describe('day of year', () => {
      it('works as expected', () => {
        var result = format(date, 'D Do DD DDD DDDDD', {
          useAdditionalDayOfYearTokens: true,
        })
        assert(result === '94 94th 94 094 00094')
      })

      it('returns a correct day number for the last day of a leap year', () => {
        var result = format(
          new Date(1992, 11 /* Dec */, 31, 23, 59, 59, 999),
          'D',
          { useAdditionalDayOfYearTokens: true }
        )
        assert(result === '366')
      })
    })
  })

  describe('week day', () => {
    describe('day of week', () => {
      it('works as expected', () => {
        var result = format(date, 'E EE EEE EEEE EEEEE EEEEEE')
        assert(result === 'Fri Fri Fri Friday F Fr')
      })
    })

    describe('ISO day of week', () => {
      it('works as expected', () => {
        var result = format(date, 'i io ii iii iiii iiiii iiiiii')
        assert(result === '5 5th 05 Fri Friday F Fr')
      })

      it('returns a correct day of an ISO week', () => {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'i'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })

    describe('formatting day of week', () => {
      it('works as expected', () => {
        var result = format(date, 'e eo ee eee eeee eeeee eeeeee')
        assert(result === '6 6th 06 Fri Friday F Fr')
      })

      it('by default, 1 is Sunday, 2 is Monday, ...', () => {
        var result = []
        for (var i = 7; i <= 13; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'e'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })

      it('allows to specify which day is the first day of the week', () => {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(
            format(new Date(1986, 8 /* Sep */, i), 'e', { weekStartsOn: 1 })
          )
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })

    describe('stand-alone day of week', () => {
      it('works as expected', () => {
        var result = format(date, 'c co cc ccc cccc ccccc cccccc')
        assert(result === '6 6th 06 Fri Friday F Fr')
      })

      it('by default, 1 is Sunday, 2 is Monday, ...', () => {
        var result = []
        for (var i = 7; i <= 13; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'c'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })

      it('allows to specify which day is the first day of the week', () => {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(
            format(new Date(1986, 8 /* Sep */, i), 'c', { weekStartsOn: 1 })
          )
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })
  })

  describe('day period and hour', () => {
    it('hour [1-12]', () => {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'h ho hh')
      assert(result === '12 12th 12')
    })

    it('hour [0-23]', () => {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'H Ho HH')
      assert(result === '0 0th 00')
    })

    it('hour [0-11]', () => {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'K Ko KK')
      assert(result === '0 0th 00')
    })

    it('hour [1-24]', () => {
      var result = format(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), 'k ko kk')
      assert(result === '24 24th 24')
    })

    describe('AM, PM', () => {
      it('works as expected', () => {
        var result = format(
          new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          'a aa aaa aaaa aaaaa'
        )
        assert(result === 'AM AM am a.m. a')
      })

      it('12 PM', () => {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'h H K k a') === '12 12 0 12 PM')
      })

      it('12 AM', () => {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'h H K k a') === '12 0 0 24 AM')
      })
    })

    describe('AM, PM, noon, midnight', () => {
      it('works as expected', () => {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 2, 0, 0, 900),
          'b bb bbb bbbb bbbbb'
        )
        assert(result === 'AM AM am a.m. a')

        var pmResult = format(
          new Date(1986, 3 /* Apr */, 6, 13, 0, 0, 900),
          'b bb bbb bbbb bbbbb'
        )
        assert(pmResult === 'PM PM pm p.m. p')
      })

      it('12 PM', () => {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'b bb bbb bbbb bbbbb') === 'noon noon noon noon n')
      })

      it('12 AM', () => {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(
          format(date, 'b bb bbb bbbb bbbbb') ===
            'midnight midnight midnight midnight mi'
        )
      })
    })

    describe('flexible day periods', () => {
      it('works as expected', () => {
        var result = format(date, 'B, BB, BBB, BBBB, BBBBB')
        assert(
          result ===
            'in the morning, in the morning, in the morning, in the morning, in the morning'
        )
      })

      it('12 PM', () => {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'h B') === '12 in the afternoon')
      })

      it('5 PM', () => {
        var date = new Date(1986, 3 /* Apr */, 6, 17, 0, 0, 900)
        assert(format(date, 'h B') === '5 in the evening')
      })

      it('12 AM', () => {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'h B') === '12 at night')
      })

      it('4 AM', () => {
        var date = new Date(1986, 3 /* Apr */, 6, 4, 0, 0, 900)
        assert(format(date, 'h B') === '4 in the morning')
      })
    })
  })

  it('minute', () => {
    var result = format(date, 'm mo mm')
    assert(result === '32 32nd 32')
  })

  describe('second', () => {
    it('second', () => {
      var result = format(date, 's so ss')
      assert(result === '55 55th 55')
    })

    it('fractional seconds', () => {
      var result = format(date, 'S SS SSS SSSS')
      assert(result === '1 12 123 1230')
    })
  })

  describe('time zone', () => {
    it('ISO-8601 with Z', () => {
      var result = format(date, 'X XX XXX XXXX XXXXX')
      var expectedResult = [
        timezoneWithOptionalMinutesAndZShort,
        timezoneWithZShort,
        timezoneWithZ,
        timezoneWithZShort,
        timezoneWithZ,
      ].join(' ')
      assert(result === expectedResult)

      var getTimezoneOffsetStub = sinon.stub(
        Date.prototype,
        'getTimezoneOffset'
      )
      getTimezoneOffsetStub.returns(0)
      var resultZeroOffset = format(date, 'X XX XXX XXXX XXXXX')
      assert(resultZeroOffset === 'Z Z Z Z Z')

      getTimezoneOffsetStub.returns(480)
      var resultNegativeOffset = format(date, 'X XX XXX XXXX XXXXX')
      assert(resultNegativeOffset === '-08 -0800 -08:00 -0800 -08:00')

      getTimezoneOffsetStub.returns(450)
      var resultNegative30Offset = format(date, 'X XX XXX XXXX XXXXX')
      assert(resultNegative30Offset === '-0730 -0730 -07:30 -0730 -07:30')

      getTimezoneOffsetStub.restore()
    })

    it('ISO-8601 without Z', () => {
      var result = format(date, 'x xx xxx xxxx xxxxx')
      var expectedResult = [
        timezoneWithOptionalMinutesShort,
        timezoneShort,
        timezone,
        timezoneShort,
        timezone,
      ].join(' ')
      assert(result === expectedResult)
    })

    it('GMT', () => {
      var result = format(date, 'O OO OOO OOOO')
      var expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT,
      ].join(' ')
      assert(result === expectedResult)

      var getTimezoneOffsetStub = sinon.stub(
        Date.prototype,
        'getTimezoneOffset'
      )
      getTimezoneOffsetStub.returns(480)
      var resultNegativeOffset = format(date, 'O OO OOO OOOO')
      assert(resultNegativeOffset === 'GMT-8 GMT-8 GMT-8 GMT-08:00')

      getTimezoneOffsetStub.returns(450)
      var resultNegative30Offset = format(date, 'O OO OOO OOOO')
      assert(resultNegative30Offset === 'GMT-7:30 GMT-7:30 GMT-7:30 GMT-07:30')

      getTimezoneOffsetStub.restore()
    })

    it('Specific non-location', () => {
      var result = format(date, 'z zz zzz zzzz')
      var expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT,
      ].join(' ')
      assert(result === expectedResult)
    })
  })

  describe('timestamp', () => {
    it('seconds timestamp', () => {
      var result = format(date, 't')
      assert(result === secondsTimestamp)
    })

    it('milliseconds timestamp', () => {
      var result = format(date, 'T')
      assert(result === timestamp)
    })
  })

  describe('long format', () => {
    it('short date', () => {
      var result = format(date, 'P')
      assert(result === '04/04/1986')
    })

    it('medium date', () => {
      var result = format(date, 'PP')
      assert(result === 'Apr 4, 1986')
    })

    it('long date', () => {
      var result = format(date, 'PPP')
      assert(result === 'April 4th, 1986')
    })

    it('full date', () => {
      var result = format(date, 'PPPP')
      assert(result === 'Friday, April 4th, 1986')
    })

    it('short time', () => {
      var result = format(date, 'p')
      assert(result === '10:32 AM')
    })

    it('medium time', () => {
      var result = format(date, 'pp')
      assert(result === '10:32:55 AM')
    })

    it('long time', () => {
      var result = format(date, 'ppp')
      assert(result === '10:32:55 AM ' + timezoneGMTShort)
    })

    it('full time', () => {
      var result = format(date, 'pppp')
      assert(result === '10:32:55 AM ' + timezoneGMT)
    })

    it('short date + time', () => {
      var result = format(date, 'Pp')
      assert(result === '04/04/1986, 10:32 AM')
    })

    it('medium date + time', () => {
      var result = format(date, 'PPpp')
      assert(result === 'Apr 4, 1986, 10:32:55 AM')
    })

    it('long date + time', () => {
      var result = format(date, 'PPPppp')
      assert(result === 'April 4th, 1986 at 10:32:55 AM ' + timezoneGMTShort)
    })

    it('full date + time', () => {
      var result = format(date, 'PPPPpppp')
      assert(result === 'Friday, April 4th, 1986 at 10:32:55 AM ' + timezoneGMT)
    })

    it('allows arbitrary combination of date and time', () => {
      var result = format(date, 'Ppppp')
      assert(result === '04/04/1986, 10:32:55 AM ' + timezoneGMT)
    })
  })

  describe('edge cases', () => {
    it('throws RangeError if the time value is invalid', () => {
      assert.throws(
        format.bind(null, new Date(NaN), 'MMMM d, yyyy'),
        RangeError
      )
    })

    it('handles dates before 100 AD', () => {
      var initialDate = new Date(0)
      initialDate.setFullYear(7, 11 /* Dec */, 31)
      initialDate.setHours(0, 0, 0, 0)
      assert(format(initialDate, 'Y ww i') === '8 01 1')
    })
  })

  it('implicitly converts `formatString`', () => {
    // eslint-disable-next-line no-new-wrappers
    var formatString = new String('yyyy-MM-dd')

    var date = new Date(2014, 3, 4)

    assert(
      format(
        date,
        // @ts-expect-error
        formatString
      ) === '2014-04-04'
    )
  })

  describe('custom locale', () => {
    it('allows to pass a custom locale', () => {
      var customLocale = {
        localize: {
          month: () => {
            return 'works'
          },
        },
        formatLong: {
          date: () => {
            return "'It' MMMM!"
          },
        },
      }
      var result = format(date, 'PPPP', { locale: customLocale })
      assert(result === 'It works!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", () => {
      var customLocale = {
        formatLong: {},
      }
      var block = format.bind(null, date, 'yyyy-MM-dd', {
        locale: customLocale,
      })
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", () => {
      var customLocale = {
        localize: {},
      }
      var block = format.bind(null, date, 'yyyy-MM-dd', {
        locale: customLocale,
      })
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    var block = () =>
      // @ts-expect-error
      format(new Date(2007, 11 /* Dec */, 31), 'yyyy', {
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', () => {
    var block = () =>
      format(new Date(2007, 11 /* Dec */, 31), 'yyyy', {
        firstWeekContainsDate: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', () => {
    assert.throws(format.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(format.bind(null), TypeError)
    assert.throws(format.bind(null, 1), TypeError)
  })

  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', () => {
    it('throws an error if D token is used', () => {
      const block = format.bind(null, date, 'yyyy-MM-D')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `d` instead of `D` \(in `yyyy-MM-D`\) for formatting days of the month to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows D token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = format(date, 'yyyy-MM-D', {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, '1986-04-94')
    })

    it('throws an error if DD token is used', () => {
      const block = format.bind(null, date, 'yyyy-MM-DD')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `dd` instead of `DD` \(in `yyyy-MM-DD`\) for formatting days of the month to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows DD token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = format(date, 'yyyy-MM-DD', {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, '1986-04-94')
    })

    it('throws an error if YY token is used', () => {
      const block = format.bind(null, date, 'YY-MM-dd')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `yy` instead of `YY` \(in `YY-MM-dd`\) for formatting years to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows YY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = format(date, 'YY-MM-dd', {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, '86-04-04')
    })

    it('throws an error if YYYY token is used', () => {
      const block = format.bind(null, date, 'YYYY-MM-dd')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `yyyy` instead of `YYYY` \(in `YYYY-MM-dd`\) for formatting years to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = format(date, 'YYYY-MM-dd', {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, '1986-04-04')
    })
  })
})
