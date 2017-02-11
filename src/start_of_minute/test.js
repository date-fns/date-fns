// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfMinute from '.'

describe('startOfMinute', function () {
  it('returns the date with the time setted to the first millisecond of a minute', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 13, 20).toISOString()
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 13, 20))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15).getTime()
    var result = startOfMinute(date)
    assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    startOfMinute(date)
    assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400))
  })
})
