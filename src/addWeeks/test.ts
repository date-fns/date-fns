// @flow
/* eslint-env mocha */

import assert from 'assert'
import addWeeks from '.'

describe('addWeeks', function() {
  it('adds the given number of weeks', function() {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('accepts a timestamp', function() {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('converts a fractional number to an integer', function() {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4.95)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), '4')
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    addWeeks(date, 2)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addWeeks(new Date(NaN), 4)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addWeeks(new Date(2014, 8 /* Sep */, 1), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addWeeks.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addWeeks.bind(null, 1), TypeError)
  })
})
