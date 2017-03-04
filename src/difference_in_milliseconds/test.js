// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInMilliseconds from '.'

describe('differenceInMilliseconds', function () {
  it('returns the number of milliseconds between the given dates', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700)
    )
    assert(result === 100)
  })

  it('returns a negative number if the time value of the second date is smaller', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600)
    )
    assert(result === -100)
  })

  it('accepts strings', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 6 /* Jul */, 2, 23, 59, 58, 999).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString()
    )
    assert(result === 1000)
  })

  it('accepts timestamps', function () {
    var result = differenceInMilliseconds(
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime()
    )
    assert(result === 0)
  })
})
