// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachDay from '.'

describe('eachDay', function () {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function () {
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

  it('handles the dates that are not starts of days', function () {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6, 6, 35),
      new Date(2014, 9 /* Oct */, 12, 22, 15)
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

  it('returns one day if the both arguments are on the same day', function () {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15)
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6)
    ])
  })

  it('returns one day if the both arguments are the same', function () {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 14)
    )
    assert.deepEqual(result, [
      new Date(2014, 9 /* Oct */, 6)
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
