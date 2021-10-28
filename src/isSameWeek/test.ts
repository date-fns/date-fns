/* eslint-env mocha */

import assert from 'assert'
import isSameWeek from '.'

describe('isSameWeek', () => {
  it('returns true if the given dates have the same week', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result)
  })

  it('returns false if the given dates have different weeks', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(!result)
  })

  it('allows to specify which day is the first day of the week', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: 1 }
    )
    assert(!result)
  })

  it('allows to specify which day is the first day of the week in locale', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {
        locale: {
          options: { weekStartsOn: 1 },
        },
      }
    )
    assert(!result)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 },
        },
      }
    )
    assert(!result)
  })

  it('implicitly converts options', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      // @ts-expect-error
      { weekStartsOn: '1' }
    )
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameWeek(new Date(NaN), new Date(1989, 6 /* Jul */, 10))
    assert(!result)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameWeek(new Date(1987, 1 /* Feb */, 11), new Date(NaN))
    assert(!result)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameWeek(new Date(NaN), new Date(NaN))
    assert(!result)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    // @ts-expect-error
    const block = isSameWeek.bind(
      null,
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })
})
