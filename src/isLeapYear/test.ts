// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLeapYear from '.'

describe('isLeapYear', function() {
  it('returns true if the given date is in the leap year', function() {
    const result = isLeapYear(new Date(2012, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if the given date is not in the leap year', function() {
    const result = isLeapYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for the years divisible by 100 but not by 400', function() {
    const result = isLeapYear(new Date(2100, 6 /* Jul */, 2))
    assert(result === false)
  })

  it('works for the years divisible by 400', function() {
    const result = isLeapYear(new Date(2000, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('accepts a timestamp', function() {
    var date = new Date(2012, 6 /* Jul */, 2).getTime()
    const result = isLeapYear(date)
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    const result = isLeapYear(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isLeapYear.bind(null), TypeError)
  })
})
