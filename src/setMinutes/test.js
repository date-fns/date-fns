// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setMinutes from '.'

describe('setMinutes', function () {
  it('sets the minutes', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('accepts a string', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 18))
  })

  it('accepts a timestamp', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 5))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), '45')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30)
    setMinutes(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setMinutes(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setMinutes.bind(null, new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setMinutes.bind(null), TypeError)
    assert.throws(setMinutes.bind(null, 1), TypeError)
  })
})
