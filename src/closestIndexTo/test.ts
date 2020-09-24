// @flow
/* eslint-env mocha */

import assert from 'assert'
import closestIndexTo from '.'

describe('closestIndexTo', function() {
  it('returns the date index from the given array closest to the given date', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert.strictEqual(result, 0)
  })

  it('works if the closest date from the given array is before the given date', function() {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    const result = closestIndexTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10)
    ])
    assert.strictEqual(result, 1)
  })

  it('accepts timestamps', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime()
    ])
    assert.strictEqual(result, 0)
  })

  it('returns undefined if the given array is empty', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestIndexTo(date, [])
    assert.strictEqual(result, undefined)
  })

  it('returns NaN if the given date is `Invalid Date`', function() {
    const date = new Date(NaN)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(isNaN(result as number))
  })

  it('returns NaN if any date in the given array is `Invalid Date`', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(isNaN(result as number))
  })

  it('returns NaN if any value in the given array is undefined', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      //@ts-expect-error
      undefined,
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert(isNaN(result as number))
  })

  it('converts Array-like objects into Array', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const object = {
      '0': new Date(2015, 7 /* Aug */, 31),
      '1': new Date(2012, 6 /* Jul */, 2),
      length: 2
    }
    //@ts-expect-error
    const result = closestIndexTo(date, object)
    assert.strictEqual(result, 0)
  })

  it('returns undefined if second argument is undefined', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    //@ts-expect-error
    const result = closestIndexTo(date, undefined)
    assert.deepStrictEqual(result, undefined)
  })

  it('returns undefined if null is passed as second argument', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    //@ts-expect-error
    const result = closestIndexTo(date, null)
    assert.deepStrictEqual(result, undefined)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    //@ts-expect-error
    assert.throws(closestIndexTo.bind(null), TypeError)
    //@ts-expect-error
    assert.throws(closestIndexTo.bind(null, 1), TypeError)
  })
})
