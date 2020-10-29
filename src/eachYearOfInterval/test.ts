// @flow
/* eslint-env mocha */

import assert from 'assert'
import eachYearOfInterval from '.'

describe('eachYearOfInterval', function() {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function() {
    const result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6),
      end: new Date(2017, 9 /* Oct */, 12)
    })
    assert.deepStrictEqual(result, [
      new Date(2012, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2017, 0 /* Jan */, 1)
    ])
  })

  it('accepts timestamps', function() {
    const result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6).getTime(),
      end: new Date(2017, 9 /* Oct */, 12).getTime()
    })
    assert.deepStrictEqual(result, [
      new Date(2012, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2017, 0 /* Jan */, 1)
    ])
  })

  it('handles the dates that are not starts of days', function() {
    const result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6, 6, 35),
      end: new Date(2017, 9 /* Oct */, 12, 22, 15)
    })
    assert.deepStrictEqual(result, [
      new Date(2012, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2017, 0 /* Jan */, 1)
    ])
  })

  it('returns one year if the both arguments are on the same year', function() {
    const result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 15)
    })
    assert.deepStrictEqual(result, [new Date(2014, 0 /* Jan */, 1)])
  })

  it('returns one year if the both arguments are the same', function() {
    const result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepStrictEqual(result, [new Date(2014, 0 /* Jan */, 1)])
  })

  it('throws an exception if the start date is after the end date', function() {
    const block = eachYearOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function() {
    const block = eachYearOfInterval.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function() {
    const block = eachYearOfInterval.bind(null, {
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function() {
    const block = eachYearOfInterval.bind(
      null,
      //@ts-expect-error
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    //@ts-expect-error
    assert.throws(eachYearOfInterval.bind(null), TypeError)
  })
})
