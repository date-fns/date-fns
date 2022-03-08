/* eslint-env mocha */

import assert from 'assert'
import subBusinessDays from './index'

describe('subBusinessDays', () => {
  it('subtracts the given number of business days', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('handles negative amount', () => {
    const result = subBusinessDays(new Date(2014, 7 /* Sep */, 18), -10)
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('can include Saturday in businessDays', function () {
    const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 8, {
      businessDays: [1, 2, 3, 4, 5, 6],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 7))
  })

  it('can include Sunday in businessDays', function () {
    const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 8, {
      businessDays: [0, 1, 2, 3, 4, 5],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 7))
  })

  it('can include Saturday and Sunday in businessDays', function () {
    const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 10, {
      businessDays: [0, 1, 2, 3, 4, 5, 6],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 7))
  })

  it('can handle a large number of business days', () => {
    // @ts-ignore
    if (typeof this.timeout === 'function') {
      // @ts-ignore
      this.timeout(500 /* 500 ms test timeout */)
    }

    const result = subBusinessDays(new Date(15000, 0 /* Jan */, 1), 3387885)
    assert.deepStrictEqual(result, new Date(2014, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepStrictEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    subBusinessDays(date, 11)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Szep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(subBusinessDays.bind(null), TypeError)
    assert.throws(
      // @ts-expect-error
      subBusinessDays.bind(null, new Date(2014, 8 /* Sep */, 1)),
      TypeError
    )
  })

  it('still works if you add extra businessDays numbers greater than 6', () => {
    const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 10, {
      businessDays: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    })
    assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 7))
  })

  describe('exceptions', () => {
    it('can take in a list of enabling exceptions', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 10, {
        exceptions: {
          '01/16/2022': true,
          '01/09/2022': true,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 5))
    })

    it('can take in a list of disabling exceptions', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 24), 10, {
        exceptions: {
          '01/17/2022': false,
          '01/10/2022': false,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 6))
    })
  })
})
