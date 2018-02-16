// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addYears from '.'

describe('utc/addYears', function () {
  it('adds the given number of years', function () {
    var result = addYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 5)
    assert.deepEqual(result, new Date(Date.UTC(2019, 8 /* Sep */, 1)))
  })

  it('accepts a string', function () {
    var result = addYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)).toISOString(), 12)
    assert.deepEqual(result, new Date(Date.UTC(2026, 8 /* Sep */, 1)))
  })

  it('accepts a timestamp', function () {
    var result = addYears(Date.UTC(2014, 8 /* Sep */, 1), 12)
    assert.deepEqual(result, new Date(Date.UTC(2026, 8 /* Sep */, 1)))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), '5')
    assert.deepEqual(result, new Date(Date.UTC(2019, 8 /* Sep */, 1)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    addYears(date, 12)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('handles the leap years properly', function () {
    var result = addYears(new Date(Date.UTC(2016, 1 /* Feb */, 29)), 1)
    assert.deepEqual(result, new Date(Date.UTC(2017, 1 /* Feb */, 28)))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(0, 1 /* Feb */, 29)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(1, 1 /* Feb */, 28)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = addYears(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addYears(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = addYears.bind(null, new Date(Date.UTC(2014, 8 /* Sep */, 1)), 5, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(addYears.bind(null), TypeError)
    assert.throws(addYears.bind(null, 1), TypeError)
  })
})
