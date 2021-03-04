// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setSeconds from '.'

describe('setSeconds', function() {
  it('sets the seconds', function() {
    const result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts a timestamp', function() {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(),
      45
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('converts a fractional number to an integer', function() {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      45.54
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('implicitly converts number arguments', function() {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      // @ts-expect-error
      '45'
    )
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = setSeconds(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setSeconds.bind(null), TypeError)
    assert.throws(setSeconds.bind(null, 1), TypeError)
  })
})
