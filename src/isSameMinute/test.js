// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameMinute from '.'

describe('isSameMinute', function () {
  it('returns true if the given dates have the same minute', function () {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different minutes', function () {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
      new Date(2014, 8 /* Sep */, 4, 6, 31)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime()
    )
    assert(result === true)
  })
})
