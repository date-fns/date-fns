// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import subMilliseconds from '.'

describe('subMilliseconds', function () {
  it('subtracts the given number of milliseconds', function () {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('accepts a string', function () {
    var result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('accepts a timestamp', function () {
    var result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), '750')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    subMilliseconds(date, 250)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = subMilliseconds(new Date(NaN), 750)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    // $ExpectedMistake
    var block = subMilliseconds.bind(null, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(subMilliseconds.bind(null), TypeError)
    assert.throws(subMilliseconds.bind(null, 1), TypeError)
  })
})
