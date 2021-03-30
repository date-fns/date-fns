// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setDate from '.'

describe('setDate', function() {
  it('sets the day of the month', function() {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), 30)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a timestamp', function() {
    const result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })

  it('converts a fractional number to an integer', function() {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), 30.3)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = setDate(new Date(2014, 8 /* Sep */, 1), '30')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setDate(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setDate.bind(null), TypeError)
    assert.throws(setDate.bind(null, 1), TypeError)
  })
})
