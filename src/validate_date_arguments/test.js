/* eslint-env mocha */

var assert = require('power-assert')
var validateDateArguments = require('./')

describe('validateDateArguments', function () {
  describe('no arguments', function () {
    it('returns true', function () {
      var result = validateDateArguments()
      assert(result === true)
    })
  })

  describe('single argument is a Date', function () {
    it('returns true if Date is valid', function () {
      var result = validateDateArguments(new Date(2014, 6 /* Jul */, 2))
      assert(result === true)
    })

    it('returns false if Date is invalid', function () {
      var result = validateDateArguments(new Date(''))
      assert(result === false)
    })
  })

  describe('single argument is a number', function () {
    it('returns true if the given argument is a valid timestamp', function () {
      var result = validateDateArguments(1404259200000)
      assert(result === true)
    })

    it('returns true if the timestamp is negative and valid', function () {
      var result = validateDateArguments(-1e10)
      assert(result === true)
    })

    it('returns false if the timestamp is invalid', function () {
      var result = validateDateArguments(1e20)
      assert(result === false)
    })

    it('returns false if the timestamp is negative and invalid', function () {
      var result = validateDateArguments(-1e20)
      assert(result === false)
    })

    it('returns false if the given argument is a non-integral number', function () {
      var result = validateDateArguments(1404259200000.5)
      assert(result === false)
    })

    it('returns false if the given argument is NaN', function () {
      var result = validateDateArguments(NaN)
      assert(result === false)
    })

    it('returns false if the given argument is Infinity', function () {
      var result = validateDateArguments(Infinity)
      assert(result === false)
    })

    it('considers true a number 1', function () {
      var result = validateDateArguments(true)
      assert(result === true)
    })

    it('considers false a number 0', function () {
      var result = validateDateArguments(false)
      assert(result === true)
    })

    it('considers null a number 1', function () {
      var result = validateDateArguments(null)
      assert(result === true)
    })
  })

  describe('single argument is a string', function () {
    it('returns true if the string is in a format recognized by the Date.parse() method', function () {
      var string = new Date(2014, 6 /* Jul */, 2).toString()
      var result = validateDateArguments(string)
      assert(result === true)
    })

    it('returns false if the given argument is a timestamp-like string', function () {
      var result = validateDateArguments('1404259200000')
      assert(result === false)
    })
  })

  describe('at least two arguments are supplied', function () {
    it('returns true if all the given values are valid', function () {
      var result = validateDateArguments(2014, 6 /* Jul */)
      assert(result === true)
    })

    it('returns true if all the given values are valid, including optional arguments', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, 30, 15, 500)
      assert(result === true)
    })

    describe('value boundaries', function () {
      it('supports the two digit year format', function () {
        var result = validateDateArguments(95, 6 /* Jul */, 2, 6, 30, 15, 500)
        assert(result === true)
      })

      it('returns false if the year is invalid', function () {
        var result = validateDateArguments(10e5, 6 /* Jul */)
        assert(result === false)
      })

      it('returns false if the month is invalid', function () {
        var result = validateDateArguments(2014, 12)
        assert(result === false)
      })

      it('returns false if the day of the month is invalid', function () {
        var result = validateDateArguments(2014, 1 /* Feb */, 29)
        assert(result === false)
      })

      it('returns false if the hours are invalid', function () {
        var result = validateDateArguments(2014, 6 /* Jul */, 2, 24)
        assert(result === false)
      })

      it('returns false if the minutes are invalid', function () {
        var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, 60)
        assert(result === false)
      })

      it('returns false if the seconds are invalid', function () {
        var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, 30, 70)
        assert(result === false)
      })

      it('returns false if the milliseconds are invalid', function () {
        var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, 30, 15, 1000)
        assert(result === false)
      })

      it('returns false if any given argument is a non-integral number', function () {
        var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, 30.5, 15, 500)
        assert(result === false)
      })
    })
  })

  describe('number parsing', function () {
    it('returns true if the given strings are parsable by Date constructor and valid', function () {
      var result = validateDateArguments(2014, '6.0', '0x2', '6000e-3', '0x1e', '15.000', '5e2')
      assert(result === true)
    })

    it('returns false if the given strings are parsable by Date constructor but invalid', function () {
      var result = validateDateArguments('2014.0', '6' /* Jul */, '2', '6', '60')
      assert(result === false)
    })

    it('returns false if the given strings are not parsable by Date constructor', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, '2abc')
      assert(result === false)
    })

    it('considers true a number 1', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, true, 15, 500)
      assert(result === true)
    })

    it('considers false a number 0', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, false, 15, 500)
      assert(result === true)
    })

    it('considers null a number 0', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, null, 15, 500)
      assert(result === true)
    })

    it('returns false if the given strings are parsable as non-integral numbers', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, '2.5')
      assert(result === false)
    })

    it('parses octary numbers if they are supported by a platform', function () {
      var octaryNumbersSupported = Number('0o10') === 8
      var result = validateDateArguments(2014, 6 /* Jul */, '0o10')
      assert(result === octaryNumbersSupported)
    })

    it('parses binary numbers if they are supported by a platform', function () {
      var binaryNumbersSupported = Number('0b10') === 2
      var result = validateDateArguments(2014, 6 /* Jul */, '0o10')
      assert(result === binaryNumbersSupported)
    })
  })

  describe('argument is invalid', function () {
    it('returns false if the argument is provided and undefined', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, undefined)
      assert(result === false)
    })

    it('returns false if the argument is NaN', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, NaN)
      assert(result === false)
    })

    it('returns false if the argument is invalid in some other way', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, 'abc')
      assert(result === false)
    })

    it('any arguments after the 7th are ignored', function () {
      var result = validateDateArguments(2014, 6 /* Jul */, 2, 6, 30, 15, 500, 'abc')
      assert(result === true)
    })
  })
})
