// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setISOWeek from '.'

describe('setISOWeek', function () {
  it('sets the ISO week', function () {
    var result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53)
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('accepts a string', function () {
    var result = setISOWeek(new Date(2009, 11 /* Dec */, 2).toISOString(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function () {
    var result = setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1)
    assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setISOWeek(new Date(2004, 7 /* Aug */, 7), '53')
    assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    setISOWeek(date, 52)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(4, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(4, 11 /* Dec */, 26)
    expectedResult.setHours(0, 0, 0, 0)
    var result = setISOWeek(initialDate, 52)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setISOWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setISOWeek(new Date(2004, 7 /* Aug */, 7), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setISOWeek.bind(null, new Date(2004, 7 /* Aug */, 7), 53, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setISOWeek.bind(null), TypeError)
    assert.throws(setISOWeek.bind(null, 1), TypeError)
  })
})
