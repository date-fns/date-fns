// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subDays from '.'

describe('subDays', function() {
  it('subtracts the given number of days', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts a timestamp', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('converts a fractional number to an integer', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1), 10.85)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = subDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = subDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = subDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subDays.bind(null), TypeError)
    assert.throws(subDays.bind(null, 1), TypeError)
  })
})
