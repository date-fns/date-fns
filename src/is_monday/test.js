// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isMonday from '.'

describe('isMonday', function () {
  it('returns true if the given date is Monday', function () {
    var result = isMonday(new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('returns false if the given date is not Monday', function () {
    var result = isMonday(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isMonday(new Date(2014, 6 /* Jul */, 7).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime())
    assert(result === true)
  })
})
