// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import closestIndexTo from '.'

describe('closestIndexTo', function () {
  it('returns the date index from the given array closest to the given date', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ])
    assert.equal(result, 0)
  })

  it('works if the closest date from the given array is before the given date', function () {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    const result = closestIndexTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
    ])
    assert.equal(result, 1)
  })

  it('accepts timestamps', function () {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime(),
    ])
    assert.equal(result, 0)
  })

  it('returns undefined if the given array is empty', function () {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestIndexTo(date, [])
    assert(result == null)
  })

  it('returns NaN if the given date is `Invalid Date`', function () {
    const date = new Date(NaN)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ])
    assert(isNaN(result.getTime()))
  })

  it('returns NaN if any date in the given array is `Invalid Date`', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2),
    ])
    assert(isNaN(result.getTime()))
  })

  it('returns NaN if any value in the given array is undefined', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      // $ExpectedMistake
      undefined,
      new Date(2012, 6 /* Jul */, 2),
    ])
    assert(isNaN(result.getTime()))
  })

  it('converts Array-like objects into Array', function () {
    const date = new Date(2014, 6 /* Jul */, 2)
    const object = {
      '0': new Date(2015, 7 /* Aug */, 31),
      '1': new Date(2012, 6 /* Jul */, 2),
      length: 2,
    }
    // $ExpectedMistake
    const result = closestIndexTo(date, object)
    assert.equal(result, 0)
  })

  it('converts undefined into empty array', function () {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    const result = closestIndexTo(date, undefined)
    assert(result == null)
  })

  it('converts null into empty array', function () {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    const result = closestIndexTo(date, null)
    assert(result == null)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(closestIndexTo.bind(null), TypeError)
    assert.throws(closestIndexTo.bind(null, 1), TypeError)
  })
})
