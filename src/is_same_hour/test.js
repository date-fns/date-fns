// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameHour from '.'

describe('isSameHour', function () {
  it('returns true if the given dates have the same hour', function () {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 6, 30)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different hours', function () {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 5, 0)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime()
    )
    assert(result === true)
  })
})
