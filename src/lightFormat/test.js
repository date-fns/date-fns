// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lightFormat from '.'

describe('lightFormat', () => {
  const date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123)

  it('accepts a timestamp', () => {
    var date = new Date(2014, 3, 4).getTime()
    assert(lightFormat(date, 'yyyy-MM-dd') === '2014-04-04')
  })

  it('escapes characters between the single quote characters', () => {
    var result = lightFormat(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'")
    assert(result === 'yyyy-04-04D yyyy-04-04')
  })

  it('two single quote characters are transformed into a "real" single quote', () => {
    var date = new Date(2014, 3, 4, 5)
    assert(lightFormat(date, "''h 'o''clock'''") === "'5 o'clock'")
  })

  it('accepts new line charactor', function () {
    var date = new Date(2014, 3, 4, 5)
    assert.equal(
      lightFormat(date, "yyyy-MM-dd'\n'HH:mm:ss"),
      '2014-04-04\n05:00:00'
    )
  })

  describe('year', () => {
    describe('regular year', () => {
      it('works as expected', () => {
        var result = lightFormat(date, 'y yy yyy yyyy yyyyy')
        assert(result === '1986 86 1986 1986 01986')
      })

      it('1 BC formats as 1', () => {
        var date = new Date(0)
        date.setFullYear(0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = lightFormat(date, 'y')
        assert(result === '1')
      })

      it('2 BC formats as 2', () => {
        var date = new Date(0)
        date.setFullYear(-1, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = lightFormat(date, 'y')
        assert(result === '2')
      })
    })
  })

  describe('month', () => {
    it('formatting month', () => {
      var result = lightFormat(date, 'M MM')
      assert(result === '4 04')
    })
  })

  describe('day', () => {
    it('date', () => {
      var result = lightFormat(date, 'd dd')
      assert(result === '4 04')
    })
  })

  describe('hour', () => {
    it('hour [1-12]', () => {
      var result = lightFormat(
        new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'h hh'
      )
      assert(result === '12 12')
    })

    it('hour [0-23]', () => {
      var result = lightFormat(
        new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'H HH'
      )
      assert(result === '0 00')
    })

    describe('AM, PM', () => {
      it('works as expected', () => {
        var result = lightFormat(
          new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          'a aa aaa aaaa aaaaa'
        )
        assert(result === 'AM AM am a.m. a')
      })

      it('12 PM', () => {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(lightFormat(date, 'h H a') === '12 12 PM')
      })

      it('12 AM', () => {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(lightFormat(date, 'h H a') === '12 0 AM')
      })
    })
  })

  it('minute', () => {
    var result = lightFormat(date, 'm mm')
    assert(result === '32 32')
  })

  describe('second', () => {
    it('second', () => {
      var result = lightFormat(date, 's ss')
      assert(result === '55 55')
    })
  })

  it('fractional seconds', function () {
    var result = lightFormat(date, 'S SS SSS SSSS')
    assert(result === '1 12 123 1230')
  })

  it("throws RangeError if the date isn't valid", () => {
    assert.throws(
      lightFormat.bind(null, new Date(NaN), 'MMMM d, yyyy'),
      RangeError
    )
  })

  it('implicitly converts `formatString`', () => {
    // eslint-disable-next-line no-new-wrappers
    var formatString = new String('yyyy-MM-dd')

    var date = new Date(2014, 3, 4)

    // $ExpectedMistake
    assert(lightFormat(date, formatString) === '2014-04-04')
  })

  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
    assert.throws(lightFormat.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    assert.throws(lightFormat.bind(null), TypeError)
    assert.throws(lightFormat.bind(null, 1), TypeError)
  })
})
