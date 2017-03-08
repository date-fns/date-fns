// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isThursday from '.'

describe('isThursday', function () {
  it('returns true if the given date is Thursday', function () {
    var result = isThursday(new Date(2014, 8 /* Sep */, 25))
    assert(result === true)
  })

  it('returns false if the given date is not Thursday', function () {
    var result = isThursday(new Date(2014, 8 /* Sep */, 24))
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isThursday(new Date(2014, 6 /* Jul */, 10).toString())
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isThursday(new Date(2014, 1 /* Feb */, 13).getTime())
    assert(result === true)
  })
})
