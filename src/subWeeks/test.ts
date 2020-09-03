// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subWeeks from '.'

describe('subWeeks', function() {
  it('subtracts the given number of weeks', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('accepts a timestamp', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25))
  })

  it('converts a fractional number to an integer', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4.2)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), '4')
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subWeeks(date, 2)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = subWeeks(new Date(NaN), 4)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(subWeeks.bind(null), TypeError)
    assert.throws(subWeeks.bind(null, 1), TypeError)
  })
})
