// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getMonth from '.'

describe('getMonth', function () {
  it('returns the month of the given date', function () {
    var result = getMonth(new Date(2012, 1 /* Feb */, 29))
    assert(result === 1)
  })

  it('accepts a string', function () {
    var result = getMonth(new Date(2014, 6 /* Jul */, 2).toISOString())
    assert(result === 6)
  })

  it('accepts a timestamp', function () {
    var result = getMonth(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 3)
  })
})
