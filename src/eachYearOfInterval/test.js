// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachYearOfInterval from '.'

describe('eachYearOfInterval', function () {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function () {
    var result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6),
      end: new Date(2017, 9 /* Oct */, 12)
    })
    assert.deepEqual(result, [
      new Date(2012, 9 /* Oct */, 6),
      new Date(2013, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 6),
      new Date(2015, 9 /* Oct */, 6),
      new Date(2016, 9 /* Oct */, 6),
      new Date(2017, 9 /* Oct */, 6)
    ])
  })

  it('accepts strings', function () {
    var result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6).toISOString(),
      end: new Date(2017, 9 /* Oct */, 12).toISOString()
    })
    assert.deepEqual(result, [
      new Date(2012, 9 /* Oct */, 6),
      new Date(2013, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 6),
      new Date(2015, 9 /* Oct */, 6),
      new Date(2016, 9 /* Oct */, 6),
      new Date(2017, 9 /* Oct */, 6)
    ])
  })

  it('accepts timestamps', function () {
    var result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6).getTime(),
      end: new Date(2017, 9 /* Oct */, 12).getTime()
    })
    assert.deepEqual(result, [
      new Date(2012, 9 /* Oct */, 6),
      new Date(2013, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 6),
      new Date(2015, 9 /* Oct */, 6),
      new Date(2016, 9 /* Oct */, 6),
      new Date(2017, 9 /* Oct */, 6)
    ])
  })

  it('handles the dates that are not starts of days', function () {
    var result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6, 6, 35),
      end: new Date(2017, 9 /* Oct */, 12, 22, 15)
    })
    assert.deepEqual(result, [
      new Date(2012, 9 /* Oct */, 6),
      new Date(2013, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 6),
      new Date(2015, 9 /* Oct */, 6),
      new Date(2016, 9 /* Oct */, 6),
      new Date(2017, 9 /* Oct */, 6)
    ])
  })

  it('returns one day if the both arguments are on the same day', function () {
    var result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 15)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6)
    ])
  })

  it('returns one day if the both arguments are the same', function () {
    var result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6)
    ])
  })

  it('throws an exception if the start date is after the end date', function () {
    var block = eachYearOfInterval.bind(
      null,
      {
        start: new Date(2014, 9 /* Oct */, 12),
        end: new Date(2014, 9 /* Oct */, 6)
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function () {
    var block = eachYearOfInterval.bind(
      null,
      {
        start: new Date(NaN),
        end: new Date(2014, 9 /* Oct */, 6)
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function () {
    var block = eachYearOfInterval.bind(
      null,
      {
        start: new Date(2014, 9 /* Oct */, 12),
        end: new Date(NaN)
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function () {
    var block = eachYearOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = eachYearOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12)
      // $ExpectedMistake
    }, { additionalDigits: NaN })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(eachYearOfInterval.bind(null), TypeError)
  })
})
