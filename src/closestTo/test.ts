// @flow
/* eslint-env mocha */

import assert from 'assert'
import closestTo from '.'

describe('closestTo', function() {
  it('returns the date from the given array closest to the given date', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    assert.deepStrictEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('works if the closest date from the given array is before the given date', function() {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    const result = closestTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10)
    ])
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900)
    )
  })

  it('accepts timestamps', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime()
    ])
    assert.deepStrictEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if the given array is empty', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestTo(date, [])
    assert.deepStrictEqual(result, undefined)
  })

  it('returns `Invalid Date` if the given date is `Invalid Date`', function() {
    const date = new Date(NaN)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])

    assert(result instanceof Date && isNaN(Number(result)))
  })

  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2)
    ])

    assert(result instanceof Date && isNaN(Number(result)))
  })

  it('returns `Invalid Date` if any value in the given array is undefined', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      //@ts-expect-error
      undefined,
      new Date(2012, 6 /* Jul */, 2)
    ])

    assert(result instanceof Date && isNaN(Number(result)))
  })

  it('converts Array-like objects into Array', function() {
    const date = new Date(2014, 6 /* Jul */, 2)
    const object = {
      '0': new Date(2015, 7 /* Aug */, 31),
      '1': new Date(2012, 6 /* Jul */, 2),
      length: 2
    }
    //@ts-expect-error
    const result = closestTo(date, object)
    assert.deepStrictEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if second argument is undefined', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    //@ts-expect-error
    const result = closestTo(date, undefined)
    assert.deepStrictEqual(result, undefined)
  })

  it('returns undefined if the given array is null', function() {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    //@ts-expect-error
    const result = closestTo(date, null)
    assert.deepStrictEqual(result, undefined)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    //@ts-expect-error
    assert.throws(closestTo.bind(null), TypeError)
    //@ts-expect-error
    assert.throws(closestTo.bind(null, 1), TypeError)
  })
})
