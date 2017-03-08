// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMinute from '.'

describe('endOfMinute', function () {
  it('returns the date with the time setted to the last millisecond before a minute ends', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = endOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('accepts a string', function () {
    var result = endOfMinute('2014-12-01T13:00:00.000Z')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 59, 999)))
  })

  it('accepts a timestamp', function () {
    var result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    endOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })
})
