// @flow
/* eslint-env mocha */

import assert from 'assert'
import lightFormat from '.'

describe('lightFormat', () => {
  const date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123)

  it('accepts a timestamp', () => {
    const date = new Date(2014, 3, 4).getTime()
    assert(lightFormat(date, 'yyyy-MM-dd') === '2014-04-04')
  })

  it('escapes characters between the single quote characters', () => {
    const result = lightFormat(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'")
    assert(result === 'yyyy-04-04D yyyy-04-04')
  })

  it('two single quote characters are transformed into a "real" single quote', () => {
    const date = new Date(2014, 3, 4, 5)
    assert(lightFormat(date, "''h 'o''clock'''") === "'5 o'clock'")
  })

  it('accepts new line charactor', function () {
    const date = new Date(2014, 3, 4, 5)
    assert.equal(
      lightFormat(date, "yyyy-MM-dd'\n'HH:mm:ss"),
      '2014-04-04\n05:00:00'
    )
  })

  describe('year', () => {
    describe('regular year', () => {
      it('works as expected', () => {
        const result = lightFormat(date, 'y yy yyy yyyy yyyyy')
        assert(result === '1986 86 1986 1986 01986')
      })

      it('1 BC formats as 1', () => {
        const date = new Date(0)
        date.setFullYear(0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        const result = lightFormat(date, 'y')
        assert(result === '1')
      })

      it('2 BC formats as 2', () => {
        const date = new Date(0)
        date.setFullYear(-1, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        const result = lightFormat(date, 'y')
        assert(result === '2')
      })
    })
  })

  describe('month', () => {
    it('formatting month', () => {
      const result = lightFormat(date, 'M MM')
      assert(result === '4 04')
    })
  })

  describe('day', () => {
    it('date', () => {
      const result = lightFormat(date, 'd dd')
      assert(result === '4 04')
    })
  })

  describe('hour', () => {
    it('hour [1-12]', () => {
      const result = lightFormat(
        new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'h hh'
      )
      assert(result === '12 12')
    })

    it('hour [0-23]', () => {
      const result = lightFormat(
        new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'H HH'
      )
      assert(result === '0 00')
    })

    describe('AM, PM', () => {
      it('works as expected', () => {
        const result = lightFormat(
          new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          'a aa aaa aaaa aaaaa'
        )
        assert(result === 'AM AM am a.m. a')
      })

      it('12 PM', () => {
        const date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(lightFormat(date, 'h H a') === '12 12 PM')
      })

      it('12 AM', () => {
        const date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(lightFormat(date, 'h H a') === '12 0 AM')
      })
    })
  })

  it('minute', () => {
    const result = lightFormat(date, 'm mm')
    assert(result === '32 32')
  })

  describe('second', () => {
    it('second', () => {
      const result = lightFormat(date, 's ss')
      assert(result === '55 55')
    })
  })

  it('fractional seconds', function () {
    const result = lightFormat(date, 'S SS SSS SSSS')
    assert(result === '1 12 123 1230')
  })

  it('returns empty string when the format is an empty string', () => {
    assert(lightFormat(Date.now(), '') === '')
  })

  it("throws RangeError if the date isn't valid", () => {
    assert.throws(
      lightFormat.bind(null, new Date(NaN), 'MMMM d, yyyy'),
      RangeError
    )
  })

  it('implicitly converts `formatString`', () => {
    // eslint-disable-next-line no-new-wrappers
    const formatString = new String('yyyy-MM-dd')

    const date = new Date(2014, 3, 4)

    // @ts-expect-error
    assert(lightFormat(date, formatString) === '2014-04-04')
  })

  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
    assert.throws(lightFormat.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(lightFormat.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(lightFormat.bind(null, 1), TypeError)
  })
})
