// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfSecond from '.'

describe('endOfSecond', function () {
  it('returns the date with the time setted to the last millisecond before a second ends', function () {
    var date = new Date(2014, 11, 1, 22, 15, 30)
    var result = endOfSecond(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('accepts a string', function () {
    var result = endOfSecond('2014-12-01T13:00:00.000Z')
    assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 0, 999)))
  })

  it('accepts a timestamp', function () {
    var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 45, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15, 15, 300)
    endOfSecond(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15, 15, 300))
  })
})
