// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addBusinessDays from '.'

describe('addBusinessDays', function() {
  it('adds the given number of business days', function() {
    var result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('accepts a timestamp', function() {
    var result = addBusinessDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('converts a fractional number to an integer', function() {
    var result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addBusinessDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addBusinessDays.bind(null), TypeError)
    assert.throws(addBusinessDays.bind(null, 1), TypeError)
  })
})
