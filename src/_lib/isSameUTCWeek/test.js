// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameUTCWeek from '.'

describe('isSameUTCWeek', function () {
  it('returns true if the given dates have the same week', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4))
    )
    assert(result === true)
  })

  it('returns false if the given dates have different weeks', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 30)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4))
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {weekStartsOn: 1}
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {
        locale: {
          options: {weekStartsOn: 1}
        }
      }
    )
    assert(result === false)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {
        weekStartsOn: 1,
        locale: {
          options: {weekStartsOn: 0}
        }
      }
    )
    assert(result === false)
  })

  it('implicitly converts options', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {weekStartsOn: '1'}
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(2014, 7 /* Aug */, 31)).toISOString(),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameUTCWeek(
      Date.UTC(2014, 7 /* Aug */, 31),
      Date.UTC(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameUTCWeek(
      new Date(NaN),
      new Date(Date.UTC(1989, 6 /* Jul */, 10))
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameUTCWeek(
      new Date(Date.UTC(1987, 1 /* Feb */, 11)),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function () {
    var result = isSameUTCWeek(
      new Date(NaN),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    var block = isSameUTCWeek.bind(
      null,
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {weekStartsOn: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = isSameUTCWeek.bind(
      null,
      new Date(Date.UTC(2014, 7 /* Aug */, 31)),
      new Date(Date.UTC(2014, 8 /* Sep */, 4)),
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isSameUTCWeek.bind(null, 1), TypeError)
  })
})
