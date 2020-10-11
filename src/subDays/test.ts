// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subDays from '.'

describe('subDays', function() {
  it('subtracts the given number of days', function() {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts a timestamp', function() {
    const result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('converts a fractional number to an integer', function() {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), 10.85)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    // @ts-expect-error
    const result = subDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    subDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = subDays(new Date(NaN), 10)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subDays.bind(null), TypeError)
    assert.throws(subDays.bind(null, 1), TypeError)
  })
})
