// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setUTCISODay from '.'

describe('setUTCISODay', function () {
  it('sets the day of the ISO week', function () {
    var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 3)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('sets the day to Sunday of this ISO week if the index is 7', function () {
    var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 7)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  describe('the day index is more than 7', function () {
    it('sets the day of the next ISO week', function () {
      var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 8)
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 8)))
    })

    it('sets the day of another ISO week in the future', function () {
      var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 21)
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 21)))
    })
  })

  describe('the day index is less than 1', function () {
    it('sets the day of the last ISO week', function () {
      var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0)
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
    })

    it('set the day of another ISO week in the past', function () {
      var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -13)
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 18)))
    })
  })

  it('accepts a timestamp', function () {
    var result = setUTCISODay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)).getTime(),
      3
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('converts a fractional number to an integer', function () {
    var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 3.33)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('implicitly converts number arguments', function () {
    var result = setUTCISODay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), '3')
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    setUTCISODay(date, 3)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setUTCISODay(new Date(NaN), 3)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setUTCISODay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(setUTCISODay.bind(null, 1), TypeError)
  })
})
