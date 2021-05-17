/* eslint-env mocha */

import assert from 'power-assert'
import differenceInMonths from '.'

describe('differenceInMonths', function () {
  it('returns the number of full months between the given dates', function () {
    const result = differenceInMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 12)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    const result = differenceInMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -12)
  })

  it('accepts timestamps', function () {
    const result = differenceInMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 49)
  })

  describe('edge cases', function () {
    it('it returns diff of 1 month between Feb 28 2021 and Jan 30 2021', function () {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 30)
      )
      assert(result === 1)
    })

    it('it returns diff of 1 month between Feb 28 2021 and Jan 31 2021', function () {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 31)
      )
      assert(result === 1)
    })

    it('it returns diff of 1 month between Nov, 30 2021 and Oct, 31 2021', function () {
      const result = differenceInMonths(
        new Date(2021, 10 /* Nov */, 30),
        new Date(2021, 9 /* Oct */, 31)
      )
      assert(result === 1)
    })

    it('it returns diff of 1 month between Oct, 31 2021 and Sep, 30 2021', function () {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 8 /* Sep */, 30)
      )
      assert(result === 1)
    })

    it('it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021', function () {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 3 /* Apr */, 30)
      )
      assert(result === 6)
    })

    it('it returns diff of -1 month between Sep, 30 2021 and Oct, 31 2021', function () {
      const result = differenceInMonths(
        new Date(2021, 8 /* Sep */, 30),
        new Date(2021, 9 /* Oct */, 31)
      )
      assert(result === -1)
    })

    it('the difference is less than a month, but the given dates are in different calendar months', function () {
      const result = differenceInMonths(
        new Date(2014, 7 /* Aug */, 1),
        new Date(2014, 6 /* Jul */, 31)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      const result = differenceInMonths(
        new Date(2014, 6 /* Jul */, 31),
        new Date(2014, 7 /* Aug */, 1)
      )
      assert(result === 0)
    })

    it('the days of months of the given dates are the same', function () {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0
      }

      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      const resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    const result = differenceInMonths(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    const result = differenceInMonths(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    const result = differenceInMonths(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(differenceInMonths.bind(null), TypeError)
    assert.throws(differenceInMonths.bind(null, 1), TypeError)
  })

  describe('edge cases', function () {
    it('returns the number of full months between the given dates - end of Feb', function () {
      assert(
        differenceInMonths(
          new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
          new Date(2012, 1 /* Feb */, 29, 10, 0, 0)
        ) === 0
      )
      assert(
        differenceInMonths(
          new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          new Date(2012, 1 /* Feb */, 29, 10, 0, 0)
        ) === 0
      )
      assert(
        differenceInMonths(
          new Date(2012, 1 /* Feb */, 27, 9, 0, 0),
          new Date(2012, 1 /* Feb */, 27, 10, 0, 0)
        ) === 0
      )
      assert(
        differenceInMonths(
          new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          new Date(2012, 1 /* Feb */, 28, 10, 0, 0)
        ) === 0
      )
    })

    assert(
      differenceInMonths(
        new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
        new Date(2021, 1 /* Feb */, 28, 7, 38, 18)
      ) === 0
    )
  })
})
