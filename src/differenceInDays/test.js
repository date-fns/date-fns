// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInDays from '.'

describe('differenceInDays', function() {
  it('returns the number of full days between the given dates', function() {
    var result = differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 366)
  })

  it('returns a negative number if the time value of the first date is smaller', function() {
    var result = differenceInDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -366)
  })

  it('accepts timestamps', function() {
    var result = differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime()
    )
    assert(result === 1)
  })

  describe('edge cases', function() {
    it('the difference is less than a day, but the given dates are in different calendar days', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('the time values of the given dates are the same', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 6, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function() {
      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('ignores any localtime differences with DST', function() {
      const a = new Date('2019-10-05T15:00:00.000Z') // for TZ=Australia/Sydney, this is 1 hour before DST
      const b = new Date('2019-10-06T14:00:00.000Z') // for TZ=Australia/Sydney, this is 1 day  after DST
      const c = new Date('2019-10-07T14:00:00.000Z') // for TZ=Australia/Sydney, this is 2 days after DST

      assert(differenceInDays(c, b) === 1)
      assert(differenceInDays(b, a) === 0) // 23 hours < 1 day
      assert(differenceInDays(c, a) === 1) // 47 hours < 2 days
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0
      }

      var result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    var result = differenceInDays(new Date(NaN), new Date(2017, 0 /* Jan */, 1))
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    var result = differenceInDays(new Date(2017, 0 /* Jan */, 1), new Date(NaN))
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    var result = differenceInDays(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(differenceInDays.bind(null), TypeError)
    assert.throws(differenceInDays.bind(null, 1), TypeError)
  })
})
