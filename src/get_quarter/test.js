// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getQuarter from '.'

describe('getQuarter', function () {
  it('returns the quarter of the given date', function () {
    var result = getQuarter(new Date(2014, 6 /* Jul */, 2))
    assert(result === 3)
  })

  it('accepts a string', function () {
    var result = getQuarter(new Date(2014, 3 /* Apr */, 2).toISOString())
    assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = getQuarter(new Date(2014, 3 /* Apr */, 2).getTime())
    assert(result === 2)
  })
})
