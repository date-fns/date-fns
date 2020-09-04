// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachDayOfInterval from '.'

describe('eachDayOfInterval', () => {
  it('returns an array with starts of days from the day of the start date to the day of the end date', () => {
    var result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('accepts timestamps', () => {
    var result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6).getTime(),
      end: new Date(2014, 9 /* Oct */, 12).getTime()
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('handles the dates that are not starts of days', () => {
    var result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: new Date(2014, 9 /* Oct */, 12, 22, 15)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('returns one day if the both arguments are on the same day', () => {
    var result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 15)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 6)])
  })

  it('returns one day if the both arguments are the same', () => {
    var result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [new Date(2014, 9 /* Oct */, 6)])
  })

  it('throws an exception if the start date is after the end date', () => {
    var block = eachDayOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', () => {
    var block = eachDayOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', () => {
    var block = eachDayOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', () => {
    var block = eachDayOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(eachDayOfInterval.bind(null), TypeError)
  })

  describe('options.step', () => {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 13)
    }

    const stepError = /^RangeError: `options.step` must be a number greater than 1$/

    it('returns an array with starts of days from the day of the start date to the day of the end date with the given step', () => {
      const result = eachDayOfInterval(interval, { step: 3 })
      assert.deepEqual(result, [
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 9),
        new Date(2014, 9 /* Oct */, 12)
      ])
    })

    it('throws TypeError error if `options.step` is less than 1', () => {
      assert.throws(() => eachDayOfInterval(interval, { step: 0 }), stepError)
      assert.throws(() => eachDayOfInterval(interval, { step: -3 }), stepError)
    })

    it('throws TypeError error if `options.step` is NaN', () => {
      // $ExpectedMistake
      assert.throws(() => eachDayOfInterval(interval, { step: 'w' }), stepError)
      assert.throws(() => eachDayOfInterval(interval, { step: NaN }), stepError)
    })
  })
})
