// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subYears from '.'

describe('utc/subYears', function () {
  it('subtracts the given number of years', function () {
    var result = subYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 5)
    assert.deepEqual(result, new Date(Date.UTC(2009, 8 /* Sep */, 1)))
  })

  it('accepts a string', function () {
    var result = subYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)).toISOString(), 12)
    assert.deepEqual(result, new Date(Date.UTC(2002, 8 /* Sep */, 1)))
  })

  it('accepts a timestamp', function () {
    var result = subYears(Date.UTC(2014, 8 /* Sep */, 1), 12)
    assert.deepEqual(result, new Date(Date.UTC(2002, 8 /* Sep */, 1)))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), '5')
    assert.deepEqual(result, new Date(Date.UTC(2009, 8 /* Sep */, 1)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    subYears(date, 12)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('handles the leap years properly', function () {
    var result = subYears(new Date(Date.UTC(2016, 1 /* Feb */, 29)), 1)
    assert.deepEqual(result, new Date(Date.UTC(2015, 1 /* Feb */, 28)))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(0, 1 /* Feb */, 29)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(-1, 1 /* Feb */, 28)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = subYears(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = subYears(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = subYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = subYears.bind(null, new Date(Date.UTC(2014, 8 /* Sep */, 1)), 5, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(subYears.bind(null), TypeError)
    assert.throws(subYears.bind(null, 1), TypeError)
  })
})
