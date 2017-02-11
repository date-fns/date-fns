// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isTuesday from '.'

describe('isTuesday', function () {
  it('returns true if the given date is Tuesday', function () {
    var result = isTuesday(new Date(2014, 8 /* Sep */, 23))
    assert(result === true)
  })

  it('returns false if the given date is not Tuesday', function () {
    var result = isTuesday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isTuesday(new Date(2014, 6 /* Jul */, 8).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isTuesday(new Date(2014, 1 /* Feb */, 11).getTime())
    assert(result === true)
  })
})
