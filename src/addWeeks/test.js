// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addWeeks from '.'

describe('addWeeks', function() {
  it('adds the given number of weeks', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('accepts a timestamp', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('converts a fractional number to an integer', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4.95)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), '4')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addWeeks(date, 2)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addWeeks(new Date(NaN), 4)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addWeeks.bind(null), TypeError)
    assert.throws(addWeeks.bind(null, 1), TypeError)
  })
})
