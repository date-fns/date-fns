// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWithinInterval from '.'

describe('isWithinInterval', function () {
  it('returns true if the given date in within the given interval', function () {
    var result = isWithinInterval(
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns true if the given date has same time as the left boundary of the interval', function () {
    var result = isWithinInterval(
      new Date(2014, 8 /* Sep */, 1),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns true if the given date has same time as the right boundary of the interval', function () {
    var result = isWithinInterval(
      new Date(2014, 11 /* Dec */, 31),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns true if the given date and the both boundaries are the same', function () {
    var result = isWithinInterval(
      new Date(2014, 11 /* Dec */, 31),
      {start: new Date(2014, 11 /* Dec */, 31), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns false if the given date is outside of the interval', function () {
    var result = isWithinInterval(
      new Date(2014, 1 /* Feb */, 11),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWithinInterval(
      new Date(2014, 9 /* Oct */, 31).toISOString(),
      {start: new Date(2014, 8 /* Sep */, 1).toISOString(), end: new Date(2014, 11 /* Dec */, 31).toISOString()}
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWithinInterval(
      new Date(2014, 9 /* Oct */, 31).getTime(),
      {start: new Date(2014, 8 /* Sep */, 1).getTime(), end: new Date(2014, 11 /* Dec */, 31).getTime()}
    )
    assert(result === true)
  })

  it('throws an exception if the start date is after the end date', function () {
    var block = isWithinInterval.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(2014, 11 /* Dec */, 31), end: new Date(2014, 8 /* Sep */, 1)}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function () {
    var block = isWithinInterval.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('returns false if the given date is `Invalid Date`', function () {
    var result = isWithinInterval(
      new Date(NaN),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === false)
  })

  it('throws an exception if the start date is `Invalid Date`', function () {
    var block = isWithinInterval.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(NaN), end: new Date(2014, 8 /* Sep */, 1)}
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function () {
    var block = isWithinInterval.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(2014, 11 /* Dec */, 31), end: new Date(NaN)}
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = isWithinInterval.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)},
      // $ExpectedMistake
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(isWithinInterval.bind(null), TypeError)
    assert.throws(isWithinInterval.bind(null, 1), TypeError)
  })
})
