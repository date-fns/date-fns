// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWithinRange from '.'

describe('isWithinRange', function () {
  it('returns true if the given date in within the given range', function () {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns true if the given date has same time as the left boundary of the range', function () {
    var result = isWithinRange(
      new Date(2014, 8 /* Sep */, 1),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns true if the given date has same time as the right boundary of the range', function () {
    var result = isWithinRange(
      new Date(2014, 11 /* Dec */, 31),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns true if the given date and the both boundaries are the same', function () {
    var result = isWithinRange(
      new Date(2014, 11 /* Dec */, 31),
      {start: new Date(2014, 11 /* Dec */, 31), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === true)
  })

  it('returns false if the given date is outside of the range', function () {
    var result = isWithinRange(
      new Date(2014, 1 /* Feb */, 11),
      {start: new Date(2014, 8 /* Sep */, 1), end: new Date(2014, 11 /* Dec */, 31)}
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).toISOString(),
      {start: new Date(2014, 8 /* Sep */, 1).toISOString(), end: new Date(2014, 11 /* Dec */, 31).toISOString()}
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).getTime(),
      {start: new Date(2014, 8 /* Sep */, 1).getTime(), end: new Date(2014, 11 /* Dec */, 31).getTime()}
    )
    assert(result === true)
  })

  it('throws an exception if the start date is after the end date', function () {
    var block = isWithinRange.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      {start: new Date(2014, 11 /* Dec */, 31), end: new Date(2014, 8 /* Sep */, 1)}
    )
    assert.throws(block)
  })
})
