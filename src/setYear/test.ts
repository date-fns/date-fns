// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setYear from '.'

describe('setYear', function() {
  it('sets the year', function() {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), 2013)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function() {
    const result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), 2013.987654321)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = setYear(new Date(2014, 8 /* Sep */, 1), '2013')
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    setYear(date, 2011)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setYear(new Date(NaN), 2013)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setYear.bind(null), TypeError)
    assert.throws(setYear.bind(null, 1), TypeError)
  })
})
