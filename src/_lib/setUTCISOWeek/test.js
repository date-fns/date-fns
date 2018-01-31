// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setUTCISOWeek from '.'

describe('setUTCISOWeek', function () {
  it('sets the ISO week', function () {
    var result = setUTCISOWeek(new Date(Date.UTC(2004, 7 /* Aug */, 7)), 53)
    assert.deepEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('accepts a string', function () {
    var result = setUTCISOWeek(new Date(Date.UTC(2009, 11 /* Dec */, 2)).toISOString(), 1)
    assert.deepEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 31)))
  })

  it('accepts a timestamp', function () {
    var result = setUTCISOWeek(new Date(Date.UTC(2009, 11 /* Dec */, 2)).getTime(), 1)
    assert.deepEqual(result, new Date(Date.UTC(2008, 11 /* Dec */, 31)))
  })

  it('implicitly converts number arguments', function () {
    var result = setUTCISOWeek(new Date(Date.UTC(2004, 7 /* Aug */, 7)), '53')
    assert.deepEqual(result, new Date(Date.UTC(2005, 0 /* Jan */, 1)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 2))
    setUTCISOWeek(date, 52)
    assert.deepEqual(date, new Date(Date.UTC(2014, 6 /* Jul */, 2)))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(4, 0 /* Jan */, 4)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(4, 11 /* Dec */, 26)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = setUTCISOWeek(initialDate, 52)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setUTCISOWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setUTCISOWeek(new Date(2004, 7 /* Aug */, 7), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var block = setUTCISOWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(setUTCISOWeek.bind(null, 1), TypeError)
  })
})
