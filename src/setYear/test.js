// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setYear from '.'

describe('setYear', function () {
  it('sets the year', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1), 2013)
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016)
    assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setYear(new Date(2014, 8 /* Sep */, 1), '2013')
    assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setYear(date, 2011)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setYear(new Date(NaN), 2013)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setYear(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setYear.bind(null, new Date(2014, 8 /* Sep */, 1), 2013, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setYear.bind(null), TypeError)
    assert.throws(setYear.bind(null, 1), TypeError)
  })
})
