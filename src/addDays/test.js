// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addDays from '.'

describe('addDays', function () {
  it('adds the given number of days', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a string', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a timestamp', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addDays(new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    addDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = addDays.bind(null, new Date(2014, 8 /* Sep */, 1), 10, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(addDays.bind(null), TypeError)
    assert.throws(addDays.bind(null, 1), TypeError)
  })
})
