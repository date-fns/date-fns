// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setSeconds from '.'

describe('setSeconds', function () {
  it('sets the seconds', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts a string', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 18))
  })

  it('accepts a timestamp', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '45')
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    setSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = setSeconds(new Date(NaN), 45)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = setSeconds.bind(null, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setSeconds.bind(null), TypeError)
    assert.throws(setSeconds.bind(null, 1), TypeError)
  })
})
