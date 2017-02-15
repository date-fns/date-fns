// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSunday from '.'

describe('isSunday', function () {
  it('returns true if the given date is Sunday', function () {
    var result = isSunday(new Date(2014, 8 /* Sep */, 21))
    assert(result === true)
  })

  it('returns false if the given date is not Sunday', function () {
    var result = isSunday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSunday(new Date(2014, 6 /* Jul */, 6).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSunday(new Date(2014, 1 /* Feb */, 9).getTime())
    assert(result === true)
  })
})
