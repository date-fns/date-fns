// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setDay from '.'

describe('setDay', function () {
  it('sets the day of the week', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 0)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  it('converts a fractional number to an integer', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), 0.5)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
  })

  describe('the day index is more than 6', function () {
    it('sets the day of the next week', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), 8)
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
    })
  })

  describe('the day index is less than 0', function () {
    it('sets the day of the last week', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), -6)
      assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25))
    })

    it('set the day of another week in the past', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), -14)
      assert.deepEqual(result, new Date(2014, 7 /* Aug */, 17))
    })
  })

  it('accepts a timestamp', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1).getTime(), 3)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setDay(new Date(2014, 8 /* Sep */, 1), '5')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 5))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDay(date, 3)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setDay(new Date(NaN), 0)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setDay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setDay.bind(null), TypeError)
    assert.throws(setDay.bind(null, 1), TypeError)
  })
})
