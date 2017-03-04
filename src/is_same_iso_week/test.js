// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameISOWeek from '.'

describe('isSameISOWeek', function () {
  it('returns true if the given dates have the same ISO week', function () {
    var result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 7)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different ISO weeks', function () {
    var result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 14)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).toISOString(),
      new Date(2014, 6 /* Jul */, 2).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    assert(result === true)
  })
})
