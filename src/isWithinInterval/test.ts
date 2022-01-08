/* eslint-env mocha */

import assert from 'assert'
import isWithinInterval from '.'

describe('isWithinInterval', () => {
  it('returns true if the given date in within the given interval', () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    })
    assert(result === true)
  })

  it('returns true if the given date has same time as the left boundary of the interval', () => {
    const result = isWithinInterval(new Date(2014, 8 /* Sep */, 1), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    })
    assert(result === true)
  })

  it('returns true if the given date has same time as the right boundary of the interval', () => {
    const result = isWithinInterval(new Date(2014, 11 /* Dec */, 31), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    })
    assert(result === true)
  })

  it('returns true if the given date and the both boundaries are the same', () => {
    const result = isWithinInterval(new Date(2014, 11 /* Dec */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(2014, 11 /* Dec */, 31),
    })
    assert(result === true)
  })

  it('returns false if the given date is outside of the interval', () => {
    const result = isWithinInterval(new Date(2014, 1 /* Feb */, 11), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    })
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31).getTime(), {
      start: new Date(2014, 8 /* Sep */, 1).getTime(),
      end: new Date(2014, 11 /* Dec */, 31).getTime(),
    })
    assert(result === true)
  })

  it('throws an exception if the start date is after the end date', () => {
    const block = isWithinInterval.bind(null, new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(2014, 8 /* Sep */, 1),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', () => {
    const block = () =>
      isWithinInterval(
        new Date(2014, 9 /* Oct */, 31),
        // @ts-expect-error
        undefined
      )
    assert.throws(block, TypeError)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isWithinInterval(new Date(NaN), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    })
    assert(result === false)
  })

  it('throws an exception if the start date is `Invalid Date`', () => {
    const block = isWithinInterval.bind(null, new Date(2014, 9 /* Oct */, 31), {
      start: new Date(NaN),
      end: new Date(2014, 8 /* Sep */, 1),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', () => {
    const block = isWithinInterval.bind(null, new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(NaN),
    })
    assert.throws(block, RangeError)
  })
})
