// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSaturday from '.'

describe('isSaturday', function () {
  it('returns true if the given date is Saturday', function () {
    var result = isSaturday(new Date(2014, 8 /* Sep */, 27))
    assert(result === true)
  })

  it('returns false if the given date is not Saturday', function () {
    var result = isSaturday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSaturday(new Date(2014, 6 /* Jul */, 12).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSaturday(new Date(2014, 1 /* Feb */, 15).getTime())
    assert(result === true)
  })
})
