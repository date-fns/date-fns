// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import roundToNearestMinutes from '.'

describe('roundToNearestMinutes', function() {
  it('rounds given date to the nearest minute by default', function() {
    var result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 16, 16)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 16, 0))
  })

  it('accepts a timestamp', function() {
    var result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 16).getTime()
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 13, 0))
  })

  it('rounds to the closest x minutes if nearestTo is provided', function() {
    var result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30),
      { nearestTo: 4 }
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 12, 0))
  })

  it('rounds up >=30 seconds for nearestTo=1', function() {
    var result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 30)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 14, 0))
  })

  it('rounds down <30 seconds for nearestTo=1', function() {
    var result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 29, 999)
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 13, 0))
  })

  it('does not mutate the original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 10, 10, 99)
    roundToNearestMinutes(date)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 10, 10, 99))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = roundToNearestMinutes(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `TypeError` exception if passed less than 1 argument', function() {
    assert.throws(roundToNearestMinutes.bind(null), TypeError)
  })

  it('throws `RangeError` if nearestTo is not between 1 and 30', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 10, 30)
    assert.throws(
      roundToNearestMinutes.bind(null, date, { nearestTo: 31 }),
      RangeError
    )
    assert.throws(
      roundToNearestMinutes.bind(null, date, { nearestTo: 0 }),
      RangeError
    )
  })
})
