// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addSeconds from '.'

describe('addSeconds', function () {
  it('adds the given number of seconds', function () {
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30))
  })

  it('accepts a string', function () {
    var result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20))
  })

  it('accepts a timestamp', function () {
    var result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 20))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 5), '30')
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 35))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    addSeconds(date, 15)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addSeconds(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = addSeconds.bind(null, new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(addSeconds.bind(null), TypeError)
    assert.throws(addSeconds.bind(null, 1), TypeError)
  })
})
