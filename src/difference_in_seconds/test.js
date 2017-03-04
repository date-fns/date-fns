// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInSeconds from '.'

describe('differenceInSeconds', function () {
  it('returns the number of seconds between the given dates', function () {
    var result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20)
    )
    assert(result === 14)
  })

  it('returns a negative number if the time value of the second date is smaller', function () {
    var result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6)
    )
    assert(result === -14)
  })

  it('accepts strings', function () {
    var result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 23, 59).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString()
    )
    assert(result === 59)
  })

  it('accepts timestamps', function () {
    var result = differenceInSeconds(
      new Date(2014, 8 /* Sep */, 5, 18, 30, 15).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45).getTime()
    )
    assert(result === 30)
  })

  describe('edge cases', function () {
    it('the difference is less than a second, but the given dates are in different calendar seconds', function () {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 12)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 12),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999)
      )
      assert(result === 0)
    })

    it('the difference is an integral number of seconds', function () {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 15),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 25)
      )
      assert(result === 10)
    })

    it('the given dates are the same', function () {
      var result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })
  })
})
