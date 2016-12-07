// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getYear from '.'

describe('getYear', function () {
  it('returns the year of the given date', function () {
    var result = getYear(new Date(2014, 6 /* Jul */, 2))
    assert(result === 2014)
  })

  it('accepts a string', function () {
    var result = getYear(new Date(700, 6 /* Jul */, 2).toISOString())
    assert(result === 700)
  })

  it('accepts a timestamp', function () {
    var result = getYear(new Date(20000, 3 /* Apr */, 2).getTime())
    assert(result === 20000)
  })
})
