// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameDay from '.'

describe('isSameDay', function () {
  it('returns true if the given dates have the same day', function () {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different days', function () {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime()
    )
    assert(result === true)
  })
})
