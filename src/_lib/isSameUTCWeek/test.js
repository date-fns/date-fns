// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameUTCWeek from '.'

describe('isSameUTCWeek', function() {
  it('returns true if the given dates have the same week', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4))
    )
    assert(result === true)
  })

  it('returns false if the given dates have different weeks', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 30)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4))
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      { weekStartsOn: 1 }
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {
        locale: {
          options: { weekStartsOn: 1 }
        }
      }
    )
    assert(result === false)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 }
        }
      }
    )
    assert(result === false)
  })

  it('implicitly converts options', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      { weekStartsOn: '1' }
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    const result = isSameUTCWeek(
      Date.UTC(2014, 7 /* Aug */, 31),
      Date.UTC(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    const result = isSameUTCWeek(
      new Date(NaN),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    const result = isSameUTCWeek(
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    const result = isSameUTCWeek(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    const block = isSameUTCWeek.bind(
      null,
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isSameUTCWeek.bind(null, 1), TypeError)
  })
})
