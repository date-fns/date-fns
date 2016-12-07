// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWeekend from '.'

describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5))
    assert(result === true)
  })

  it('returns false if the given date is not in a weekend', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 6))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime())
    assert(result === true)
  })
})
