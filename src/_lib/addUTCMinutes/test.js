// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addUTCMinutes from '.'

describe('addUTCMinutes', function () {
  it('adds the given number of minutes', function () {
    var result = addUTCMinutes(new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)), 30)
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 30)))
  })

  it('accepts a string', function () {
    var result = addUTCMinutes(
      new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)).toISOString(), 20
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 20)))
  })

  it('accepts a timestamp', function () {
    var result = addUTCMinutes(
      new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)).getTime(), 20
    )
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 20)))
  })

  it('implicitly converts number arguments', function () {
    var result = addUTCMinutes(new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)), '30')
    assert.deepEqual(result, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 30)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0))
    addUTCMinutes(date, 25)
    assert.deepEqual(date, new Date(Date.UTC(2014, 6 /* Jul */, 10, 12, 0)))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addUTCMinutes(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addUTCMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    var block = addUTCMinutes.bind(null, new Date(2014, 6 /* Jul */, 10, 12, 0), 30, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(addUTCMinutes.bind(null, 1), TypeError)
  })
})
