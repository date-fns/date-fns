/* eslint-env mocha */

import assert from 'assert'
import differenceInHours from '.'

describe('differenceInHours', function () {
  it('returns the number of hours between the given dates with `trunc` as a default rounding method', function () {
    const result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 6, 0, 29),
      new Date(2014, 6 /* Jul */, 2, 20, 0, 28.973)
    )
    assert(result === -13)
  })

  it('returns the number of hours between the given dates', function () {
    const result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 20, 0),
      new Date(2014, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 14)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    const result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 6, 0),
      new Date(2014, 6 /* Jul */, 2, 20, 0)
    )
    assert(result === -14)
  })

  it('returns a 0, not a negative 0 - issue #2555 ', function () {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976)
    )
    assert(result === 0)
  })

  it('returns 2 with a rounding method of `ceil`, not a negative 0 - issue #2555 ', function () {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: 'ceil' }
    )
    assert(result === 2)
  })

  it('returns 1 with a rounding method of `floor`, not a negative 0 - issue #2555 ', function () {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: 'floor' }
    )
    assert(result === 1)
  })

  it('returns 1 with a rounding method of `round`, not a negative 0 - issue #2555 ', function () {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: 'round' }
    )
    assert(result === 1)
  })

  it('returns 1 with a rounding method of `trunc`, not a negative 0 - issue #2555 ', function () {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: 'trunc' }
    )
    assert(result === 1)
  })

  it('accepts timestamps', function () {
    const result = differenceInHours(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 5, 6, 0).getTime()
    )
    assert(result === 12)
  })

  describe('edge cases', function () {
    it('the difference is less than an hour, but the given dates are in different calendar hours', function () {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 12),
        new Date(2014, 8 /* Sep */, 5, 11, 59)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12)
      )
      assert(result === 0)
    })

    it('the difference is an integral number of hours', function () {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 13, 0),
        new Date(2014, 8 /* Sep */, 5, 12, 0)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function () {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0
      }

      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      const resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function () {
    const result = differenceInHours(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function () {
    const result = differenceInHours(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function () {
    const result = differenceInHours(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    //@ts-expect-error
    assert.throws(differenceInHours.bind(null), TypeError)
    //@ts-expect-error
    assert.throws(differenceInHours.bind(null, 1), TypeError)
  })
})
