// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setHours from '.'

describe('setHours', function() {
  it('sets the amount of hours', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('accepts a timestamp', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 5))
  })

  it('converts a fractional number to an integer', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4.123)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), '4')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1, 11)
    setHours(date, 12)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setHours(new Date(NaN), 4)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setHours.bind(null), TypeError)
    assert.throws(setHours.bind(null, 1), TypeError)
  })
})
