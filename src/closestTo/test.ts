/* eslint-env mocha */

import assert from 'assert'
import closestTo from '.'

describe('closestTo', () => {
  it('returns the date from the given array closest to the given date', () => {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ])
    assert.deepStrictEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('works if the closest date from the given array is before the given date', () => {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    const result = closestTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
    ])
    assert.deepStrictEqual(
      result,
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900)
    )
  })

  it('accepts timestamps', () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime(),
    ])
    assert.deepStrictEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if the given array is empty', () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestTo(date, [])
    assert.deepStrictEqual(result, undefined)
  })

  it('returns `Invalid Date` if the given date is `Invalid Date`', () => {
    const date = new Date(NaN)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ])

    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', () => {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2),
    ])

    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if any value in the given array is undefined', () => {
    const date = new Date(2014, 6 /* Jul */, 2)
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      // @ts-expect-error
      undefined,
      new Date(2012, 6 /* Jul */, 2),
    ])

    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('converts Array-like objects into Array', () => {
    const date = new Date(2014, 6 /* Jul */, 2)
    const object = {
      '0': new Date(2015, 7 /* Aug */, 31),
      '1': new Date(2012, 6 /* Jul */, 2),
      length: 2,
    }
    const result = closestTo(
      date,
      // @ts-expect-error
      object
    )
    assert.deepStrictEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if second argument is undefined', () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestTo(
      date,
      // @ts-expect-error
      undefined
    )
    assert.deepStrictEqual(result, undefined)
  })

  it('returns undefined if the given array is null', () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime()
    const result = closestTo(
      date,
      // @ts-expect-error
      null
    )
    assert.deepStrictEqual(result, undefined)
  })
})
