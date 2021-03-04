// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameWeek from '.'

describe('isSameWeek', function() {
  it('returns true if the given dates have the same week', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different weeks', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: 1 }
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {
        // @ts-expect-error
        locale: {
          options: { weekStartsOn: 1 }
        }
      }
    )
    assert(result === false)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {
        weekStartsOn: 1,
        // @ts-expect-error
        locale: {
          options: { weekStartsOn: 0 }
        }
      }
    )
    assert(result === false)
  })

  it('implicitly converts options', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      // @ts-expect-error
      { weekStartsOn: '1' }
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isSameWeek(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isSameWeek(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isSameWeek(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    const block = isSameWeek.bind(
      null,
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameWeek.bind(null), TypeError)
    assert.throws(isSameWeek.bind(null, 1), TypeError)
  })
})
