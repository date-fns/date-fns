// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setDate from '.'

describe('setDate', function () {
  it('sets the day of the month', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1), 30)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a string', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 18))
  })

  it('accepts a timestamp', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setDate(new Date(2014, 8 /* Sep */, 1), '30')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setDate(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setDate(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setDate.bind(null, new Date(2014, 8 /* Sep */, 1), 30, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setDate.bind(null), TypeError)
    assert.throws(setDate.bind(null, 1), TypeError)
  })
})
