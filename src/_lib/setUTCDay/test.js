// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setUTCDay from '.'

describe('setUTCDay', function () {
  it('sets the day of the week', function () {
    var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0)
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {weekStartsOn: 1})
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    var result = setUTCDay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      0,
      {
        locale: {
          options: {weekStartsOn: 1}
        }
      }
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var result = setUTCDay(
      new Date(Date.UTC(2014, 8 /* Sep */, 1)),
      0,
      {
        weekStartsOn: 1,
        locale: {
          options: {weekStartsOn: 0}
        }
      }
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  context('the day index is more than 6', function () {
    it('sets the day of the next week', function () {
      var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 8)
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 8)))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 7, {weekStartsOn: 1})
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 14)))
    })

    it('sets the day of another week in the future', function () {
      var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 14, {weekStartsOn: 1})
      assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 21)))
    })
  })

  context('the day index is less than 0', function () {
    it('sets the day of the last week', function () {
      var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -6)
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 25)))
    })

    it('allows to specify which day is the first day of the week', function () {
      var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -7, {weekStartsOn: 1})
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
    })

    it('set the day of another week in the past', function () {
      var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), -14, {weekStartsOn: 1})
      assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 24)))
    })
  })

  it('accepts a string', function () {
    var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)).toISOString(), 5)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 5)))
  })

  it('accepts a timestamp', function () {
    var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)).getTime(), 3)
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 3)))
  })

  it('implicitly converts number arguments', function () {
    var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), '0')
    assert.deepEqual(result, new Date(Date.UTC(2014, 7 /* Aug */, 31)))
  })

  it('implicitly converts options', function () {
    var result = setUTCDay(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 0, {weekStartsOn: '1'})
    assert.deepEqual(result, new Date(Date.UTC(2014, 8 /* Sep */, 7)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    setUTCDay(date, 3)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setUTCDay(new Date(NaN), 0)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setUTCDay(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    var block = setUTCDay.bind(null, new Date(2014, 8 /* Sep */, 1), 0, {weekStartsOn: NaN})
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var block = setUTCDay.bind(null, new Date(2014, 8 /* Sep */, 1), 0, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(setUTCDay.bind(null, 1), TypeError)
  })
})
