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

  it('can handle a large number of business days', function () {
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

  it('throws RangeError if businessDays contains numbers greater than 6', function () {
    const block = subBusinessDays.bind(null, new Date(2022, 0, 14), 10, {
      businessDays: [3, 4, 5, 6, 7],
    })

    assert.throws(block, RangeError)
  })

  describe('exceptions', () => {
    it('can take in a list of enabling exceptions', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 10, {
        exceptions: {
          '01/16/22': true,
          '01/09/22': true,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 5))
    })

    it('can take in a list of disabling exceptions', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 24), 10, {
        exceptions: {
          '01/17/22': false,
          '01/10/22': false,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 6))
    })

    it('can account for businessDays and exception options', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 24), 11, {
        // given businessDays of Mon-Sat
        businessDays: [1, 2, 3, 4, 5, 6],
        exceptions: {
          '01/17/22': false,
          '01/10/22': false,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 8))
    })
  })

  it('throws RangeError if businessDays contains numbers greater than 6', function () {
    const block = subBusinessDays.bind(null, new Date(2022, 0, 14), 10, {
      businessDays: [3, 4, 5, 6, 7],
    })

    assert.throws(block, RangeError)
  })

  describe('exceptions', () => {
    it('can take in a list of enabling exceptions', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 17), 10, {
        exceptions: {
          '01/16/22': true,
          '01/09/22': true,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 5))
    })

    it('can take in a list of disabling exceptions', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 24), 10, {
        exceptions: {
          '01/17/22': false,
          '01/10/22': false,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 6))
    })

    it('can account for businessDays and exception options', () => {
      const result = subBusinessDays(new Date(2022, 0 /* Jan */, 24), 11, {
        // given businessDays of Mon-Sat
        businessDays: [1, 2, 3, 4, 5, 6],
        exceptions: {
          '01/17/22': false,
          '01/10/22': false,
        },
      })
      assert.deepStrictEqual(result, new Date(2022, 0 /* Jan */, 8))
    })
  })
})
