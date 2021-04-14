// @flow
/* eslint-env mocha */

import assert from 'assert'
import isWithinInterval from '.'

describe('isWithinInterval', function() {
  it('returns true if the given date in within the given interval', function() {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31)
    })
    assert(result === true)
  })

  it('returns true if the given date has same time as the left boundary of the interval', function() {
    const result = isWithinInterval(new Date(2014, 8 /* Sep */, 1), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31)
    })
    assert(result === true)
  })

  it('returns true if the given date has same time as the right boundary of the interval', function() {
    const result = isWithinInterval(new Date(2014, 11 /* Dec */, 31), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31)
    })
    assert(result === true)
  })

  it('returns true if the given date and the both boundaries are the same', function() {
    const result = isWithinInterval(new Date(2014, 11 /* Dec */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(2014, 11 /* Dec */, 31)
    })
    assert(result === true)
  })

  it('returns false if the given date is outside of the interval', function() {
    const result = isWithinInterval(new Date(2014, 1 /* Feb */, 11), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31)
    })
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31).getTime(), {
      start: new Date(2014, 8 /* Sep */, 1).getTime(),
      end: new Date(2014, 11 /* Dec */, 31).getTime()
    })
    assert(result === true)
  })

  it('throws an exception if the start date is after the end date', function() {
    const block = isWithinInterval.bind(null, new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(2014, 8 /* Sep */, 1)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function() {
    // @ts-expect-error
    const block = isWithinInterval.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      undefined
    )
    assert.throws(block, TypeError)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isWithinInterval(new Date(NaN), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31)
    })
    assert(result === false)
  })

  it('throws an exception if the start date is `Invalid Date`', function() {
    const block = isWithinInterval.bind(null, new Date(2014, 9 /* Oct */, 31), {
      start: new Date(NaN),
      end: new Date(2014, 8 /* Sep */, 1)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function() {
    const block = isWithinInterval.bind(null, new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(isWithinInterval.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(isWithinInterval.bind(null, 1), TypeError)
  })
})
