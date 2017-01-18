// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getTime from './'

describe('getTime', function () {
  it('returns the timestamp of the given date', function () {
    var timestamp = 1483228800000
    var result = getTime(new Date(timestamp))
    assert(result === timestamp)
  })

  it('accepts a string', function () {
    var timestamp = 1484503736150
    var result = getTime(new Date(timestamp).toISOString())
    assert(result === timestamp)
  })

  it('accepts a timestamp (and returns it unchanged)', function () {
    var timestamp = 804643200000
    var result = getTime(timestamp)
    assert(result === timestamp)
  })
})
