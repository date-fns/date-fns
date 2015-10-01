var assert = require('power-assert')
var format = require('../format')

describe('format', function() {
  beforeEach(function() {
    this._date = new Date(1986, 3, 4, 10, 32, 0, 900)
  })

  it('simple YY', function() {
    var b = new Date(2009, 1, 14, 15, 25, 50, 125)
    assert(format(b, 'YY') === '09')
  })

  it('accepts string as a date', function() {
    var date = new Date(2014, 3, 4).toISOString()
    assert(format(date, 'YYYY-MM-DD') === '2014-04-04')
  })

  it('accepts timestamp as a date', function() {
    var date = new Date(2014, 3, 4).getTime()
    assert(format(date, 'YYYY-MM-DD') === '2014-04-04')
  })

  it('return default ISO string format if format is unknown', function() {
    assert(format(this._date) === '1986-04-04T10:32:00.900Z')
  })

  describe('format escape brackets', function() {
    it('should ignore escaped chars that in [] brackets', function() {
      var result = format(this._date, '[not a date] MM')
      assert(result === 'not a date 04')
    })
  })

  describe('ordinal', function() {
    it('should return 1st', function() {
      var date = format(this._date, 'Do of t[h][e] Mo in YYYY')
      assert(date === '4th of the 4th in 1986')
    })

    it('should return proper ordinal', function() {
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

  describe('Months', function() {
    it('return months names', function() {
      var date = format(this._date, 'MMM MMMM')
      assert(date === 'Apr April')
    })
    it('return months names reverse parse', function() {
      var date = format(this._date, 'MMMM MMM')
      assert(date === 'April Apr')
    })
    it('all month variants', function() {
      var date = format(this._date, 'M Mo MM MMM MMMM')
      assert(date === '4 4th 04 Apr April')
    })
  })

  describe('formatting day', function() {
    describe('with DDD', function() {
      context('for first day of a year', function() {
        it('returns correct day number', function() {
          var result = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDD')
          assert(result === '1')
        })
      })

      context('for last day of a common year', function() {
        it('returns correct day number', function() {
          var lastDay = format(new Date(1986, 11, 31, 23, 59, 59, 999), 'DDD')
          assert(lastDay === '365')
        })
      })

      context('for last day of a leap year', function() {
        it('returns correct day number', function() {
          var result = format(new Date(1992, 11, 31, 23, 59, 59, 999), 'DDD')
          assert(result === '366')
        })
      })
    })

    it('return ordinal day of the year', function() {
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDo')
      assert(firstDay === '1st')
    })

    it('return zero filled day of year', function() {
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDD')
      assert(firstDay === '001')
    })
  })

  describe('Quartal', function() {
    it('right quartal', function() {
      var result = []
      for (var i = 0; i != 12; i++) {
        result.push(format(new Date(1986, i, 1), 'Q'))
      }
      var expected = ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4']
      assert.deepEqual(result, expected)
    })
  })

  describe('day of week', function() {
    it('display', function() {
      var result = format(this._date, 'd do dd ddd dddd')
      assert(result === '5 5th Fr Fri Friday')
    })

    it('ISO', function() {
      assert(format(this._date, 'E') === '5')
    })

    it('parses ok for different variants', function() {
      var firstDay = format(this._date, 'dddd ddd d do [d] do dd ddd dddd')
      assert(firstDay === 'Friday Fri 5 5th d 5th Fr Fri Friday')
    })
  })

  describe('hours', function() {
    it('am/pm', function() {
      assert(format(this._date, 'hh:mm a') === '10:32 am')
    })

    it('12 pm', function() {
      var date = new Date(1986, 3, 4, 12, 00, 0, 900)
      assert(format(date, 'hh:mm a') === '12:00 pm')
    })

    it('12 am', function() {
      var date = new Date(1986, 3, 4, 00, 00, 0, 900)
      assert(format(date, 'h:mm a') === '12:00 am')
    })

    it('12 a.m.', function() {
      var date = new Date(1986, 3, 4, 00, 00, 0, 900)
      assert(format(date, 'h:mm aa') === '12:00 a.m.')
    })

    it('12 p.m.', function() {
      var date = new Date(1986, 3, 4, 12, 00, 0, 900)
      assert(format(date, 'hh:mm aa') === '12:00 p.m.')
    })

    it('12PM', function() {
      var date = new Date(1986, 3, 4, 12, 00, 0, 900)
      assert(format(date, 'hh:mmA') === '12:00PM')
    })
  })

  describe('seconds', function() {
    it('show', function() {
      assert(format(this._date, 's ss') === '0 00')
    })
  })

  describe('timezones', function() {
    it('should parse dates without timezones', function() {
      assert(format('2015-01-01', 'YYYY-MM-DD') === '2015-01-01')
    })
  })
})

