// @flow
/* eslint-env mocha */

import assert from 'assert'
import eachWeekOfInterval from '.'

describe('eachWeekOfInterval', function() {
  it('returns an array with starts of weeks from the week of the start date to the week of the end date', function() {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23)
    ])
  })

  it('accepts timestamps', function() {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6).getTime(),
      end: new Date(2014, 10 /* Nov */, 23).getTime()
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23)
    ])
  })

  it('handles the dates that are not starts/ends of days and weeks', function() {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: new Date(2014, 10 /* Nov */, 25, 22, 16)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23)
    ])
  })

  it('considers the weekStartsOn option', function() {
    const result = eachWeekOfInterval(
      {
        start: new Date(2014, 9 /* Oct */, 6, 6, 35),
        end: new Date(2014, 10 /* Nov */, 25, 22, 15)
      },
      { weekStartsOn: 2 }
    )
    assert.deepEqual(result, [
      new Date(2014, 8 /* Sep */, 30),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 14),
      new Date(2014, 9 /* Oct */, 21),
      new Date(2014, 9 /* Oct */, 28),
      new Date(2014, 10 /* Nov */, 4),
      new Date(2014, 10 /* Nov */, 11),
      new Date(2014, 10 /* Nov */, 18),
      new Date(2014, 10 /* Nov */, 25)
    ])
  })

  it('returns one week if the both arguments are on the same week', function() {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 8, 15)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 5)])
  })

  it('returns one day if the both arguments are the same', function() {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 5)])
  })

  it('throws an exception if the start date is after the end date', function() {
    const block = eachWeekOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function() {
    const block = eachWeekOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function() {
    const block = eachWeekOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function() {
    const block = eachWeekOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertible to 0, 1, ..., 6 or undefined', function() {
    const block = eachWeekOfInterval.bind(
      null,
      {
        start: new Date(2014, 9 /* Oct */, 6, 6, 35),
        end: new Date(2014, 10 /* Nov */, 25, 22, 15)
      },
      // $ExpectedMistake
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(eachWeekOfInterval.bind(null), TypeError)
  })
})
