var assert = require('power-assert')
var format = require('../format')

describe('format', function() {
  beforeEach(function() {
    this._date = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    this._timezone = {
      '-720': '-12:00', '-660': '-11:00', '-600': '-10:00',  '-570': '-09:30',
      '-540': '-09:00', '-480': '-08:00', '-420': '-07:00', '-360': '-06:00',
      '-300': '-05:00', '-270': '-04:30', '-240': '-04:00', '-210': '-03:30',
      '-180': '-03:00', '-120': '-02:00', '-60': '-01:00', '0': '+00:00', '60': '+01:00',
      '120': '+02:00', '150': '+02:30', '180': '+03:00', '210': '+03:30', '240': '+04:00',
      '270': '+04:30', '300': '+05:00', '330': '+05:30', '345': '+05:45',
      '360': '+06:00', '390': '+06:30', '420': '+07:00', '480': '+08:00',
      '510': '+08:30', '525': '+08:45', '540': '+09:00', '570': '+09:30',
      '600': '+10:00', '630': '+10:30', '660': '+11:00', '690': '+11:30',
      '720': '+12:00', '765': '+12:45', '780': '+13:00', '840': '+14:00'
    }[this._date.getTimezoneOffset().toString()]
    this._timezoneShort = this._timezone.replace(':', '')

    this._timestamp = this._date.getTime().toString()
    this._secondsTimestamp = Math.floor(this._date.getTime() / 1000).toString()
  })

  it('accepts string as a date', function() {
    var date = new Date(2014, 3, 4).toISOString()
    assert(format(date, 'YYYY-MM-DD') === '2014-04-04')
  })

  it('accepts timestamp as a date', function() {
    var date = new Date(2014, 3, 4).getTime()
    assert(format(date, 'YYYY-MM-DD') === '2014-04-04')
  })

  it('returns default ISO string format if format is unknown', function() {
    assert(format(this._date) === '1986-04-04T10:32:00.900' + this._timezone)
  })

  it('escapes characters inside square brackets', function() {
    var result = format(this._date, '[YYYY-]MM-DD[THH:mm:ss.SSSZ] YYYY-[MM-DD]')
    assert(result === 'YYYY-04-04THH:mm:ss.SSSZ 1986-MM-DD')
  })

  describe('ordinal', function() {
    it('ordinal day of ordinal month', function() {
      var result = format(this._date, 'Do of t[h][e] Mo in YYYY')
      assert(result === '4th of the 4th in 1986')
    })

    it('should return correct ordinal number', function() {
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

  describe('month', function() {
    it('cardinal number', function() {
      assert(format(this._date, 'M') === '4')
    })

    it('cardinal number with leading zeros', function() {
      assert(format(this._date, 'MM') === '04')
    })

    it('ordinal number', function() {
      assert(format(this._date, 'Mo') === '4th')
    })

    it('short name', function() {
      assert(format(this._date, 'MMM') === 'Apr')
    })

    it('full name', function() {
      assert(format(this._date, 'MMMM') === 'April')
    })

    it('all variants', function() {
      var date = format(this._date, 'M Mo MM MMM MMMM')
      assert(date === '4 4th 04 Apr April')
    })
  })

  describe('quarter', function() {
    it('returns correct quarter', function() {
      var result = []
      for (var i = 0; i <= 11; i++) {
        result.push(format(new Date(1986, i, 1), 'Q'))
      }
      var expected = ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4']
      assert.deepEqual(result, expected)
    })

    it('all variants', function() {
      assert(format(this._date, 'Q Qo') === '2 2nd')
    })
  })

  describe('day of month', function() {
    it('all variants', function() {
      assert(format(this._date, 'D Do DD') === '4 4th 04')
    })
  })

  describe('day of year', function() {
    context('for first day of a year', function() {
      it('returns correct day number', function() {
        var result = format(new Date(1992, 0 /* Jan */, 1), 'DDD')
        assert(result === '1')
      })
    })

    context('for last day of a common year', function() {
      it('returns correct day number', function() {
        var result = format(new Date(1986, 11 /* Dec */, 31, 23, 59, 59, 999), 'DDD')
        assert(result === '365')
      })
    })

    context('for last day of a leap year', function() {
      it('returns correct day number', function() {
        var result = format(new Date(1992, 11 /* Dec */, 31, 23, 59, 59, 999), 'DDD')
        assert(result === '366')
      })
    })

    it('ordinal number', function() {
      var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDo')
      assert(result === '1st')
    })

    it('cardinal number with leading zeros', function() {
      var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDD')
      assert(result === '001')
    })
  })

  describe('day of week', function() {
    it('all variants', function() {
      var result = format(this._date, 'd do dd ddd dddd')
      assert(result === '5 5th Fr Fri Friday')
    })
  })

  describe('day of ISO week', function() {
    it('returns correct day of ISO week', function() {
      var result = []
      for (var i = 1; i <= 7; i++) {
        result.push(format(new Date(1986, 8 /* Sep */, i), 'E'))
      }
      var expected = ['1', '2', '3', '4', '5', '6', '7']
      assert.deepEqual(result, expected)
    })
  })

  describe('ISO week', function() {
    it('cardinal number with leading zeros', function() {
      var result = format(new Date(1992, 0 /* Jan */, 5), 'Wo')
      assert(result === '1st')
    })

    it('all variants', function() {
      var result = format(this._date, 'W Wo WW')
      assert(result === '14 14th 14')
    })
  })

  describe('year', function() {
    it('all variants', function() {
      var result = format(this._date, 'YY YYYY')
      assert(result === '86 1986')
    })
  })

  describe('ISO week-numbering year', function() {
    it('first week of next year', function() {
      var result = format(new Date(2013, 11 /* Dec */, 30), 'GGGG')
      assert(result === '2014')
    })

    it('last week of previous year', function() {
      var result = format(new Date(2016, 0 /* Jan */, 1), 'GGGG')
      assert(result === '2015')
    })

    it('all variants', function() {
      var result = format(this._date, 'GG GGGG')
      assert(result === '86 1986')
    })
  })

  describe('hours and am/pm', function() {
    it('am/pm', function() {
      assert(format(this._date, 'hh:mm a') === '10:32 am')
    })

    it('12 pm', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 900)
      assert(format(date, 'hh:mm a') === '12:00 pm')
    })

    it('12 am', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 00, 00, 0, 900)
      assert(format(date, 'h:mm a') === '12:00 am')
    })

    it('12 a.m.', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 00, 00, 0, 900)
      assert(format(date, 'h:mm aa') === '12:00 a.m.')
    })

    it('12 p.m.', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 900)
      assert(format(date, 'hh:mm aa') === '12:00 p.m.')
    })

    it('12PM', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 900)
      assert(format(date, 'hh:mmA') === '12:00PM')
    })

    it('cardinal numbers with leading zeros', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 1, 0, 0, 900)
      assert(format(date, 'HH hh') === '01 01')
    })

    it('all hour variants', function() {
      assert(format(this._date, 'H HH h hh') === '10 10 10 10')
    })
  })

  describe('minute', function() {
    it('cardinal number with leading zeros', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 900)
      assert(format(date, 'mm') === '00')
    })

    it('all variants', function() {
      assert(format(this._date, 'm mm') === '32 32')
    })
  })

  describe('second', function() {
    it('all variants', function() {
      assert(format(this._date, 's ss') === '0 00')
    })
  })

  describe('fractions of second', function() {
    it('1/10 of second', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 859)
      assert(format(date, 'S') === '8')
    })

    it('1/100 of second', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 859)
      assert(format(date, 'SS') === '85')
    })

    it('millisecond', function() {
      var date = new Date(1986, 3 /* Apr */, 4, 12, 00, 0, 859)
      assert(format(date, 'SSS') === '859')
    })
  })

  describe('timezone', function() {
    it('should parse date in local timezone', function() {
      assert(format('2015-01-01', 'YYYY-MM-DD') === '2015-01-01')
    })

    it('all variants', function() {
      var result = format(this._date, 'Z ZZ')
      assert(result === this._timezone + ' ' + this._timezoneShort)
    })
  })

  describe('timestamp', function() {
    it('unix seconds timestamp', function() {
      assert(format(this._date, 'X') === this._secondsTimestamp)
    })

    it('unix milliseconds timestamp', function() {
      assert(format(this._date, 'x') === this._timestamp)
    })
  })
})

