// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachMonthOfInterval from '.'

describe('eachMonthOfInterval', function () {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Oct */, 6),
      end: new Date(2014, 7 /* Oct */, 12)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 6),
      new Date(2014, 3 /* Oct */, 6),
      new Date(2014, 4 /* Oct */, 6),
      new Date(2014, 5 /* Oct */, 6),
      new Date(2014, 6 /* Oct */, 6),
      new Date(2014, 7 /* Oct */, 6)
    ])
  })

  it('accepts strings', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Oct */, 6).toISOString(),
      end: new Date(2014, 7 /* Oct */, 12).toISOString()
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 6),
      new Date(2014, 3 /* Oct */, 6),
      new Date(2014, 4 /* Oct */, 6),
      new Date(2014, 5 /* Oct */, 6),
      new Date(2014, 6 /* Oct */, 6),
      new Date(2014, 7 /* Oct */, 6)
    ])
  })

  it('accepts timestamps', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Oct */, 6).getTime(),
      end: new Date(2014, 7 /* Oct */, 12).getTime()
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 6),
      new Date(2014, 3 /* Oct */, 6),
      new Date(2014, 4 /* Oct */, 6),
      new Date(2014, 5 /* Oct */, 6),
      new Date(2014, 6 /* Oct */, 6),
      new Date(2014, 7 /* Oct */, 6)
    ])
  })

  it('handles the dates that are not starts of days', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Oct */, 6, 6, 35),
      end: new Date(2014, 7 /* Oct */, 12, 22, 15)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 6),
      new Date(2014, 3 /* Oct */, 6),
      new Date(2014, 4 /* Oct */, 6),
      new Date(2014, 5 /* Oct */, 6),
      new Date(2014, 6 /* Oct */, 6),
      new Date(2014, 7 /* Oct */, 6)
    ])
  })

  it('handles the dates that are not containing days', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Oct */),
      end: new Date(2014, 7 /* Oct */)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */),
      new Date(2014, 3 /* Oct */),
      new Date(2014, 4 /* Oct */),
      new Date(2014, 5 /* Oct */),
      new Date(2014, 6 /* Oct */),
      new Date(2014, 7 /* Oct */)
    ])
  })

  it('returns one month if the both arguments are on the same month', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 9, 15)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6)
    ])
  })

  it('returns one month if the both arguments are the same', function () {
    var result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6)
    ])
  })

  it('throws an exception if the start date is after the end date', function () {
    var block = eachMonthOfInterval.bind(
      null,
      {
        start: new Date(2014, 9 /* Oct */, 12),
        end: new Date(2014, 9 /* Oct */, 6)
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function () {
    var block = eachMonthOfInterval.bind(
      null,
      {
        start: new Date(NaN),
        end: new Date(2014, 9 /* Oct */, 6)
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function () {
    var block = eachMonthOfInterval.bind(
      null,
      {
        start: new Date(2014, 9 /* Oct */, 12),
        end: new Date(NaN)
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function () {
    var block = eachMonthOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = eachMonthOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12)
      // $ExpectedMistake
    }, { additionalDigits: NaN })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(eachMonthOfInterval.bind(null), TypeError)
  })
})
