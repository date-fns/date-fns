/* eslint-env mocha */

var assert = require('power-assert')
var eachDay = require('./')

describe('eachDay', function () {
  it('returns an array with the start of the each day within the specified range', function () {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 12)
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('accepts strings', function () {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6).toISOString(),
      new Date(2014, 9 /* Oct */, 12).toISOString()
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('accepts timestamps', function () {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6).getTime(),
      new Date(2014, 9 /* Oct */, 12).getTime()
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ])
  })

  it('throws an exception if the start date is after the end date', function () {
    var block = eachDay.bind(
      null,
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 6)
    )
    assert.throws(block)
  })
})

