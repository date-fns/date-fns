// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setTimeZone from '.'

describe('setTimeZone', function () {
  it('returns the UTC time of the date in the time zone for a date input and IANA tz', function () {
    var result = setTimeZone(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
    assert.deepEqual(result.toISOString(), '2014-06-25T17:00:00.000Z')
  })

  it('returns the UTC time of the date in the time zone for a string and IANA tz', function () {
    var result = setTimeZone('2014-06-25T10:00:00', 'America/Los_Angeles')
    assert.deepEqual(result.toISOString(), '2014-06-25T17:00:00.000Z')
  })

  it('returns the UTC time of the date for a UTC input', function () {
    var result = setTimeZone(new Date(2014, 5, 25, 10, 0, 0), 'UTC')
    assert.deepEqual(result.toISOString(), '2014-06-25T10:00:00.000Z')
  })

  it('returns the UTC time of the date in the time zone for a date input and tz offset', function () {
    var result = setTimeZone(new Date(2014, 5, 25, 10, 0, 0), '+0400')
    assert.deepEqual(result.toISOString(), '2014-06-25T06:00:00.000Z')
  })

  it('returns the UTC time of the date in the time zone for a string and tz offset', function () {
    var result = setTimeZone('2014-06-25T10:00:00', '-02:00')
    assert.deepEqual(result.toISOString(), '2014-06-25T12:00:00.000Z')
  })

  it('returns the UTC time of the date for the Z tz', function () {
    var result = setTimeZone(new Date(2014, 5, 25, 10, 0, 0), 'Z')
    assert.deepEqual(result.toISOString(), '2014-06-25T10:00:00.000Z')
  })
})
