// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addQuarters from '.'

describe('utc/addQuarters', function () {
  it('adds the given number of quarters', function () {
    var result = addQuarters(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 1)
    assert.deepEqual(result, new Date(Date.UTC(2014, 11 /* Dec */, 1)))
  })

  it('accepts a string', function () {
    var result = addQuarters(new Date(Date.UTC(2014, 8 /* Sep */, 1)).toISOString(), 4)
    assert.deepEqual(result, new Date(Date.UTC(2015, 8 /* Sep */, 1)))
  })

  it('accepts a timestamp', function () {
    var result = addQuarters(Date.UTC(2014, 8 /* Sep */, 1), 4)
    assert.deepEqual(result, new Date(Date.UTC(2015, 8 /* Sep */, 1)))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addQuarters(new Date(Date.UTC(2014, 8 /* Sep */, 1)), '1')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11 /* Dec */, 1)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    addQuarters(date, 4)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(Date.UTC(2014, 11 /* Dec */, 31))
    var result = addQuarters(date, 3)
    assert.deepEqual(result, new Date(Date.UTC(2015, 8 /* Sep */, 30)))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(-1, 10 /* Nov */, 30)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(0, 1 /* Feb */, 29)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = addQuarters(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addQuarters(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addQuarters(new Date(Date.UTC(2014, 8 /* Sep */, 1)), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = addQuarters.bind(null, new Date(Date.UTC(2014, 8 /* Sep */, 1)), 1, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(addQuarters.bind(null), TypeError)
    assert.throws(addQuarters.bind(null, 1), TypeError)
  })
})
