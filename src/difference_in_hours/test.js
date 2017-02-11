// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInHours from '.'

describe('differenceInHours', function () {
  it('returns the number of hours between the given dates', function () {
    var result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 6, 0),
      new Date(2014, 6 /* Jul */, 2, 20, 0)
    )
    assert(result === 14)
  })

  it('returns a negative number if the time value of the second date is smaller', function () {
    var result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 20, 0),
      new Date(2014, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === -14)
  })

  it('accepts strings', function () {
    var result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 13).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString()
    )
    assert(result === 10)
  })

  it('accepts timestamps', function () {
    var result = differenceInHours(
      new Date(2014, 8 /* Sep */, 5, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime()
    )
    assert(result === 12)
  })

  describe('edge cases', function () {
    it('the difference is less than an hour, but the given dates are in different calendar hours', function () {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 12),
        new Date(2014, 8 /* Sep */, 5, 11, 59)
      )
      assert(result === 0)
    })

    it('the difference is an integral number of hours', function () {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 12, 0),
        new Date(2014, 8 /* Sep */, 5, 13, 0)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      var result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})
