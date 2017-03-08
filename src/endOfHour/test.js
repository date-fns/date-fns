// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfHour from '.'

describe('endOfHour', function () {
  it('returns the date with the time setted to the last millisecond before an hour ends', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11, 1, 13).toISOString()
    var result = endOfHour(date)
    assert.deepEqual(result, new Date(2014, 11, 1, 13, 59, 59, 999))
  })

  it('accepts a timestamp', function () {
    var result = endOfHour(new Date(2014, 11, 1, 22, 15).getTime())
    assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    endOfHour(date)
    assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })
})
