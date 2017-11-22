// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import closestIndexTo from '.'

describe('utc/closestIndexTo', function () {
  it('returns the date index from the given array closest to the given date', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    var result = closestIndexTo(date, [
      new Date(Date.UTC(2015, 7 /* Aug */, 31)),
      new Date(Date.UTC(2012, 6 /* Jul */, 2))
    ])
    assert.equal(result, 0)
  })

  it('works if the closest date from the given array is before the given date', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2, 6, 30, 4, 500))
    var result = closestIndexTo(date, [
      new Date(Date.UTC(2014, 6 /* Jul */, 2, 6, 30, 5, 900)),
      new Date(Date.UTC(2014, 6 /* Jul */, 2, 6, 30, 3, 900)),
      new Date(Date.UTC(2014, 6 /* Jul */, 2, 6, 30, 10))
    ])
    assert.equal(result, 1)
  })

  it('accepts strings', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2)).toISOString()
    var result = closestIndexTo(date, [
      new Date(Date.UTC(2012, 6 /* Jul */, 2)).toISOString(),
      new Date(Date.UTC(2015, 7 /* Aug */, 31)).toISOString()
    ])
    assert.equal(result, 1)
  })

  it('accepts timestamps', function () {
    var date = Date.UTC(2014, 6 /* Jul */, 2)
    var result = closestIndexTo(date, [
      Date.UTC(2015, 7 /* Aug */, 31),
      Date.UTC(2012, 6 /* Jul */, 2)
    ])
    assert.equal(result, 0)
  })

  it('returns undefined if the given array is empty', function () {
    var date = Date.UTC(2014, 6 /* Jul */, 2)
    var result = closestIndexTo(date, [])
    assert(result === undefined)
  })

  it('returns NaN if the given date is `Invalid Date`', function () {
    var date = new Date(NaN)
    var result = closestIndexTo(date, [
      new Date(Date.UTC(2015, 7 /* Aug */, 31)),
      new Date(Date.UTC(2012, 6 /* Jul */, 2))
    ])
    assert(isNaN(result))
  })

  it('returns NaN if any date in the given array is `Invalid Date`', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    var result = closestIndexTo(date, [
      new Date(Date.UTC(2015, 7 /* Aug */, 31)),
      new Date(NaN),
      new Date(Date.UTC(2012, 6 /* Jul */, 2))
    ])
    assert(isNaN(result))
  })

  it('returns NaN if any value in the given array is undefined', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    var result = closestIndexTo(date, [
      new Date(Date.UTC(2015, 7 /* Aug */, 31)),
      // $ExpectedMistake
      undefined,
      new Date(Date.UTC(2012, 6 /* Jul */, 2))
    ])
    assert(isNaN(result))
  })

  it('converts Array-like objects into Array', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    var object = {
      '0': new Date(Date.UTC(2015, 7 /* Aug */, 31)),
      '1': new Date(Date.UTC(2012, 6 /* Jul */, 2)),
      length: 2
    }
    // $ExpectedMistake
    var result = closestIndexTo(date, object)
    assert.equal(result, 0)
  })

  it('converts undefined into empty array', function () {
    var date = Date.UTC(2014, 6 /* Jul */, 2)
    // $ExpectedMistake
    var result = closestIndexTo(date, undefined)
    assert(result === undefined)
  })

  it('converts null into empty array', function () {
    var date = Date.UTC(2014, 6 /* Jul */, 2)
    // $ExpectedMistake
    var result = closestIndexTo(date, null)
    assert(result === undefined)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    var block = closestIndexTo.bind(null, date, [
      new Date(Date.UTC(2015, 7 /* Aug */, 31)),
      new Date(Date.UTC(2012, 6 /* Jul */, 2))
    // $ExpectedMistake
    ], {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(closestIndexTo.bind(null), TypeError)
    assert.throws(closestIndexTo.bind(null, 1), TypeError)
  })
})
