// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachMonthOfInterval from '.'

describe('eachMonthOfInterval', function() {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function() {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 1),
      new Date(2014, 3 /* Oct */, 1),
      new Date(2014, 4 /* Oct */, 1),
      new Date(2014, 5 /* Oct */, 1),
      new Date(2014, 6 /* Oct */, 1),
      new Date(2014, 7 /* Oct */, 1)
    ])
  })

  it('accepts timestamps', function() {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 1),
      new Date(2014, 3 /* Oct */, 1),
      new Date(2014, 4 /* Oct */, 1),
      new Date(2014, 5 /* Oct */, 1),
      new Date(2014, 6 /* Oct */, 1),
      new Date(2014, 7 /* Oct */, 1)
    ])
  })

  it('handles the dates that are not starts of days', function() {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: new Date(2014, 7 /* Aug */, 12, 22, 15)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 1),
      new Date(2014, 3 /* Oct */, 1),
      new Date(2014, 4 /* Oct */, 1),
      new Date(2014, 5 /* Oct */, 1),
      new Date(2014, 6 /* Oct */, 1),
      new Date(2014, 7 /* Oct */, 1)
    ])
  })

  it('handles the dates that are not containing days', function() {
    var result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */),
      end: new Date(2014, 7 /* Oct */)
    })
    assert.deepEqual(result, [
      new Date(2014, 2 /* Oct */, 1),
      new Date(2014, 3 /* Oct */, 1),
      new Date(2014, 4 /* Oct */, 1),
      new Date(2014, 5 /* Oct */, 1),
      new Date(2014, 6 /* Oct */, 1),
      new Date(2014, 7 /* Oct */, 1)
    ])
  })

  it('returns one month if the both arguments are on the same month', function() {
    var result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 9, 15)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 1)])
  })

  it('returns one month if the both arguments are the same', function() {
    var result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 1)])
  })

  it('throws an exception if the start date is after the end date', function() {
    var block = eachMonthOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function() {
    var block = eachMonthOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function() {
    var block = eachMonthOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function() {
    var block = eachMonthOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(eachMonthOfInterval.bind(null), TypeError)
  })
})
