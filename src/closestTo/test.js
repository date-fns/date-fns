// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import closestTo from '.'

describe('closestTo', function () {
  it('returns the date from the given array closest to the given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('works if the closest date from the given array is before the given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    var result = closestTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10)
    ])
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900))
  })

  it('accepts strings', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = closestTo(date, [
      new Date(2012, 6 /* Jul */, 2).toISOString(),
      new Date(2015, 7 /* Aug */, 31).toISOString()
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('accepts timestamps', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime()
    ])
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if the given array is empty', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = closestTo(date, [])
    assert(result === undefined)
  })

  it('returns `Invalid Date` if the given date is `Invalid Date`', function () {
    var date = new Date(NaN)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any value in the given array is undefined', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      // $ExpectedMistake
      undefined,
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('converts Array-like objects into Array', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var object = {
      '0': new Date(2015, 7 /* Aug */, 31),
      '1': new Date(2012, 6 /* Jul */, 2),
      length: 2
    }
    // $ExpectedMistake
    var result = closestTo(date, object)
    assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('converts undefined into empty array', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var result = closestTo(date, undefined)
    assert(result === undefined)
  })

  it('converts null into empty array', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var result = closestTo(date, null)
    assert(result === undefined)
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var block = closestTo.bind(null, date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    // $ExpectedMistake
    ], {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(closestTo.bind(null), TypeError)
    assert.throws(closestTo.bind(null, 1), TypeError)
  })
})
