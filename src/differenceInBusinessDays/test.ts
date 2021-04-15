/* eslint-env mocha */

import assert from 'power-assert'
import differenceInBusinessDays from '.'

describe('differenceInBusinessDays', function () {
  it('returns the number of business days between the given dates, excluding weekends', function () {
    const result = differenceInBusinessDays(
      new Date(2014, 6 /* Jul */, 18),
      new Date(2014, 0 /* Jan */, 10)
    )
    assert(result === 135)
  })

  it('can handle long ranges', function () {
    // @ts-ignore
    if (typeof this.timeout === 'function') {
      // @ts-ignore
      this.timeout(500 /* 500 ms test timeout */)
    }
    const result = differenceInBusinessDays(
      new Date(15000, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1)
    )
    assert(result === 3387885)
  })

  it('the same except given first date falls on a weekend', function () {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 20),
      new Date(2019, 6 /* Jul */, 18)
    )
    assert(result === 2)
  })

  it('the same except given second date falls on a weekend', function () {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 23),
      new Date(2019, 6 /* Jul */, 20)
    )
    assert(result === 1)
  })

  it('the same except both given dates fall on a weekend', function () {
    const result = differenceInBusinessDays(
      new Date(2019, 6 /* Jul */, 28),
      new Date(2019, 6 /* Jul */, 20)
    )
    assert(result === 5)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    const result = differenceInBusinessDays(
      new Date(2014, 0 /* Jan */, 10),
      new Date(2014, 6 /* Jul */, 20)
    )
    assert(result === -135)
  })

  it('accepts timestamps', function () {
    const result = differenceInBusinessDays(
      new Date(2014, 6, 18).getTime(),
      new Date(2014, 0, 10).getTime()
    )
    assert(result === 135)
  })

  describe('edge cases', function () {
    it('the difference is less than a day, but the given dates are in different calendar days', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === -1)
    })

    it('the time values of the given dates are the same', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 0, 0)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x: number) {
        return x === 0 && 1 / x < 0
      }

      const result = differenceInBusinessDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      const resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })

    it('returns NaN if the first date is `Invalid Date`', function () {
      const result = differenceInBusinessDays(
        new Date(NaN),
        new Date(2017, 0 /* Jan */, 1)
      )
      assert(isNaN(result))
    })

    it('returns NaN if the second date is `Invalid Date`', function () {
      const result = differenceInBusinessDays(
        new Date(2017, 0 /* Jan */, 1),
        new Date(NaN)
      )
      assert(isNaN(result))
    })

    it('returns NaN if the both dates are `Invalid Date`', function () {
      const result = differenceInBusinessDays(new Date(NaN), new Date(NaN))
      assert(isNaN(result))
    })

    it('throws TypeError exception if passed less than 2 arguments', function () {
      assert.throws(differenceInBusinessDays.bind(null), TypeError)
      assert.throws(differenceInBusinessDays.bind(null, 1), TypeError)
    })
  })
})
