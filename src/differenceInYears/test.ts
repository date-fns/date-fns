/* eslint-env mocha */

import assert from 'power-assert'
import differenceInYears from '.'

describe('differenceInYears', function () {
  it('returns the number of full years between the given dates', function () {
    const result = differenceInYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    const result = differenceInYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -1)
  })

  it('accepts timestamps', function () {
    const result = differenceInYears(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 4)
  })

  describe('leap days', function () {
    it('supports past dates with right side after leap day', () => {
      const result = differenceInYears(
        new Date(2004, 1 /* Feb */, 29, 0, 0),
        new Date(2002, 2 /* Mar */, 1, 0, 0)
      )
      assert(result === 1)
    })

    it('supports past dates with right side before leap day', () => {
      const result = differenceInYears(
        new Date(2004, 1 /* Feb */, 29, 0, 0),
        new Date(2002, 1 /* Feb */, 28, 0, 0)
      )
      assert(result === 2)
    })

    it('supports future dates', () => {
      const result = differenceInYears(
        new Date(2004, 1 /* Feb */, 29, 0, 0),
        new Date(2006, 2 /* Mar */, 1, 0, 0)
      )
      assert(result === -2)
    })

    it('supports equal dates of same year', () => {
      const result = differenceInYears(
        new Date(2004, 1 /* Feb */, 29, 0, 0),
        new Date(2004, 1 /* Feb */, 29, 0, 0)
      )
      assert(result === 0)
    })

    it('supports equal dates of different years', () => {
      const result = differenceInYears(
        new Date(2008, 1 /* Feb */, 29, 0, 0),
        new Date(2004, 1 /* Feb */, 29, 0, 0)
      )
      assert(result === 4)
    })
  })

  describe('edge cases', function () {
    it('the difference is less than a year, but the given dates are in different calendar years', function () {
      const result = differenceInYears(
        new Date(2015, 0 /* Jan */, 1),
        new Date(2014, 11 /* Dec */, 31)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      const result = differenceInYears(
        new Date(2014, 11 /* Dec */, 31),
        new Date(2015, 0 /* Jan */, 1)
      )
      assert(result === 0)
    })

    it('the days and months of the given dates are the same', function () {
      const result = differenceInYears(
        new Date(2014, 8 /* Sep */, 5),
        new Date(2012, 8 /* Sep */, 5)
      )
      assert(result === 2)
    })

    it('the given dates are the same', function () {
      const result = differenceInYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0
      }

      const result = differenceInYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      const resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    const result = differenceInYears(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    const result = differenceInYears(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    const result = differenceInYears(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(differenceInYears.bind(null), TypeError)
    assert.throws(differenceInYears.bind(null, 1), TypeError)
  })
})
